<script setup lang="ts">
useSeoMeta({
  title: 'Case Studies - zearøw',
  description: 'Real-world examples of how zearøw has helped organizations optimize processes, save time, and unlock measurable efficiency gains.',
  ogTitle: 'Case Studies - zearøw',
  ogDescription: 'Real-world examples of how zearøw has helped organizations optimize processes, save time, and unlock measurable efficiency gains.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image'
})

const caseStudies = [
  {
    icon: 'i-lucide-bar-chart-3',
    industry: 'Enterprise Finance',
    companySize: '50,000+ employees',
    title: 'Finance Reporting & Budgeting Automation',
    challenge: 'A large enterprise was struggling with budget reporting and analysis across more than 50 departments and cost centers. The existing process involved manual data consolidation from multiple sources, with reports taking up to 40 hours to generate. This delay made timely financial decisions nearly impossible and consumed significant analyst capacity.',
    solution: 'We designed and built a custom finance reporting tool integrated with the existing ERP and data warehouse. The solution automated data aggregation, applied consistent business rules across departments, and generated standardized reports on demand. We also implemented self-service dashboards for budget owners.',
    outcome: 'Report generation time dropped from 40 hours to under 1 hour — a 40x improvement. Finance teams gained back hundreds of hours per month, allowing them to focus on analysis and strategic recommendations rather than data wrangling. Budget cycles became predictable and transparent across all 50+ departments.',
    metrics: [
      { label: 'Report time', value: '40h → 1h' },
      { label: 'Departments', value: '50+' },
      { label: 'Improvement', value: '40×' }
    ]
  },
  {
    icon: 'i-lucide-cog',
    industry: 'Manufacturing & Engineering',
    companySize: '5,000+ employees',
    title: 'Manufacturing BOM & PDM Integration',
    challenge: 'An engineering team needed real-time access to Manufacturing Bill-of-Material (BOM) data from the ERP system, linked to product designs in their PDM/PLM platform. Engineers working off-site or on the shop floor often had no connectivity, forcing them to wait or rely on outdated information — slowing down decisions and creating quality risks.',
    solution: 'We built a unified data layer that connected ERP BOM data with PDM/PLM design records, presented through an intuitive interface. The solution included offline data caching and sync, allowing engineers to access critical data anywhere — on the factory floor, at supplier sites, or in remote field work — and automatically reconcile when back online.',
    outcome: 'Over 50 engineers gained reliable access to integrated BOM and design data, saving 5-10 minutes per data access. Multiplied across hundreds of daily lookups, this translated to thousands of recovered hours annually. Field engineers no longer needed to plan around connectivity, and decision quality improved.',
    metrics: [
      { label: 'Active users', value: '50+' },
      { label: 'Time saved', value: '5-10 min per access' },
      { label: 'Offline support', value: 'Full sync' }
    ]
  },
  {
    icon: 'i-lucide-presentation',
    industry: 'Project Management',
    companySize: '1,000+ employees',
    title: 'SharePoint PM Tracking with PowerPoint Automation',
    challenge: 'Project managers were spending significant time manually updating PowerPoint slides for management reviews, in addition to maintaining project records in SharePoint. This duplication led to data inconsistencies, presentation errors, and frustration — with each PM losing 15-30 minutes per update cycle, multiple times per week.',
    solution: 'We extended the existing SharePoint setup with structured project tracking templates and built a PowerPoint automation engine. PMs now update only one place — SharePoint — and presentations for management reviews are generated automatically with consistent formatting, current data, and brand-compliant slide layouts.',
    outcome: 'More than 15 project managers reclaimed 15-30 minutes per update, eliminating duplicate work and ensuring management always sees the latest data. Review meetings became more focused on decisions rather than questioning the accuracy of slides. The single source of truth in SharePoint also improved auditability.',
    metrics: [
      { label: 'PMs benefiting', value: '15+' },
      { label: 'Time saved', value: '15-30 min per update' },
      { label: 'Single source', value: 'SharePoint' }
    ]
  },
  {
    icon: 'i-lucide-share-2',
    industry: 'Enterprise Operations',
    companySize: '2,000+ employees',
    title: 'API Integration for Automated Data Updates',
    challenge: 'A team was spending approximately 8 hours every week manually searching external sources and updating their enterprise system with the results. This repetitive work was prone to errors, delayed downstream processes, and tied up skilled people in low-value administrative tasks.',
    solution: 'We connected the enterprise system to relevant external APIs and built an automated polling and update pipeline. The solution included data validation, error handling, audit logging, and notification rules so that exceptions were surfaced for human review while routine updates flowed automatically.',
    outcome: 'Weekly manual effort dropped from 8 hours to roughly 1 minute of oversight — a 99.8% reduction. The team redirected nearly 400 hours per year to higher-value work. Data freshness improved dramatically, with updates available within minutes of changes rather than weekly batches.',
    metrics: [
      { label: 'Time per week', value: '8h → 1 min' },
      { label: 'Annual savings', value: '~400 hours' },
      { label: 'Data freshness', value: 'Weekly → Real-time' }
    ]
  },
  {
    icon: 'i-lucide-cpu',
    industry: 'Precision Manufacturing',
    companySize: '150+ employees',
    title: 'CNC Code to G-Code Data Transformation',
    challenge: 'A precision manufacturer used a proprietary CNC machine code that needed to be converted to standard G-Code for use across newer equipment. Manual conversion was time-consuming, error-prone, and bottlenecked production. With over 1,500 artifacts to transform, the manual approach was untenable.',
    solution: 'We built a data transformation pipeline tailored to the proprietary code structure, with automated conversion to G-Code, validation against machine specifications, and a review workflow for edge cases. The solution integrated with their existing file management and machine control systems.',
    outcome: 'All 1,500+ artifacts were transformed without manual effort, freeing engineers from repetitive conversion work and eliminating transcription errors. New machines could be commissioned faster, and the conversion engine became a reusable asset for future code migrations.',
    metrics: [
      { label: 'Artifacts converted', value: '1,500+' },
      { label: 'Manual effort', value: 'Eliminated' },
      { label: 'Quality', value: 'Zero errors' }
    ]
  }
]
</script>

