<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  { label: 'Home', to: '/', active: route.path === '/' },
  { label: 'About', to: '/about/', active: route.path === '/about/' },
  { label: 'Services', to: '/services/', active: route.path === '/services/' },
  { label: 'Products', to: '/products/', active: route.path === '/products/' },
  { label: 'Case Studies', to: '/case-studies/', active: route.path === '/case-studies/' },
  { label: 'Blog', to: '/blog/', active: route.path.startsWith('/blog') },
  { label: 'Contact', to: '/contact/', active: route.path === '/contact/' }
])

const footerItems: NavigationMenuItem[] = [
  { label: 'Careers', to: '/careers/' },
  { label: 'Branding', to: '/branding/' },
  { label: 'FAQ', to: '/faq/' },
  { label: 'Privacy Policy', to: '/privacy/' },
  { label: 'Terms of Service', to: '/terms/' }
]

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

useSeoMeta({
  ogType: 'website',
  ogSiteName: 'zearøw',
  ogLocale: 'en_US',
  ogUrl: () => `https://zearow.com${route.path}`,
  ogImage: 'https://zearow.com/og-image.png',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: () => `https://zearow.com${route.path}` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://zearow.com/#organization',
            name: 'zearøw',
            url: 'https://zearow.com/',
            logo: 'https://zearow.com/logo-graphite.svg',
            description: 'Custom software solutions centered around people, processes, and technology.',
            sameAs: ['https://www.linkedin.com/company/zearow']
          },
          {
            '@type': 'WebSite',
            '@id': 'https://zearow.com/#website',
            url: 'https://zearow.com/',
            name: 'zearøw',
            description: 'Your partner in digital transformation.',
            publisher: { '@id': 'https://zearow.com/#organization' },
            inLanguage: 'en'
          }
        ]
      })
    }
  ]
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <UApp>
    <div class="absolute inset-x-0 bottom-0 h-64 -z-10 pointer-events-none" style="background: linear-gradient(to top, var(--ui-bg) 0%, transparent 100%);" />

    <UHeader
      title="zearøw"
      :class="scrolled ? 'header-scrolled' : 'header-top'"
    >
      <template #title>
        <UColorModeImage
          light="/logo-graphite.svg"
          dark="/logo-white.svg"
          alt="zearøw"
          width="103"
          height="26"
          class="h-6 w-auto"
        />
      </template>

      <UNavigationMenu :items="items" />

      <template #right>
        <UColorModeButton />
      </template>

      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
          :ui="{ link: 'text-base py-3' }"
        />
        <USeparator class="my-4" />
        <UNavigationMenu
          :items="footerItems"
          orientation="vertical"
          class="-mx-2.5"
          :ui="{ link: 'text-base py-3' }"
        />
        <USeparator class="my-4" />
        <div class="flex items-center gap-3 py-3">
          <span class="text-base text-(--ui-text-muted)">Find us on </span>
          <UButton
            to="https://www.linkedin.com/company/zearow"
            target="_blank"
            rel="noopener"
            aria-label="zearøw on LinkedIn"
            icon="i-simple-icons-linkedin"
            color="neutral"
            variant="link"
            size="lg"
            class="text-(--ui-text-muted) hover:!text-[#0A66C2] transition-colors"
          />
        </div>
      </template>
    </UHeader>

    <UMain class="relative !min-h-[calc(100vh-var(--ui-header-height)-85px)]">
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </UMain>

    <BackToTop />

    <SectionDivider />

    <UFooter
      :ui="{
        container: 'flex flex-col lg:flex-row gap-4 items-center justify-center sm:!px-6 lg:!px-8 !px-0',
        left: 'w-full lg:w-auto order-2 lg:order-1 justify-center !mt-0',
        center: 'hidden lg:flex',
        right: 'hidden lg:flex items-center order-1 lg:order-2 !mt-0'
      }"
    >
      <template #left>
        <p class="text-sm text-(--ui-text-muted) w-full text-center lg:text-left">
          &copy; {{ new Date().getFullYear() }} zearøw. All rights reserved.
        </p>
      </template>

      <template #right>
        <UNavigationMenu
          :items="footerItems"
          variant="link"
          class="hidden lg:flex"
          :ui="{ list: 'flex-nowrap justify-end gap-x-4 whitespace-nowrap' }"
        />
        <UButton
          to="https://www.linkedin.com/company/zearow"
          target="_blank"
          rel="noopener"
          aria-label="zearøw on LinkedIn"
          icon="i-simple-icons-linkedin"
          color="neutral"
          variant="link"
          size="md"
          class="text-(--ui-text-muted) hover:!text-[#0A66C2] transition-colors"
        />
      </template>
    </UFooter>
  </UApp>
</template>
