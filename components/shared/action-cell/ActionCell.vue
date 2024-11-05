<script setup lang="ts">
import { IconButton } from '~/components/ui'
import { cn } from '~/lib/utils'

const props = defineProps<{
  class?: string
  active?: boolean
}>()
</script>

<template>
  <div :class="cn('grid grid-cols-[28px_1fr_24px] items-center gap-2 h-[38px] cursor-pointer', props.class)">
    <div class="action-cell__icon w-7 h-7">
      <IconButton
        v-slot="iconButtonSlots"
        :class="cn('w-full h-full rounded-full text-secondary bg-[#00000060] dark:bg-[#ffffff26]',
                   props.active && 'text-white bg-control-accent dark:bg-control-accent')"
      >
        <slot name="iconButton" v-bind="iconButtonSlots" />
      </IconButton>
    </div>
    <div class="flex flex-col gap-0.5">
      <p class="relative leading-[100%] text-text">
        <slot name="title" />
      </p>
      <small class="relative text-sm leading-[100%] text-secondary">
        <slot name="description" />
      </small>
    </div>
    <div class="w-4 h-4 text-[#00000060] dark:text-[#ffffff26]">
      <i-shared-chevron-right :filled="true" :font-controlled="false" class="w-4 h-4" />
    </div>
  </div>
</template>
