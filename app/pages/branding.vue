<script setup lang="ts">
useSeoMeta({
  title: 'Brand Guidelines - zearøw',
  description: 'The zearøw visual identity: logo variants, color palette (Steel Blue, Graphite, White), Comfortaa typography, and design principles.',
  ogTitle: 'Brand Guidelines - zearøw',
  ogDescription: 'The zearøw visual identity: logo variants, color palette (Steel Blue, Graphite, White), Comfortaa typography, and design principles.',
  twitterCard: 'summary_large_image'
})

const logos = [
  {
    label: 'Graphite',
    src: '/logo-graphite.svg',
    bg: 'bg-white',
    description: 'For use on light backgrounds'
  },
  {
    label: 'White',
    src: '/logo-white.svg',
    bg: 'bg-[#333333]',
    description: 'For use on dark backgrounds'
  },
  {
    label: 'Steel Blue',
    src: '/logo-steelblue.svg',
    bg: 'bg-white',
    description: 'Brand accent variant'
  }
]

const graphite = {
  name: 'Graphite',
  base: '#333333',
  shades: {
    50: '#F5F5F5', 100: '#E8E8E8', 200: '#D1D1D1', 300: '#B0B0B0', 400: '#888888',
    500: '#666666', 600: '#515151', 700: '#434343', 800: '#333333', 900: '#2A2A2A', 950: '#1A1A1A'
  }
}

const steelBlue = {
  name: 'Steel Blue',
  base: '#4A7C9B',
  shades: {
    50: '#EFF5F8', 100: '#D7E7EF', 200: '#B0CFE0', 300: '#80B1CC', 400: '#4A7C9B',
    500: '#3A6A87', 600: '#2E5570', 700: '#234259', 800: '#1A3143', 900: '#12222F', 950: '#0A1620'
  }
}

const pairings = [
  { bg: 'bg-white', text: 'color: #333333', label: 'Graphite on White', usage: 'Primary text' },
  { bg: '', style: 'background: #333333', text: 'color: white', label: 'White on Graphite', usage: 'Dark mode' },
  { bg: '', style: 'background: #4A7C9B', text: 'color: white', label: 'White on Steel Blue', usage: 'Buttons & CTAs' },
  { bg: 'bg-white', text: 'color: #4A7C9B', label: 'Steel Blue on White', usage: 'Links & accents' },
  { bg: '', style: 'background: #EFF5F8', text: 'color: #234259', label: 'Dark Blue on Light', usage: 'Highlighted sections' },
  { bg: '', style: 'background: #1A1A1A', text: 'color: #80B1CC', label: 'Light Steel on Dark', usage: 'Dark mode accent' }
]
</script>

