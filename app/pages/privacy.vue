<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy - zearøw',
  description: "We don't use cookies, tracking, or analytics. Read what data we collect from contact forms, how we use it, and your rights under GDPR.",
  ogTitle: 'Privacy Policy - zearøw',
  ogDescription: "We don't use cookies, tracking, or analytics. Read what data we collect from contact forms, how we use it, and your rights under GDPR.",
  twitterCard: 'summary_large_image'
})


const sections = [
  {
    icon: 'i-lucide-database',
    title: 'Information We Collect',
    items: [
      { label: 'Contact Form Data', description: 'When you submit our contact form, we collect your name, email address, company name (optional), services of interest (optional), and your message.' },
      { label: 'Website Usage', description: 'We do not use cookies, third-party tracking, or analytics on this website. Your browsing activity is not tracked or stored.' },
      { label: 'Automatically Collected', description: 'Our hosting provider may collect basic server logs (IP address, browser type, access time) for security purposes. These are not used for tracking or profiling.' }
    ]
  },
  {
    icon: 'i-lucide-target',
    title: 'How We Use Your Information',
    items: [
      { label: 'Responding to Inquiries', description: 'We use your contact information solely to respond to your message and discuss your potential project needs.' },
      { label: 'Service Proposals', description: 'Based on the services you select and the details you share, we may prepare tailored proposals or recommendations.' },
      { label: 'Communication', description: 'We may follow up on your inquiry to clarify requirements or share relevant information. We will never send unsolicited marketing.' }
    ]
  },
  {
    icon: 'i-lucide-shield',
    title: 'Data Protection & Security',
    items: [
      { label: 'Access Control', description: 'Your data is accessed only by authorized team members who need it to respond to your inquiry.' },
      { label: 'Technical Measures', description: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.' },
      { label: 'No Third-Party Sharing', description: 'We will never sell, rent, or share your personal information with third parties for marketing or any other purpose.' }
    ]
  },
  {
    icon: 'i-lucide-clock',
    title: 'Data Retention',
    items: [
      { label: 'Active Inquiries', description: 'We retain your data for the duration of active communication about a potential project.' },
      { label: 'Inactive Data', description: 'If a business relationship does not materialize, we delete your data within 12 months of last contact.' },
      { label: 'Client Data', description: 'For clients with active engagements, data retention is governed by the terms of the specific project agreement.' }
    ]
  },
  {
    icon: 'i-lucide-user-check',
    title: 'Your Rights',
    items: [
      { label: 'Right of Access', description: 'You can request a copy of the personal data we hold about you at any time.' },
      { label: 'Right to Rectification', description: 'If any data we hold is inaccurate, you can request that we correct it.' },
      { label: 'Right to Erasure', description: 'You can request that we delete all personal data we hold about you.' },
      { label: 'Right to Withdraw Consent', description: 'You can withdraw your consent for us to process your data at any time.' },
      { label: 'How to Exercise', description: 'To exercise any of these rights, reach out to us. We will respond within 30 days.' }
    ]
  }
]
</script>

<template>
  <div>
    <UPageHero
      title="Privacy Policy"
      description="How we collect, use, and protect your personal information"
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
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="size-10 rounded-lg flex items-center justify-center bg-primary-50 dark:bg-primary-950">
                <UIcon name="i-lucide-refresh-cw" class="size-5 text-primary-400" />
              </div>
              <h2 class="text-xl font-bold text-(--ui-text-highlighted)">6. Changes to This Policy</h2>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <UCard :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
                <h3 class="font-semibold text-(--ui-text-highlighted) text-sm">Updates</h3>
                <p class="mt-2 text-sm text-(--ui-text-muted)">We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
              </UCard>
              <UCard :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
                <h3 class="font-semibold text-(--ui-text-highlighted) text-sm">Notification</h3>
                <p class="mt-2 text-sm text-(--ui-text-muted)">We encourage you to review this page periodically. For significant changes, we will make reasonable efforts to notify affected individuals.</p>
              </UCard>
            </div>
          </div>

          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="size-10 rounded-lg flex items-center justify-center bg-primary-50 dark:bg-primary-950">
                <UIcon name="i-lucide-mail" class="size-5 text-primary-400" />
              </div>
              <h2 class="text-xl font-bold text-(--ui-text-highlighted)">7. Contact</h2>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <UCard :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
                <h3 class="font-semibold text-(--ui-text-highlighted) text-sm">Questions</h3>
                <p class="mt-2 text-sm text-(--ui-text-muted)">If you have questions about this privacy policy or how we handle your data, please <NuxtLink to="/contact?reason=privacy" class="text-primary-400 underline">contact us</NuxtLink>.</p>
              </UCard>
              <UCard :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
                <h3 class="font-semibold text-(--ui-text-highlighted) text-sm">Data Requests</h3>
                <p class="mt-2 text-sm text-(--ui-text-muted)">For access, correction, or deletion requests, <NuxtLink to="/contact?reason=privacy" class="text-primary-400 underline">reach out to us</NuxtLink>. We will respond within 30 days.</p>
              </UCard>
            </div>
          </div>
        </div>
      </UPageSection>
    </ScrollReveal>
  </div>
</template>
