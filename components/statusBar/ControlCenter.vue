<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Card } from '../ui'

const router = useRouter()

const controlCenterRef = ref<HTMLDivElement>()

onClickOutside(controlCenterRef, () => {
  router.replace({ hash: '' })
})
</script>

<template>
  <Teleport to="body">
    <div
      ref="controlCenterRef"
      class="absolute z-50 top-7 right-1 h-[382px] w-[304px]
    bg-[#FFFFFF60] rounded-2xl border-[0.5px] border-content-bg
    backdrop-blur-[5px] shadow-black/16 shadow-md p-[10px]"
    >
      <div class="flex gap-[10px] mb-[10px]">
        <Card class="w-[136px] h-[138px]" />
        <Card class="w-[136px] h-[138px]" />
      </div>
      <div class="flex flex-col gap-[10px]">
        <Card class="w-full h-[64px]" />
        <Card class="w-full h-[64px]" />
        <Card class="w-full h-[64px]" />
      </div>
    </div>
  </Teleport>
</template>
