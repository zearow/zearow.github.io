<script setup lang="ts">
useSeoMeta({
  title: 'Careers - Join the zearøw Team',
  description: 'Remote-friendly, outcome-focused, people-first. We hire smart engineers and designers who care more about impact than hours logged.',
  ogTitle: 'Careers - Join the zearøw Team',
  ogDescription: 'Remote-friendly, outcome-focused, people-first. We hire smart engineers and designers who care more about impact than hours logged.',
  twitterCard: 'summary_large_image'
})


const values = [
  {
    icon: 'i-lucide-users',
    title: 'People First',
    description: 'We believe great software starts with understanding people. Our team reflects that philosophy in everything we do.'
  },
  {
    icon: 'i-lucide-brain',
    title: 'Continuous Learning',
    description: 'Technology evolves, and so do we. We invest in our team\'s growth through training, conferences, and knowledge sharing.'
  },
  {
    icon: 'i-lucide-handshake',
    title: 'Trust & Autonomy',
    description: 'We hire smart people and trust them to do their best work. Flexible schedules, remote-friendly, and outcome-focused.'
  },
  {
    icon: 'i-lucide-target',
    title: 'Impact Over Output',
    description: 'We measure success by the value we create for our clients, not by hours logged or lines of code written.'
  }
]
</script>

<template>
  <div>
    <UPageHero
      title="Join Our Team"
      description="We're always looking for talented people who share our passion for helping businesses thrive through technology"
      :ui="{ root: 'relative !pb-0' }"
    >
      <template #top>
        <HeroParticles />
      </template>
    </UPageHero>

    <ScrollReveal>
      <UPageSection
        :ui="{ root: '!pt-0', container: '!pt-0' }"
        headline="Culture"
        title="What It's Like to Work Here"
        :features="values"
        orientation="horizontal"
      >
        <img src="/undraw_team-spirit_18vw.svg" alt="Team spirit" width="873" height="590" class="w-full h-auto max-w-md mx-auto" />
      </UPageSection>
    </ScrollReveal>

    <ScrollReveal>
      <SectionDivider />
      <UPageSection title="Open Positions">
        <UContainer class="max-w-3xl">
          <div class="text-center py-12">
            <UIcon name="i-lucide-briefcase" class="size-12 mx-auto text-primary-400 mb-4" />
            <h3 class="text-xl font-bold text-(--ui-text-highlighted)">No open positions right now</h3>
            <p class="mt-3 text-(--ui-text-muted) max-w-md mx-auto">
              We don't have any specific openings at the moment, but we're always interested in hearing from talented people. If you think you'd be a great fit, reach out through our contact form.
            </p>
            <UButton to="/contact/?reason=career" label="Get in Touch" size="lg" class="mt-6" />
          </div>
        </UContainer>
      </UPageSection>
    </ScrollReveal>

    <ScrollReveal>
      <SectionDivider />
      <UPageCTA
        title="Not ready to apply?"
        description="Follow our blog to learn more about how we work and what we value. When the right opportunity comes, you'll know."
        :links="[
          { label: 'Read Our Blog', to: '/blog/', size: 'lg' as const, variant: 'outline' as const },
          { label: 'Learn About Us', to: '/about/', size: 'lg' as const, variant: 'outline' as const }
        ]"
        variant="subtle"
      />
    </ScrollReveal>
  </div>
</template>
