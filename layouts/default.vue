<script setup lang="ts"></script>

<template>
  <div
    class="h-screen w-screen bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: 'url(/images/dark-mode.png)' }"
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
