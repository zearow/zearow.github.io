<script setup lang="ts">
useSeoMeta({
  title: 'Blog - zearøw',
  description: 'Insights on digital transformation, process optimization, and custom software development.',
  ogTitle: 'Blog - zearøw',
  ogDescription: 'Insights on digital transformation, process optimization, and custom software development.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'alternate', type: 'application/rss+xml', title: 'zearøw Blog RSS', href: '/blog/rss.xml' }
  ]
})

const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

const activeBadge = ref<string | null>(null)
const activeYear = ref<number | null>(null)
const activeMonth = ref<number | null>(null)

const badges = computed(() => {
  if (!posts.value) return []
  const set = new Set(posts.value.map(p => p.badge).filter(Boolean))
  return Array.from(set) as string[]
})

const dateTree = computed(() => {
  if (!posts.value) return []
  const map = new Map<number, Set<number>>()
  for (const post of posts.value) {
    const d = new Date(post.date)
    const year = d.getFullYear()
    const month = d.getMonth()
    if (!map.has(year)) map.set(year, new Set())
    map.get(year)!.add(month)
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, months]) => ({
      year,
      months: Array.from(months).sort((a, b) => b - a)
    }))
})

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const badgeImages: Record<string, string> = {
  Insights: '/undraw_bright-ideas_z7u9.svg',
  Guide: '/undraw_teaching_58yg.svg',
  Philosophy: '/undraw_education_3vwh.svg'
}

const searchQuery = ref('')

const filteredPosts = computed(() => {
  if (!posts.value) return []
  let result = [...posts.value]

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    )
  }

  if (activeBadge.value) {
    result = result.filter(p => p.badge === activeBadge.value)
  }

  if (activeYear.value !== null) {
    result = result.filter(p => {
      const d = new Date(p.date)
      if (d.getFullYear() !== activeYear.value) return false
      if (activeMonth.value !== null && d.getMonth() !== activeMonth.value) return false
      return true
    })
  }

  result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return result
})

function toggleBadge(badge: string) {
  activeBadge.value = activeBadge.value === badge ? null : badge
}

function selectYear(year: number) {
  if (activeYear.value === year) {
    activeYear.value = null
    activeMonth.value = null
  } else {
    activeYear.value = year
    activeMonth.value = null
  }
}

function selectMonth(year: number, month: number) {
  activeYear.value = year
  activeMonth.value = activeMonth.value === month ? null : month
}

function clearFilters() {
  searchQuery.value = ''
  activeBadge.value = null
  activeYear.value = null
  activeMonth.value = null
}
</script>

<template>
  <div>
    <UPageHero
      title="Blog"
      description="Insights on digital transformation, process optimization, and custom software development"
      :ui="{ root: 'relative !pb-0' }"
    >
      <template #top>
        <HeroParticles />
      </template>
    </UPageHero>

    <ScrollReveal>
      <UPageSection :ui="{ root: '!pt-0', container: '!pt-0' }">
        <div class="grid lg:grid-cols-[160px_1fr] gap-8">
          <!-- Sidebar -->
          <aside class="lg:sticky lg:top-20 lg:self-start space-y-6">
            <!-- Search -->
            <div>
              <h3 class="text-xs font-semibold uppercase tracking-wide text-(--ui-text-dimmed) mb-3">Search</h3>
              <UInput
                v-model="searchQuery"
                placeholder="Search posts..."
                icon="i-lucide-search"
                size="sm"
                class="w-full"
              />
            </div>

            <!-- Badge filters -->
            <div>
              <h3 class="text-xs font-semibold uppercase tracking-wide text-(--ui-text-dimmed) mb-3">Category</h3>
              <div class="flex flex-wrap lg:flex-col gap-1.5">
                <UButton
                  label="All"
                  :variant="activeBadge === null && activeYear === null ? 'soft' : 'ghost'"
                  size="sm"
                  block
                  :ui="{ root: 'justify-start' }"
                  @click="clearFilters"
                />
                <UButton
                  v-for="badge in badges"
                  :key="badge"
                  :label="badge"
                  :variant="activeBadge === badge ? 'soft' : 'ghost'"
                  size="sm"
                  block
                  :ui="{ root: 'justify-start' }"
                  @click="toggleBadge(badge)"
                />
              </div>
            </div>

            <!-- Date tree -->
            <div>
              <h3 class="text-xs font-semibold uppercase tracking-wide text-(--ui-text-dimmed) mb-3">Archive</h3>
              <div class="space-y-1">
                <div v-for="group in dateTree" :key="group.year">
                  <UButton
                    :label="String(group.year)"
                    :variant="activeYear === group.year && activeMonth === null ? 'soft' : 'ghost'"
                    size="sm"
                    block
                    :ui="{ root: 'justify-start font-semibold' }"
                    @click="selectYear(group.year)"
                  />
                  <div v-if="activeYear === group.year" class="ml-4 space-y-0.5">
                    <UButton
                      v-for="month in group.months"
                      :key="month"
                      :label="monthNames[month]"
                      :variant="activeMonth === month ? 'soft' : 'ghost'"
                      size="xs"
                      block
                      :ui="{ root: 'justify-start' }"
                      @click="selectMonth(group.year, month)"
                    />
                  </div>
                </div>
              </div>
            </div>

            <USeparator />

            <!-- RSS -->
            <div>
              <UButton
                to="/blog/rss.xml"
                target="_blank"
                icon="i-lucide-rss"
                label="RSS Feed"
                variant="ghost"
                size="sm"
                block
                :ui="{ root: 'justify-start' }"
              />
            </div>
          </aside>

          <!-- Posts -->
          <div>
            <UBlogPosts v-if="filteredPosts.length">
              <UBlogPost
                v-for="post in filteredPosts"
                :key="post.path"
                :title="post.title"
                :description="post.description"
                :date="post.date"
                :badge="post.badge ? { label: post.badge, color: 'primary' } : undefined"
                :image="post.badge ? badgeImages[post.badge] : undefined"
                :authors="post.authors"
                :to="post.path"
                variant="outline"
                :ui="{ root: 'hover:ring-primary-400 transition-shadow', image: 'object-contain p-6' }"
              />
            </UBlogPosts>

            <!-- Empty state -->
            <div v-if="!filteredPosts.length" class="py-16 text-center text-(--ui-text-muted)">
              <UIcon name="i-lucide-search-x" class="size-10 mx-auto mb-3" />
              <p>No posts found for this filter.</p>
              <UButton label="Clear filters" variant="link" class="mt-2" @click="clearFilters" />
            </div>
          </div>
        </div>
      </UPageSection>
    </ScrollReveal>

    <ScrollReveal>
      <SectionDivider />
      <UPageCTA
        title="Ready to transform your business?"
        description="Let's discuss how we can help optimize your processes and build the right technology for your needs."
        :links="[{ label: 'Get in Touch', to: '/contact?reason=service', size: 'lg' as const }]"
        variant="subtle"
      />
    </ScrollReveal>
  </div>
</template>
