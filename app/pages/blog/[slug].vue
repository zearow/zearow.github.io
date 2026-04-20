<script setup lang="ts">
const route = useRoute()

const badgeImages: Record<string, string> = {
  Insights: '/undraw_bright-ideas_z7u9.svg',
  Guide: '/undraw_teaching_58yg.svg',
  Philosophy: '/undraw_education_3vwh.svg'
}

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryCollection('blog').path(`/blog/${route.params.slug}`).first()
)

const heroImage = computed(() => post.value?.badge ? badgeImages[post.value.badge] : undefined)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

useSeoMeta({
  title: `${post.value.title} - zearøw`,
  description: post.value.description,
  ogTitle: `${post.value.title} - zearøw`,
  ogDescription: post.value.description,
  ogImage: post.value.image || '/og-image.png',
  twitterCard: 'summary_large_image'
})

const postUrl = `https://zearow.com/blog/${route.params.slug}`
const postImage = post.value.image
  ? `https://zearow.com${post.value.image}`
  : heroImage.value
    ? `https://zearow.com${heroImage.value}`
    : 'https://zearow.com/og-image.png'

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.value.title,
        description: post.value.description,
        datePublished: post.value.date,
        image: postImage,
        author: { '@id': 'https://zearow.com/#organization' },
        publisher: { '@id': 'https://zearow.com/#organization' },
        url: postUrl,
        mainEntityOfPage: postUrl
      })
    }
  ]
})
</script>

<template>
  <div v-if="post">
    <UPageHero
      :title="post.title"
      :description="post.description"
      :ui="{ root: 'relative !py-0', container: '!py-6 sm:!py-8', headline: 'mb-4' }"
      orientation="horizontal"
    >
      <template #top>
        <HeroParticles />
        <UContainer class="relative z-10 pt-4">
          <UButton to="/blog" icon="i-lucide-arrow-left" label="Back to Blog" variant="link" size="sm" />
        </UContainer>
      </template>
      <template #default>
        <img v-if="heroImage" :src="heroImage" :alt="post.badge" class="w-full max-w-xs mx-auto" />
      </template>
      <template #headline>
        <UBadge v-if="post.badge" :label="post.badge" color="primary" />
      </template>
      <template #footer>
        <p class="text-sm text-(--ui-text-muted)">
          <span v-if="post.authors?.length">Posted by {{ post.authors.map(a => a.name).join(', ') }}</span>
          <span v-if="post.authors?.length && post.date"> on </span>
          <time v-if="post.date">{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
        </p>
      </template>
    </UPageHero>

    <UContainer class="py-12">
      <ContentRenderer :value="post" class="prose dark:prose-invert max-w-none" />
    </UContainer>

    <ScrollReveal>
      <SectionDivider />
      <UPageCTA
        title="Want to learn more?"
        description="Get in touch to discuss how we can help with your digital transformation."
        :links="[
          { label: 'Contact Us', to: '/contact?reason=service', size: 'lg' as const },
          { label: 'Back to Blog', to: '/blog', variant: 'outline' as const, size: 'lg' as const }
        ]"
        variant="subtle"
      />
    </ScrollReveal>
  </div>
</template>
