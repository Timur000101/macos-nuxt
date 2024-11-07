<script setup lang="ts">
import { useControlCenterPanel } from '~/composables/useControlCenter'

const { isOpen, toggle } = useControlCenterPanel()
const dateNow = useDateFormat(useNow(), 'HH:mm a').value.toUpperCase()
</script>

<template>
  <div class="h-6 flex gap-[10px]">
    <SIconButton v-slot="props">
      <i-shared-sound-off v-bind="props" />
    </SIconButton>
    <SIconButton v-slot="props">
      <i-shared-user v-bind="props" />
    </SIconButton>
    <SIconButton v-slot="props">
      <i-shared-battery v-bind="props" />
    </SIconButton>
    <SIconButton v-slot="props" :active="isOpen" @click="toggle">
      <i-shared-control v-bind="props" />
    </SIconButton>

    <ClientOnly>
      <div class="text-white cursor-pointer hover:bg-[#FFFFFF26] rounded-sm px-1">
        {{ dateNow }}
      </div>
    </ClientOnly>

    <LazyStatusBarControlCenter v-if="isOpen" />
  </div>
</template>
