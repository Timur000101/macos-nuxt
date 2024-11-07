<script setup lang="ts">
import { cn } from '~/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    active?: boolean
    class?: HTMLAttributes['class']
}>()
</script>

<template>
    <button :class="cn('outline-none', props.active && 'bg-[#FFFFFF26]', props.class)" v-bind="$attrs">
        <slot :filled="true" :font-controlled="false" class="w-6 h-6" />
    </button>
</template>