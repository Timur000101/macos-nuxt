<script setup lang="ts">
</script>

<template>
  <div
    class="h-screen w-screen bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: $colorMode.value === 'dark' ? 'url(/images/dark-mode.png)' : 'url(/images/light-mode.png)' }"
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
