<script setup lang="ts">
import type { PageFeatureProps, ButtonProps } from '@nuxt/ui'

useSeoMeta({
  title: 'zearøw - Your Partner in Digital Transformation',
  description: 'We build custom software that fits your processes — not the other way around. People-first digital transformation for growing businesses.',
  ogTitle: 'zearøw - Your Partner in Digital Transformation',
  ogDescription: 'We build custom software that fits your processes — not the other way around. People-first digital transformation for growing businesses.',
  twitterCard: 'summary_large_image'
})

const heroLinks: ButtonProps[] = [
  { label: 'Get in Touch', to: '/contact?reason=service', size: 'xl' },
  { label: 'Our Services', to: '/services', size: 'xl', variant: 'outline' }
]

const pillars: PageFeatureProps[] = [
  {
    icon: 'i-lucide-users',
    title: 'People',
    description: 'We put stakeholders at the center. Clear roles, user-centric design, and empowered teams drive every solution we build.',
    orientation: 'vertical'
  },
  {
    icon: 'i-lucide-workflow',
    title: 'Processes',
    description: 'We map, analyze, and optimize your business processes to eliminate bottlenecks and unlock efficiency.',
    orientation: 'vertical'
  },
  {
    icon: 'i-lucide-code',
    title: 'Technology',
    description: 'Custom software that fits your processes — not the other way around. Built for flexibility, scalability, and growth.',
    orientation: 'vertical'
  }
]

const services = [
  { icon: 'i-lucide-search', title: 'Business Process Analysis', description: 'In-depth analysis and optimization of your current business processes.' },
  { icon: 'i-lucide-blocks', title: 'Custom Software Development', description: 'Tailored software solutions designed for your specific requirements.' },
  { icon: 'i-lucide-rocket', title: 'Digital Transformation Strategy', description: 'Comprehensive roadmap for aligning technology with your business objectives.' }
]
</script>

<template>
  <div>
    <UPageHero
      title="Your partner in digital transformation"
      description="We create custom software solutions that seamlessly integrate with your business processes and empower your team to thrive"
      :links="heroLinks"
      :ui="{ root: 'relative !pb-0' }"
    >
      <template #top>
        <HeroParticles />
      </template>
    </UPageHero>

    <ScrollReveal>
      <UPageSection
        headline="Our Foundation"
        title="Built on Three Pillars"
        description="People, processes, and technology are interdependent. We address all three to deliver solutions that truly work."
        :features="pillars"
        :ui="{ root: '!pt-0', container: '!pt-0' }"
        orientation="horizontal"
      >
        <img src="/undraw_work-in-progress_m95a.svg" alt="Built on three pillars" class="w-full max-w-md mx-auto" />
      </UPageSection>
    </ScrollReveal>

    <SectionDivider />

    <ScrollReveal>
      <UPageSection
        headline="Expertise"
        title="What We Do"
        :links="[{ label: 'View All Services', to: '/services', variant: 'outline' as const, size: 'lg' as const }]"
        orientation="horizontal"
        reverse
      >
        <template #default>
          <img src="/undraw_thought-process_ze2r.svg" alt="What we do" class="w-full max-w-md mx-auto" />
        </template>
        <template #body>
          <div class="grid gap-4">
            <UPageCard
              v-for="service in services"
              :key="service.title"
              :icon="service.icon"
              :title="service.title"
              :description="service.description"
              variant="outline"
              :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }"
            />
          </div>
        </template>
      </UPageSection>
    </ScrollReveal>

    <SectionDivider />

    <ScrollReveal>
      <UPageCTA
        title="Let's Transform Together"
        description="Whether you're embarking on a digital transformation journey or seeking a software solution that harmonizes with your processes and people, we're here to guide you."
        :links="[{ label: 'Contact Us', to: '/contact?reason=service', size: 'lg' as const }]"
        variant="subtle"
      />
    </ScrollReveal>
  </div>
</template>
