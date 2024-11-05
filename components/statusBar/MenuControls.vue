<script setup lang="ts">
import { IconButton } from '../ui'

const { isOpen, toggle } = useControlCenter()
const dateNow = useDateFormat(useNow(), 'HH:mm a').value.toUpperCase()
</script>

<template>
  <div class="h-6 flex gap-[10px]">
    <IconButton v-slot="props">
      <i-shared-sound-off v-bind="props" />
    </IconButton>
    <IconButton v-slot="props">
      <i-shared-user v-bind="props" />
    </IconButton>
    <IconButton v-slot="props" @click="() => $colorMode.value = $colorMode.value === 'dark' ? 'light' : 'dark'">
      <i-shared-battery v-bind="props" />
    </IconButton>
    <IconButton v-slot="props" :active="isOpen" @click="toggle">
      <i-shared-control v-bind="props" />
    </IconButton>

    <ClientOnly>
      <div class="text-white cursor-pointer hover:bg-[#FFFFFF26] rounded-sm px-1">
        {{ dateNow }}
      </div>
    </ClientOnly>

    <LazyStatusBarControlCenter v-if="isOpen" />
  </div>
</template>
