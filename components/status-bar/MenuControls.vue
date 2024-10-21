<script setup lang="ts">
import { IconButton } from '../ui'
import ControlCenter from './ControlCenter.vue'

const { isOpen, toggle } = useControlCenter()
const { switchTheme } = useTheme()
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
    <IconButton v-slot="props" @click="switchTheme">
      <i-shared-battery v-bind="props" />
    </IconButton>
    <IconButton v-slot="props" :active="isOpen" @click="toggle">
      <i-shared-control v-bind="props" />
    </IconButton>

    <div class="text-white cursor-pointer hover:bg-[#FFFFFF26] rounded-sm px-1">
      {{ dateNow }}
    </div>
    <ClientOnly>
      <ControlCenter v-if="isOpen" />
    </ClientOnly>
  </div>
</template>
