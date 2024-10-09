<script setup lang="ts"></script>

<template>
  <div
    class="h-screen w-screen bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: 'url(/images/dark-mode.png)' }"
  >
    <div class="pointer-events-none relative h-full w-full">
      <status-bar />
      <NuxtPage />
      <dock-menu />
    </div>
  </div>
</template>
