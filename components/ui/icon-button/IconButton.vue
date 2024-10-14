<script setup lang="ts">
const slot = ref(null)


onMounted(() => {
    console.log(slot.value)
})
</script>

<template>
    <button class="hover:bg-[#FFFFFF26] focus:bg-[#FFFFFF26] rounded-sm outline-none" v-bind="$attrs">
        <slot :filled="true" :font-controlled="false" class="w-6 h-6" />
    </button>
</template>