<template>
  <div>
    <UPageHero
      title="Brand Guidelines"
      description="Our visual identity — the logos, colors, typography, and design language that define zearøw"
      :ui="{ root: 'relative !pb-0' }"
    >
      <template #top>
        <HeroParticles />
      </template>
    </UPageHero>

    <!-- Logos -->
    <ScrollReveal>
      <UPageSection
        headline="Identity"
        title="Logo"
        description="Our logo comes in three color variants — Graphite for light backgrounds, White for dark backgrounds, and Steel Blue as a brand accent."
        :ui="{ root: '!pt-0', container: '!pt-0' }"
      >
        <div class="grid sm:grid-cols-3 gap-4">
          <UCard v-for="logo in logos" :key="logo.label" :ui="{ body: 'p-0', root: 'overflow-hidden hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
            <div :class="[logo.bg, 'h-32 flex items-center justify-center px-8']">
              <img :src="logo.src" :alt="logo.label" width="128" height="32" class="max-h-8 w-auto" />
            </div>
            <template #footer>
              <p class="text-sm font-semibold text-(--ui-text-highlighted)">{{ logo.label }}</p>
              <p class="text-xs text-(--ui-text-dimmed)">{{ logo.description }}</p>
            </template>
          </UCard>
        </div>

        <h3 class="text-lg font-semibold text-(--ui-text-highlighted) mt-10 mb-4">Logo on Brand Colors</h3>
        <div class="grid sm:grid-cols-3 gap-4">
          <UCard :ui="{ body: 'p-0', root: 'overflow-hidden' }">
            <div class="h-32 flex items-center justify-center px-8 bg-primary-400">
              <img src="/logo-white.svg" alt="Logo on Steel Blue" width="128" height="32" class="max-h-8 w-auto" />
            </div>
            <template #footer>
              <p class="text-sm font-semibold text-(--ui-text-highlighted)">On Steel Blue</p>
            </template>
          </UCard>
          <UCard :ui="{ body: 'p-0', root: 'overflow-hidden' }">
            <div class="h-32 flex items-center justify-center px-8 bg-primary-50 dark:bg-primary-950">
              <UColorModeImage light="/logo-graphite.svg" dark="/logo-white.svg" alt="Adaptive" class="max-h-8 w-auto" />
            </div>
            <template #footer>
              <p class="text-sm font-semibold text-(--ui-text-highlighted)">Adaptive (color mode)</p>
            </template>
          </UCard>
          <UCard :ui="{ body: 'p-0', root: 'overflow-hidden' }">
            <div class="h-32 flex items-center justify-center px-8" style="background: #1A1A1A">
              <img src="/logo-white.svg" alt="Logo on dark" width="128" height="32" class="max-h-8 w-auto" />
            </div>
            <template #footer>
              <p class="text-sm font-semibold text-(--ui-text-highlighted)">On Dark</p>
            </template>
          </UCard>
        </div>
      </UPageSection>
    </ScrollReveal>

    <SectionDivider />

    <!-- Color Palette -->
    <ScrollReveal>
      <UPageSection
        headline="Color"
        title="Color Palette"
        description="Our palette is built on three foundations: White (#FFFFFF) for clarity, Graphite (#333333) for text and structure, and Steel Blue (#4A7C9B) as our accent color for action and identity."
      >
        <div class="space-y-10">
          <!-- White -->
          <div>
            <h3 class="text-lg font-semibold text-(--ui-text-highlighted) mb-3">
              White <span class="text-sm font-normal text-(--ui-text-muted) ml-2">#FFFFFF</span>
            </h3>
            <div class="flex rounded-xl overflow-hidden border border-(--ui-border)">
              <div class="flex-1 h-16 flex items-end justify-center pb-2" style="background: #FFFFFF">
                <span class="text-xs font-mono text-gray-400">Base background</span>
              </div>
            </div>
          </div>

          <!-- Graphite -->
          <div>
            <h3 class="text-lg font-semibold text-(--ui-text-highlighted) mb-1">Graphite</h3>
            <p class="text-sm text-(--ui-text-muted) mb-3">Neutral tones for text, borders, and backgrounds.</p>
            <div class="flex rounded-xl overflow-hidden">
              <div v-for="(hex, shade) in graphite.shades" :key="shade" class="flex-1 h-16 flex flex-col items-center justify-end pb-1.5" :style="{ backgroundColor: hex }">
                <span class="text-[10px] font-mono" :class="Number(shade) >= 500 ? 'text-white' : 'text-gray-700'">{{ shade }}</span>
              </div>
            </div>
            <div class="mt-1 hidden sm:flex">
              <div v-for="(hex, shade) in graphite.shades" :key="shade" class="flex-1 text-center">
                <span class="text-[9px] font-mono text-(--ui-text-dimmed)">{{ hex }}</span>
              </div>
            </div>
          </div>

          <!-- Steel Blue -->
          <div>
            <h3 class="text-lg font-semibold text-(--ui-text-highlighted) mb-1">Steel Blue</h3>
            <p class="text-sm text-(--ui-text-muted) mb-3">Primary brand color for interactive elements, accents, and identity.</p>
            <div class="flex rounded-xl overflow-hidden">
              <div v-for="(hex, shade) in steelBlue.shades" :key="shade" class="flex-1 h-16 flex flex-col items-center justify-end pb-1.5" :style="{ backgroundColor: hex }">
                <span class="text-[10px] font-mono" :class="Number(shade) >= 400 ? 'text-white' : 'text-gray-700'">{{ shade }}</span>
              </div>
            </div>
            <div class="mt-1 hidden sm:flex">
              <div v-for="(hex, shade) in steelBlue.shades" :key="shade" class="flex-1 text-center">
                <span class="text-[9px] font-mono text-(--ui-text-dimmed)">{{ hex }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pairings -->
        <h3 class="text-lg font-semibold text-(--ui-text-highlighted) mt-10 mb-4">Color Pairings</h3>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <UCard v-for="pair in pairings" :key="pair.label" :ui="{ body: 'p-0', root: 'overflow-hidden hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
            <div class="h-20 flex items-center justify-center" :class="pair.bg" :style="pair.style">
              <span class="text-2xl font-bold" :style="pair.text">Aa</span>
            </div>
            <template #footer>
              <p class="text-sm font-medium text-(--ui-text-highlighted)">{{ pair.label }}</p>
              <p class="text-xs text-(--ui-text-dimmed)">{{ pair.usage }}</p>
            </template>
          </UCard>
        </div>
      </UPageSection>
    </ScrollReveal>

    <SectionDivider />

    <!-- Typography -->
    <ScrollReveal>
      <UPageSection
        headline="Type"
        title="Typography"
        description="Comfortaa is our primary typeface — rounded, modern, and approachable. It reflects our commitment to user-friendly design."
      >
        <!-- Character set -->
        <UCard class="mb-6" :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
          <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-4">
            <h3 class="text-2xl font-bold text-(--ui-text-highlighted)">Comfortaa</h3>
            <p class="text-sm text-(--ui-text-muted)">Google Fonts &middot; Weights 300&ndash;700</p>
          </div>
          <p class="text-xl sm:text-3xl text-(--ui-text-highlighted) break-all">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz</p>
          <p class="mt-2 text-lg sm:text-2xl text-(--ui-text-muted) break-all">0123456789 !@#$%^&amp;*()-+=[]{}|;:&apos;,.&lt;&gt;?</p>
        </UCard>

        <!-- Weights -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <UCard v-for="w in [{ name: 'Light', weight: 'font-light', val: 300 }, { name: 'Regular', weight: 'font-normal', val: 400 }, { name: 'Medium', weight: 'font-medium', val: 500 }, { name: 'SemiBold', weight: 'font-semibold', val: 600 }, { name: 'Bold', weight: 'font-bold', val: 700 }]" :key="w.val" :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
            <p class="text-3xl text-(--ui-text-highlighted)" :class="w.weight">Aa</p>
            <p class="mt-2 text-sm font-semibold text-(--ui-text-highlighted)">{{ w.name }}</p>
            <p class="text-xs text-(--ui-text-dimmed)">{{ w.val }}</p>
          </UCard>
        </div>

        <!-- Scale -->
        <UCard :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
          <h3 class="text-sm font-semibold text-(--ui-text-highlighted) mb-4 uppercase tracking-wide">Type Scale</h3>
          <div class="space-y-3">
            <div v-for="s in [{ size: '5xl', label: 'Hero' }, { size: '3xl', label: 'Page title' }, { size: '2xl', label: 'Section title' }, { size: 'xl', label: 'Card title' }, { size: 'base', label: 'Body' }, { size: 'sm', label: 'Caption' }]" :key="s.size" class="flex items-baseline gap-4">
              <span class="text-xs font-mono text-(--ui-text-dimmed) w-24 shrink-0">{{ s.label }}</span>
              <p :class="`text-${s.size} font-bold text-(--ui-text-highlighted)`">zearøw</p>
            </div>
          </div>
        </UCard>
      </UPageSection>
    </ScrollReveal>

    <SectionDivider />

    <!-- Illustrations -->
    <ScrollReveal>
      <UPageSection
        headline="Credits"
        title="Illustrations"
        description="The illustrations across this site are sourced from unDraw — a generous library of open-source illustrations by Katerina Limpitsouni."
      >
        <UCard :ui="{ root: 'hover:bg-elevated/50 hover:ring-primary-400 transition-all' }">
          <div class="flex flex-col sm:flex-row sm:items-center gap-4">
            <UIcon name="i-lucide-palette" class="size-10 shrink-0 text-primary-400" />
            <div class="flex-1">
              <h3 class="text-base font-semibold text-(--ui-text-highlighted)">unDraw</h3>
              <p class="text-sm text-(--ui-text-muted)">Open-source illustrations for any idea you can imagine and create.</p>
            </div>
            <UButton
              to="https://undraw.co/"
              target="_blank"
              rel="noopener"
              label="Visit unDraw"
              icon="i-lucide-external-link"
              variant="outline"
              size="md"
            />
          </div>
        </UCard>
      </UPageSection>
    </ScrollReveal>

  </div>
</template>
