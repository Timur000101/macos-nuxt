<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ActionCell } from '~/components/shared'
import { useControlCenter } from '~/stores/control-center/control-center'

const router = useRouter()
const controlCenterStore = useControlCenter()

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
        <SCard class="pl-2 py-2.5">
          <ActionCell
            v-for="connection in controlCenterStore.connections"
            :key="connection.title"
            :active="connection.active"
            @click="connection.onClick"
          >
            <template #iconButton="iconButtonSlots">
              <component :is="connection.icon" v-bind="iconButtonSlots" class="w-full h-full" />
            </template>
            <template #title>
              {{ connection.title }}
            </template>
            <template #description>
              {{ connection.description }}
            </template>
          </ActionCell>
        </SCard>
        <div class="grid grid-rows-2 grid-cols-2 w-full gap-2.5">
          <SCard class="px-2 py-2 col-span-2">
            <div class="grid grid-cols-[28px_1fr] items-center gap-2 h-full">
              <SIconButton
                v-slot="slotProps"
                class="w-7 h-7 rounded-full flex items-center justify-center bg-gray-400 dark:bg-purple-400 text-white"
                @click="() => $colorMode.preference = $colorMode.preference === 'dark' ? 'light' : 'dark'"
              >
                <i-shared-moon v-bind="slotProps" />
              </SIconButton>
              <p class="text-[13px] font-semibold text">
                {{ $colorMode.preference === 'dark' ? 'Light mode' : 'Dark mode' }}
              </p>
            </div>
          </SCard>
          <SCard>
            <SIconButton v-slot="slotProps" class="flex flex-col items-center text-secondary">
              <i-shared-keyboard-brightness v-bind="slotProps" />
              <p class="text-[10px] leading-[13px] text-text">
                Keyboard Brightness
              </p>
            </SIconButton>
          </SCard>
          <SCard>
            <SIconButton v-slot="slotProps" class="flex flex-col items-center text-secondary">
              <i-shared-keyboard-brightness v-bind="slotProps" />
              <p class="text-[10px] leading-[13px] text-text">
                Keyboard Brightness
              </p>
            </SIconButton>
          </SCard>
        </div>
      </div>
      <div class="flex flex-col gap-[10px]">
        <SCard class="w-full h-[64px]" />
        <SCard class="w-full h-[64px]" />
        <SCard class="w-full h-[64px]" />
      </div>
    </div>
  </Teleport>
</template>
