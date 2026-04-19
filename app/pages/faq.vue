<script setup lang="ts">
useSeoMeta({
  title: 'FAQ - zearøw',
  description: 'Frequently asked questions about our services, process, and approach.',
  ogTitle: 'FAQ - zearøw',
  ogDescription: 'Frequently asked questions about our services, process, and approach.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})

const items = [
  {
    label: 'What kind of companies do you work with?',
    content: 'We work with organizations of all sizes — from startups looking to build their first custom tool, to large enterprises with complex processes that need optimization. Our approach is universal and adapts to your specific context.'
  },
  {
    label: 'How does a typical engagement start?',
    content: 'Every engagement begins with a conversation. We take the time to understand your business, your processes, and your goals before proposing any solution. This discovery phase ensures we build the right thing, not just build things right.'
  },
  {
    label: 'Do you only build custom software?',
    content: 'No. Software is one tool in our toolkit. We also offer business process analysis, stakeholder mapping, KPI development, change management, and digital transformation strategy. Sometimes the best solution doesn\'t involve writing any code at all.'
  },
  {
    label: 'How long does a typical project take?',
    content: 'It depends on the scope. A process analysis might take 2-4 weeks. A custom software project can range from 2-3 months for a focused tool to 6-12 months for a comprehensive platform. We always start with a clear roadmap so there are no surprises.'
  },
  {
    label: 'What technologies do you use?',
    content: 'We choose the technology that best fits your needs — not the latest trend. Our team has expertise across modern web technologies, cloud platforms, and integration tools. Technology decisions are always driven by your business requirements.'
  },
  {
    label: 'How do you measure success?',
    content: 'We believe in quantifiable results. Before starting any optimization, we establish baseline measurements. After implementation, we track the same metrics to demonstrate concrete efficiency gains — in terms of lead time, resource requirements, and KPIs aligned to your objectives.'
  },
  {
    label: 'What happens after the project is delivered?',
    content: 'We don\'t just deliver and disappear. We offer ongoing support, monitoring, and continuous improvement services. As your business evolves, your software and processes should evolve too. We\'re a long-term partner, not a one-time vendor.'
  },
  {
    label: 'How do you handle data security?',
    content: 'Security is built into every project from day one — not bolted on after. We evaluate security and compliance requirements as part of our process analysis, implement appropriate technical controls, and ensure your team has clear responsibilities for data handling.'
  },
  {
    label: 'Can you work with our existing systems?',
    content: 'Absolutely. Technology alignment and integration is one of our core services. We assess your current systems, identify integration points, and ensure new solutions work seamlessly with your existing infrastructure.'
  },
  {
    label: 'How do I get started?',
    content: 'Simply reach out through our contact form or email us. Tell us a bit about your situation, and we\'ll schedule a conversation to explore how we can help. There\'s no obligation — just a genuine discussion about your needs.'
  }
]
</script>

<template>
  <div>
    <UPageHero
      title="Frequently Asked Questions"
      description="Everything you need to know about working with us"
      :ui="{ root: 'relative !pb-0' }"
    >
      <template #top>
        <HeroParticles />
      </template>
    </UPageHero>

    <ScrollReveal>
      <UPageSection :ui="{ root: '!pt-0', container: '!pt-0' }">
        <UContainer class="max-w-3xl">
          <UAccordion :items="items" :ui="{ trigger: 'text-lg font-semibold' }" />
        </UContainer>
      </UPageSection>
    </ScrollReveal>

    <ScrollReveal>
      <SectionDivider />
      <UPageCTA
        title="Still have questions?"
        description="We're happy to help. Reach out and we'll get back to you within 1-2 business days."
        :links="[{ label: 'Contact Us', to: '/contact?reason=service', size: 'lg' as const }]"
        variant="subtle"
      />
    </ScrollReveal>
  </div>
</template>