<template>
  <div>
    <UPageHero
      title="Case Studies"
      description="Real-world examples of how we've helped organizations optimize their processes, automate manual work, and achieve measurable efficiency gains"
      :ui="{ root: 'relative !pb-0' }"
    >
      <template #top>
        <HeroParticles />
      </template>
    </UPageHero>

    <ScrollReveal>
      <UPageSection :ui="{ root: '!pt-0', container: '!pt-0' }">
        <div class="space-y-12">
          <UCard
            v-for="(study, i) in caseStudies"
            :key="study.title"
            :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }"
          >
            <div class="grid lg:grid-cols-[200px_1fr] gap-6">
              <!-- Left: Icon + meta -->
              <div class="flex flex-col gap-3">
                <div class="size-14 rounded-lg flex items-center justify-center bg-primary-50 dark:bg-primary-950">
                  <UIcon :name="study.icon" class="size-7 text-primary-400" />
                </div>
                <div>
                  <p class="text-xs font-semibold text-(--ui-text-dimmed) uppercase tracking-wide">Case {{ i + 1 }}</p>
                  <p class="text-sm font-semibold text-(--ui-text-highlighted) mt-1">{{ study.industry }}</p>
                  <p class="text-xs text-(--ui-text-muted)">{{ study.companySize }}</p>
                </div>
              </div>

              <!-- Right: Content -->
              <div>
                <h2 class="text-xl font-bold text-(--ui-text-highlighted) mb-4">{{ study.title }}</h2>

                <div class="space-y-4">
                  <div>
                    <h3 class="text-xs font-semibold text-primary-400 uppercase tracking-wide mb-1">Challenge</h3>
                    <p class="text-sm text-(--ui-text-muted)">{{ study.challenge }}</p>
                  </div>
                  <div>
                    <h3 class="text-xs font-semibold text-primary-400 uppercase tracking-wide mb-1">Solution</h3>
                    <p class="text-sm text-(--ui-text-muted)">{{ study.solution }}</p>
                  </div>
                  <div>
                    <h3 class="text-xs font-semibold text-primary-400 uppercase tracking-wide mb-1">Outcome</h3>
                    <p class="text-sm text-(--ui-text-muted)">{{ study.outcome }}</p>
                  </div>
                </div>

                <!-- Metrics -->
                <div class="mt-6 pt-6 border-t border-(--ui-border) grid grid-cols-3 gap-4">
                  <div v-for="metric in study.metrics" :key="metric.label">
                    <p class="text-xs text-(--ui-text-dimmed) uppercase tracking-wide">{{ metric.label }}</p>
                    <p class="mt-1 text-base font-bold text-(--ui-text-highlighted)">{{ metric.value }}</p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </UPageSection>
    </ScrollReveal>

    <ScrollReveal>
      <SectionDivider />
      <UPageCTA
        title="Have a similar challenge?"
        description="Let's discuss how we can help you achieve measurable efficiency gains in your organization."
        :links="[{ label: 'Get in Touch', to: '/contact?reason=service', size: 'lg' as const }]"
        variant="subtle"
      />
    </ScrollReveal>
  </div>
</template>
