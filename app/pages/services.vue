<script setup lang="ts">
useSeoMeta({
  title: 'Services - Custom Software & Process Optimization | zearøw',
  description: 'From process analysis and stakeholder mapping to custom software and KPI tracking — end-to-end services to align technology with your business.',
  ogTitle: 'Services - Custom Software & Process Optimization | zearøw',
  ogDescription: 'From process analysis and stakeholder mapping to custom software and KPI tracking — end-to-end services to align technology with your business.',
  twitterCard: 'summary_large_image'
})

const services = [
  {
    icon: 'i-lucide-search',
    title: 'Business Process Analysis & Optimization',
    description: 'In-depth analysis of current business processes. Identification of bottlenecks, redundancies, and inefficiencies. Recommendations for process optimization to improve efficiency and productivity.'
  },
  {
    icon: 'i-lucide-blocks',
    title: 'Custom Software Development',
    description: 'Tailored software solutions to meet specific business requirements. User-friendly design to ensure easy adoption by employees. Integration with existing systems and processes.'
  },
  {
    icon: 'i-lucide-git-branch',
    title: 'Stakeholder & Process Mapping',
    description: 'Comprehensive mapping of roles and responsibilities of stakeholders. Mapping of business processes to identify workflows and handoffs. Visualization of how technology can enhance these processes.'
  },
  {
    icon: 'i-lucide-puzzle',
    title: 'Technology Alignment & Integration',
    description: 'Ensuring technology solutions align with and support business processes. Integration of technology to streamline and automate tasks. Advice on technology selection and implementation strategies.'
  },
  {
    icon: 'i-lucide-bar-chart-3',
    title: 'KPI Development & Measurement',
    description: 'Collaborative development of Key Performance Indicators. Continuous monitoring and measurement of KPIs to track performance. Data-driven insights to make informed decisions.'
  },
  {
    icon: 'i-lucide-repeat',
    title: 'Change Management & Training',
    description: 'Support for implementing changes and process improvements. Training programs for employees to adapt to new processes and technologies. Change management strategies for a smooth transition.'
  },
  {
    icon: 'i-lucide-refresh-cw',
    title: 'Legacy System Modernization',
    description: 'Assessment of existing legacy systems and their alignment with business processes. Recommendations for modernizing or replacing legacy systems to improve efficiency and reduce maintenance costs.'
  },
  {
    icon: 'i-lucide-line-chart',
    title: 'Data Analytics & Reporting',
    description: 'Data analytics to derive insights from business processes and operations. Customized reporting solutions for data-driven decision-making. Dashboards and visualizations for real-time monitoring.'
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Security & Compliance Consulting',
    description: 'Evaluation of security and compliance requirements within business processes. Recommendations for ensuring data security and regulatory compliance. Implementation of security measures to protect sensitive information.'
  },
  {
    icon: 'i-lucide-rocket',
    title: 'Digital Transformation Strategy',
    description: 'Development of a comprehensive digital transformation strategy. Roadmap for aligning technology with business objectives and optimizing processes. Guidance on achieving long-term business goals.'
  }
]
</script>

<template>
  <div>
    <UPageHero
      title="Our Services"
      description="From process analysis to custom development, we provide end-to-end services that align technology with your business goals"
      :ui="{ root: 'relative !pb-0' }"
    >
      <template #top>
        <HeroParticles />
      </template>
    </UPageHero>

    <ScrollReveal>
      <UPageSection :ui="{ root: '!pt-0', container: '!pt-0' }">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <UPageCard
            v-for="service in services.slice(0, 4)"
            :key="service.title"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            variant="outline"
            :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }"
          />

          <div class="order-first sm:order-none sm:col-span-2 lg:col-span-1 lg:row-span-2 flex items-center justify-center p-8 rounded-xl border border-(--ui-border) bg-(--ui-bg-muted)">
            <img src="/undraw_deliveries_qutl.svg" alt="Our services" width="800" height="453" class="w-full h-auto max-w-xs" />
          </div>

          <UPageCard
            v-for="service in services.slice(4)"
            :key="service.title"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            variant="outline"
            :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }"
          />
        </div>
      </UPageSection>
    </ScrollReveal>

    <ScrollReveal>
      <SectionDivider />
      <UPageCTA
        title="Continuous Improvement"
        description="Our engagement doesn't end at delivery. We provide ongoing process monitoring, refinement, and adaptation to changing business needs — ensuring that your technology and processes remain aligned with evolving goals."
        :links="[{ label: 'Discuss Your Project', to: '/contact?reason=service', size: 'lg' as const }]"
        variant="subtle"
      />
    </ScrollReveal>
  </div>
</template>
