<script setup lang="ts">
import IconNotes from '~/assets/icons/app/Notes.svg'
</script>

<template>
  <NuxtLayout name="default">
    <div
      class="grid grid-cols-[repeat(auto-fill,80px)]
      grid-rows-[repeat(auto-fill,80px)] grid-flow-col w-full h-full"
    >
      <i-app-notes filled :font-controlled="false" />
      <i-shared-airdrop filled :font-controlled="false" />
      <!-- <div class="justify-self-center self-center">
        <IconNotes filled :font-controlled="false" class="w-16 h-16" />
      </div>
      ! -->
    </div>
  </NuxtLayout>
</template>
