<script setup lang="ts">
import type { PageFeatureProps, StepperItem } from '@nuxt/ui'

useSeoMeta({
  title: 'About zearøw - People-First Digital Transformation',
  description: "We're a small team that believes great software starts with understanding the people and processes behind it. Here's how we work.",
  ogTitle: 'About zearøw - People-First Digital Transformation',
  ogDescription: "We're a small team that believes great software starts with understanding the people and processes behind it. Here's how we work.",
  twitterCard: 'summary_large_image'
})

const isMobile = ref(false)
let mq: MediaQueryList | null = null
const updateMobile = () => { isMobile.value = mq?.matches ?? false }

onMounted(() => {
  mq = window.matchMedia('(max-width: 1023px)')
  updateMobile()
  mq.addEventListener('change', updateMobile)
})
onUnmounted(() => {
  mq?.removeEventListener('change', updateMobile)
})

const approach: StepperItem[] = [
  {
    title: 'Understand the Environment',
    description: 'We delve into the roles and responsibilities of key stakeholders, map out business processes, and align the solution with your unique needs.',
    icon: 'i-lucide-scan-search'
  },
  {
    title: 'Optimize Processes',
    description: 'We map inputs and outputs, identify inconsistencies, remove unnecessary steps, and clarify responsibilities for enhanced efficiency.',
    icon: 'i-lucide-settings'
  },
  {
    title: 'Build Custom Solutions',
    description: 'Our software is tailored to the specific requirements dictated by your business processes, ensuring perfect alignment with your needs.',
    icon: 'i-lucide-hammer'
  },
  {
    title: 'Measure Outcomes',
    description: 'We quantify the impact of optimization in terms of lead time and resource requirements, showcasing realized efficiency gains.',
    icon: 'i-lucide-chart-no-axes-combined'
  }
]

const reasons: PageFeatureProps[] = [
  {
    icon: 'i-lucide-settings',
    title: 'Customization at the Core',
    description: 'We turn your concepts and processes into functional software that simplifies tasks, streamlines operations, and drives productivity.'
  },
  {
    icon: 'i-lucide-heart',
    title: 'User-Centric Design',
    description: 'User-friendliness and a seamless experience are central to every piece of software we build. Your team will love the tools we create.'
  },
  {
    icon: 'i-lucide-trending-up',
    title: 'Scalability',
    description: 'Our solutions grow with your organization. As your business evolves, your software adapts and expands.'
  },
  {
    icon: 'i-lucide-shield',
    title: 'Security & Reliability',
    description: 'We prioritize the security of your data and the reliability of your software. Your information is safe and your software is dependable.'
  }
]
</script>

<template>
  <div>
    <UPageHero
      title="About zearøw"
      description="We are more than just a software development company. We are your dedicated partner in digital transformation, centered around people, processes, and technology"
      :ui="{ root: 'relative !pb-0' }"
    >
      <template #top>
        <HeroParticles />
      </template>
    </UPageHero>

    <ScrollReveal>
      <UPageSection
        title="Our Philosophy"
        :ui="{ root: '!pt-0', container: '!pt-0' }"
        description="We believe that one-size-fits-all software solutions are a thing of the past. In today's dynamic and competitive business landscape, success hinges on adaptability, efficiency, and innovation. We work closely with you to understand your specific requirements, challenges, and goals, and then create software that's tailor-made for your needs."
        orientation="horizontal"
        reverse
      >
        <img src="/undraw_omega_aj2q.svg" alt="Our philosophy" width="975" height="769" class="w-full h-auto max-w-md mx-auto" />
      </UPageSection>
    </ScrollReveal>

    <ScrollReveal>
      <SectionDivider />
      <UPageSection
        headline="How We Work"
        title="Our Approach"
        description="Whether you're a startup or a large enterprise with complex processes, we have the expertise to guide your digital transformation journey."
      >
        <UStepper
          :items="approach"
          :default-value="4"
          :orientation="isMobile ? 'vertical' : 'horizontal'"
          disabled
          color="primary"
          size="lg"
          class="w-full"
          :ui="isMobile
            ? { root: 'gap-6', wrapper: 'ms-3' }
            : { root: 'gap-12 sm:gap-16 lg:gap-20', separator: 'flex-1 min-w-8', wrapper: 'mt-3 mx-auto max-w-48' }"
        />
      </UPageSection>
    </ScrollReveal>

    <ScrollReveal>
      <SectionDivider />
      <UPageSection
        headline="Differentiators"
        title="Why Choose Us"
        :features="reasons"
        orientation="horizontal"
      >
        <img src="/undraw_choose_5kz4.svg" alt="Why choose us" width="800" height="482" class="w-full h-auto max-w-md mx-auto" />
      </UPageSection>
    </ScrollReveal>

    <ScrollReveal>
      <SectionDivider />
      <UPageSection
        title="Our Team"
        description="Our success is built on the expertise and dedication of our diverse team of professionals — from software architects and engineers to user experience designers and project managers. They work collaboratively to deliver exceptional software solutions that meet your unique requirements."
        orientation="horizontal"
        reverse
      >
        <img src="/undraw_team-work_i1f3.svg" alt="Our team" width="1037" height="758" class="w-full h-auto max-w-md mx-auto" />
      </UPageSection>
    </ScrollReveal>

    <ScrollReveal>
      <SectionDivider />
      <UPageCTA
        title="Ready to get started?"
        description="Let's collaborate to create solutions that elevate your business."
        :links="[{ label: 'Contact Us', to: '/contact?reason=service', size: 'lg' as const }]"
        variant="subtle"
      />
    </ScrollReveal>
  </div>
</template>
