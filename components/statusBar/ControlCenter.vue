<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ActionCell } from '~/components/shared'
import { useControlCenter } from '~/stores/control-center/control-center'
import { Card } from '../ui'

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
        <Card class="pl-2 py-2.5">
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

          <!--          <ActionCell> -->
          <!--            <template #iconButton="iconButtonSlots"> -->
          <!--              <i-shared-wi-fi v-bind="iconButtonSlots" class="w-full h-full" /> -->
          <!--            </template> -->
          <!--            <template #title> -->
          <!--              Bluetooth -->
          <!--            </template> -->
          <!--            <template #description> -->
          <!--              Off -->
          <!--            </template> -->
          <!--          </ActionCell> -->
          <!--          <ActionCell active> -->
          <!--            <template #iconButton="iconButtonSlots"> -->
          <!--              <i-shared-wi-fi v-bind="iconButtonSlots" class="w-full h-full" /> -->
          <!--            </template> -->
          <!--            <template #title> -->
          <!--              AirDrop -->
          <!--            </template> -->
          <!--            <template #description> -->
          <!--              Off -->
          <!--            </template> -->
          <!--          </ActionCell> -->
        </Card>
        <Card />
      </div>
      <div class="flex flex-col gap-[10px]">
        <Card class="w-full h-[64px]" />
        <Card class="w-full h-[64px]" />
        <Card class="w-full h-[64px]" />
      </div>
    </div>
  </Teleport>
</template>
