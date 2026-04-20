<script setup lang="ts">
const colorMode = useColorMode()
const containerId = `particles-${Math.random().toString(36).slice(2, 9)}`
const loaded = ref(false)

function getColor() {
  return colorMode.value === 'dark' ? '#80B1CC' : '#4A7C9B'
}

function isMobileViewport() {
  return window.matchMedia('(max-width: 767px)').matches
}

function getConfig() {
  const mobile = isMobileViewport()
  return {
    particles: {
      number: {
        value: mobile ? 30 : 100,
        density: { enable: true, value_area: mobile ? 1200 : 900 }
      },
      color: { value: getColor() },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.2,
        random: true,
        anim: { enable: !mobile, speed: 0.5, opacity_min: 0.05, sync: false }
      },
      size: {
        value: 10,
        random: true,
        anim: { enable: !mobile, speed: 1, size_min: 1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: mobile ? 120 : 160,
        color: getColor(),
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: mobile ? 0.6 : 1.2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'bounce',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: false, mode: 'grab' },
        onclick: { enable: false, mode: 'push' },
        resize: true
      },
      modes: {
        grab: { distance: 180, line_linked: { opacity: 0.35 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: !mobile
  }
}

function destroyParticles() {
  const w = window as any
  if (w.pJSDom?.length) {
    w.pJSDom.forEach((p: any) => {
      try { p.pJS?.fn?.vendors?.destroypJS() } catch {}
    })
    w.pJSDom = []
  }
}

function initParticles() {
  const w = window as any
  if (!w.particlesJS) return
  const el = document.getElementById(containerId)
  if (!el) return
  destroyParticles()
  w.particlesJS(containerId, getConfig())
}

function loadScript() {
  return new Promise<void>((resolve) => {
    if ((window as any).particlesJS) {
      loaded.value = true
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = '/particles.min.js'
    script.onload = () => {
      loaded.value = true
      resolve()
    }
    document.head.appendChild(script)
  })
}

function shouldSkip() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function deferred(cb: () => void) {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(cb, { timeout: 2000 })
  } else {
    setTimeout(cb, 1000)
  }
}

onMounted(() => {
  if (shouldSkip()) return
  deferred(async () => {
    await loadScript()
    await nextTick()
    initParticles()
  })
})

watch(() => colorMode.value, () => {
  if (loaded.value) {
    initParticles()
  }
})

onUnmounted(() => {
  destroyParticles()
})
</script>

<template>
  <ClientOnly>
    <div :id="containerId" class="absolute inset-x-0 bottom-0 -z-10" style="top: calc(-1 * var(--ui-header-height));" />
  </ClientOnly>
</template>
