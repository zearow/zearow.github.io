<script setup lang="ts">
useSeoMeta({
  title: 'Products - SaaS Applications Coming Soon | zearøw',
  description: "We're packaging the patterns we've refined through years of custom engagements into ready-to-use SaaS products. Be first in line when we launch.",
  ogTitle: 'Products - SaaS Applications Coming Soon | zearøw',
  ogDescription: "We're packaging the patterns we've refined through years of custom engagements into ready-to-use SaaS products. Be first in line when we launch.",
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div>
    <UPageHero
      description="Subscription-based applications built on the patterns we've refined through years of custom engagements"
      :ui="{ root: 'relative !py-8 sm:!py-12' }"
    >
      <template #top>
        <HeroParticles />
      </template>
      <template #title>
        <div class="flex items-center justify-center gap-4 flex-wrap">
          <span>Products</span>
          <UBadge label="Coming Soon" color="primary" variant="soft" size="md" :ui="{ label: '!whitespace-nowrap !overflow-visible' }" />
        </div>
      </template>
    </UPageHero>

    <ScrollReveal>
      <UPageSection :ui="{ root: '!pt-0', container: '!pt-0' }">
        <UContainer class="max-w-2xl">
          <div class="text-center py-8">
            <div class="inline-flex items-center justify-center size-20 rounded-full bg-primary-50 dark:bg-primary-950 mb-6">
              <UIcon name="i-lucide-rocket" class="size-10 text-primary-400" />
            </div>

            <h2 class="text-3xl font-bold text-(--ui-text-highlighted)">Our SaaS suite is on the way</h2>

            <p class="mt-4 text-(--ui-text-muted)">
              We're packaging the most successful patterns from our custom engagements into ready-to-use applications. Each product is designed to deliver measurable efficiency gains from day one — without the lead time of a custom build.
            </p>

            <p class="mt-4 text-(--ui-text-muted)">
              Want to be first in line when our products launch? Get in touch and we'll keep you in the loop.
            </p>

            <div class="mt-8 flex justify-center gap-3">
              <UButton to="/contact/?reason=saas" label="Notify Me" size="lg" />
              <UButton to="/services/" label="See Our Services" size="lg" variant="outline" />
            </div>
          </div>
        </UContainer>
      </UPageSection>
    </ScrollReveal>
  </div>
</template>
