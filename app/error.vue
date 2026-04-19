<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

useSeoMeta({
  title: `${props.error.statusCode} - zearøw`
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <UApp>
    <UHeader title="zearøw">
      <template #title>
        <NuxtLink to="/">
          <UColorModeImage
            light="/logo-graphite.svg"
            dark="/logo-white.svg"
            alt="zearøw"
            class="h-6"
          />
        </NuxtLink>
      </template>

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <UMain class="relative flex items-center justify-center">
      <div class="absolute inset-0 -z-10 opacity-[0.15] dark:opacity-[0.07]" style="background-image: radial-gradient(circle, #4A7C9B 1px, transparent 1px); background-size: 24px 24px;" />
      <div class="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-(--ui-bg)" />

      <div class="text-center px-6 py-16">
        <p class="text-8xl font-bold text-primary-400">{{ error.statusCode }}</p>

        <img src="/undraw_donut-love_5r3x.svg" alt="Error" class="w-full max-w-xs mx-auto my-8" />

        <h1 class="text-2xl font-bold text-(--ui-text-highlighted)">
          {{ error.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}
        </h1>
        <p class="mt-2 text-(--ui-text-muted) max-w-md mx-auto">
          {{ error.statusCode === 404
            ? "The page you're looking for doesn't exist or has been moved."
            : error.message || 'An unexpected error occurred. Please try again.'
          }}
        </p>

        <UButton label="Back to home" size="lg" class="mt-6" @click="handleError" />
      </div>
    </UMain>
  </UApp>
</template>
