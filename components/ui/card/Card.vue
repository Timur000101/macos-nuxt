<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils';

const props = defineProps<{
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <div :class="cn(`card shadow-widget 
    bg-white/75 border-[0.5px] border-content-bg
        rounded-[10px]`, props.class)"
    >
        <slot />
    </div>
</template>