<script setup lang="ts">
const el = ref<HTMLElement | null>(null)
const visible = ref(false)

onMounted(() => {
  if (!el.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0, rootMargin: '0px 0px -10% 0px' }
  )

  observer.observe(el.value)

  onUnmounted(() => observer.disconnect())
})
</script>

<template>
  <div
    ref="el"
    class="transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
  >
    <slot />
  </div>
</template>
