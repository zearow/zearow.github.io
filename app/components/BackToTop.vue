<script setup lang="ts">
const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <Transition name="fade">
    <LazyUButton
      v-if="visible"
      icon="i-lucide-chevron-up"
      size="lg"
      color="primary"
      variant="solid"
      class="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
      aria-label="Back to top"
      @click="scrollToTop"
    />
  </Transition>
</template>
