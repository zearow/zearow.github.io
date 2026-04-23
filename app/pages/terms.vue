<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service - zearøw',
  description: 'Terms and conditions for using the zearøw website and services.',
  ogTitle: 'Terms of Service - zearøw',
  ogDescription: 'Terms and conditions for using the zearøw website and services.',
  twitterCard: 'summary_large_image'
})


const sections = [
  {
    icon: 'i-lucide-check-circle',
    title: 'Acceptance of Terms',
    items: [
      { label: 'Agreement', description: 'By accessing and using the zearøw website, you accept and agree to be bound by these terms of service.' },
      { label: 'Refusal', description: 'If you do not agree to these terms, please do not use our website.' }
    ]
  },
  {
    icon: 'i-lucide-briefcase',
    title: 'Services',
    items: [
      { label: 'What We Offer', description: 'zearøw provides custom software development, business process optimization, and digital transformation consulting services.' },
      { label: 'Engagement Terms', description: 'The specific scope, deliverables, and terms of any engagement are defined in individual project agreements.' }
    ]
  },
  {
    icon: 'i-lucide-copyright',
    title: 'Intellectual Property',
    items: [
      { label: 'Ownership', description: 'All content on this website — including text, graphics, logos, and images — is the property of zearøw and is protected by applicable intellectual property laws.' },
      { label: 'Restrictions', description: 'You may not reproduce, distribute, or create derivative works from our content without our written permission.' }
    ]
  },
  {
    icon: 'i-lucide-globe',
    title: 'Website Use',
    items: [
      { label: 'Lawful Use', description: 'You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.' },
      { label: 'Prohibited Behavior', description: 'Transmitting harmful code, attempting unauthorized access, or using the site for commercial solicitation is prohibited.' }
    ]
  },
  {
    icon: 'i-lucide-mail',
    title: 'Contact Form',
    items: [
      { label: 'Data Use', description: 'Information submitted through our contact form is used solely for the purpose of responding to your inquiry.' },
      { label: 'Consent', description: 'By submitting the form, you consent to us processing your data as described in our Privacy Policy.' }
    ]
  },
  {
    icon: 'i-lucide-alert-triangle',
    title: 'Disclaimer & Liability',
    items: [
      { label: 'Disclaimer', description: 'The information on this website is provided "as is" without warranties of any kind. We make no guarantees about completeness, reliability, or suitability.' },
      { label: 'Limitation of Liability', description: 'zearøw shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website.' },
      { label: 'External Links', description: 'Our website may contain links to external sites. We are not responsible for the content or privacy practices of those sites.' }
    ]
  },
  {
    icon: 'i-lucide-refresh-cw',
    title: 'Changes & Governance',
    items: [
      { label: 'Modifications', description: 'We reserve the right to modify these terms at any time. Changes take effect immediately upon posting.' },
      { label: 'Continued Use', description: 'Continued use of the website after changes constitutes acceptance of the updated terms.' },
      { label: 'Governing Law', description: 'These terms are governed by and construed in accordance with applicable law. Any disputes shall be resolved through appropriate legal channels.' }
    ]
  }
]
</script>

<template>
  <div>
    <UPageHero
      title="Terms of Service"
      description="Terms and conditions for using our website and services"
      :ui="{ root: 'relative !pb-0' }"
    >
      <template #top>
        <HeroParticles />
      </template>
      <template #footer>
        <p class="text-sm text-(--ui-text-dimmed)">Last updated: January 1, 2026</p>
      </template>
    </UPageHero>

    <ScrollReveal>
      <UPageSection :ui="{ root: '!pt-0', container: '!pt-0' }">
        <div class="space-y-12">
          <div v-for="(section, i) in sections" :key="section.title">
            <div class="flex items-center gap-3 mb-6">
              <div class="size-10 rounded-lg flex items-center justify-center bg-primary-50 dark:bg-primary-950">
                <UIcon :name="section.icon" class="size-5 text-primary-400" />
              </div>
              <h2 class="text-xl font-bold text-(--ui-text-highlighted)">{{ i + 1 }}. {{ section.title }}</h2>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <UCard v-for="item in section.items" :key="item.label" :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
                <h3 class="font-semibold text-(--ui-text-highlighted) text-sm">{{ item.label }}</h3>
                <p class="mt-2 text-sm text-(--ui-text-muted)">{{ item.description }}</p>
              </UCard>
            </div>
          </div>

          <!-- Contact section -->
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="size-10 rounded-lg flex items-center justify-center bg-primary-50 dark:bg-primary-950">
                <UIcon name="i-lucide-message-circle" class="size-5 text-primary-400" />
              </div>
              <h2 class="text-xl font-bold text-(--ui-text-highlighted)">8. Contact</h2>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <UCard :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
                <h3 class="font-semibold text-(--ui-text-highlighted) text-sm">Questions</h3>
                <p class="mt-2 text-sm text-(--ui-text-muted)">For questions about these terms, please <NuxtLink to="/contact/?reason=general" class="text-primary-400 underline">contact us</NuxtLink>.</p>
              </UCard>
              <UCard :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
                <h3 class="font-semibold text-(--ui-text-highlighted) text-sm">Privacy</h3>
                <p class="mt-2 text-sm text-(--ui-text-muted)">For data and privacy related inquiries, please refer to our <NuxtLink to="/privacy/" class="text-primary-400 underline">Privacy Policy</NuxtLink>.</p>
              </UCard>
            </div>
          </div>
        </div>
      </UPageSection>
    </ScrollReveal>
  </div>
</template>
