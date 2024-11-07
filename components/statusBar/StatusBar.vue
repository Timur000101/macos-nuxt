<script setup lang="ts">
import MenuControls from './MenuControls.vue'

const statusBarMenu = useStatusBarMenu()
</script>

<template>
  <div class="flex justify-between absolute top-0 w-full bg-quaternary px-3">
    <div class="flex gap-4">
      <i-shared-apple-white filled :font-controlled="false" class="w-6 h-6" />
      <div class="text-white font-semibold">
        Finder
      </div>
      <SMenubar>
        <SMenubarMenu v-for="menu in statusBarMenu.menuData" :key="menu.label">
          <SMenubarTrigger>
            {{ menu.label }}
          </SMenubarTrigger>
          <SMenubarContent :align-offset="0" :side-offset="0">
            <template v-for="item in menu.submenu" :key="item.label">
              <SMenubarItem v-if="item.type === 'item'" @select="statusBarMenu.triggerAction(item.label!)">
                {{ item.label }}
                <SMenubarShortcut v-if="item.accelerator">
                  {{ item.accelerator }}
                </SMenubarShortcut>
              </SMenubarItem>
              <SMenubarSeparator v-if="item.type === 'separator'" />
              <SMenubarSub v-if="item.type === 'submenu'">
                <SMenubarSubTrigger class="h-[22px]">
                  {{ item.label }}
                </SMenubarSubTrigger>
                <SMenubarSubContent>
                  <template v-for="subItem in item.submenu" :key="subItem.label">
                    <SMenubarItem v-if="subItem.type === 'item'" class="h-[22px]">
                      {{ subItem.label }}
                    </SMenubarItem>
                    <SMenubarSeparator v-if="subItem.type === 'separator'" />
                  </template>
                </SMenubarSubContent>
              </SMenubarSub>
            </template>
          </SMenubarContent>
        </SMenubarMenu>
      </SMenubar>
    </div>

    <MenuControls />
  </div>
</template>
