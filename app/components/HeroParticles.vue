<script setup lang="ts">
const colorMode = useColorMode()
const containerId = `particles-${Math.random().toString(36).slice(2, 9)}`
const loaded = ref(false)

function getColor() {
  return colorMode.value === 'dark' ? '#80B1CC' : '#4A7C9B'
}

function getConfig() {
  return {
    particles: {
      number: {
        value: 100,
        density: { enable: true, value_area: 900 }
      },
      color: { value: getColor() },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.2,
        random: true,
        anim: { enable: true, speed: 0.5, opacity_min: 0.05, sync: false }
      },
      size: {
        value: 10,
        random: true,
        anim: { enable: true, speed: 1, size_min: 1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 160,
        color: getColor(),
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.2,
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
    retina_detect: true
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

onMounted(async () => {
  await loadScript()
  await nextTick()
  initParticles()
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
