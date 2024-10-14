<script setup lang="ts">
import IconButton from '../ui/icon-button/IconButton.vue'

const dateNow = useDateFormat(useNow(), 'HH:mm a').value.toUpperCase()
const { isOpen, toggle } = useControlCenter()
</script>

<template>
  <div class="h-6 flex gap-[10px]">
    <IconButton v-slot="props">
      <i-shared-sound-off v-bind="props" />
    </IconButton>
    <IconButton v-slot="props">
      <i-shared-user v-bind="props" />
    </IconButton>
    <IconButton v-slot="props">
      <i-shared-battery v-bind="props" />
    </IconButton>
    <IconButton v-slot="props" @click="toggle">
      <i-shared-control v-bind="props" />
    </IconButton>

    <div class="text-white cursor-pointer hover:bg-[#FFFFFF26] rounded-sm px-1">
      {{ dateNow }}
    </div>
  </div>

  <Teleport to="body">
    <div
      class="absolute top-7 right-1 h-[380px] w-[304px] bg-[#FFFFFF75]
      rounded-2xl border-[0.5px] border-content-bg backdrop-blur-[5px]"
    >
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
    </div>
  </Teleport>
</template>
