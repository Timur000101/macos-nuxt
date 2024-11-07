<script setup lang="ts">
import { useColorMode } from '#imports'

const colorMode = useColorMode()
const themeMode = useState('themeMode', () => colorMode.preference)

watch(colorMode, (val) => {
  themeMode.value = val.preference
})

onMounted(() => {
  themeMode.value = useColorMode().preference
})
</script>

<template>
  <div
    class="h-screen w-screen bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: themeMode === 'dark' ? 'url(/images/dark-mode.png)' : 'url(/images/light-mode.png)' }"
  >
    <div
      class="relative h-full w-full overflow-hidden"
    >
      <status-bar />
      <slot />
      <dock-menu />
    </div>
  </div>
</template>
