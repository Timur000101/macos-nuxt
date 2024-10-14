<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar'
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
      <Menubar>
        <MenubarMenu v-for="menu in statusBarMenu.menuData" :key="menu.label">
          <MenubarTrigger>
            {{ menu.label }}
          </MenubarTrigger>
          <MenubarContent :align-offset="0" :side-offset="0">
            <template v-for="item in menu.submenu" :key="item.label">
              <MenubarItem v-if="item.type === 'item'" @select="statusBarMenu.triggerAction(item.label!)">
                {{ item.label }}
                <MenubarShortcut v-if="item.accelerator">
                  {{ item.accelerator }}
                </MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator v-if="item.type === 'separator'" />
              <MenubarSub v-if="item.type === 'submenu'">
                <MenubarSubTrigger class="h-[22px]">
                  {{ item.label }}
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <template v-for="subItem in item.submenu" :key="subItem.label">
                    <MenubarItem v-if="subItem.type === 'item'" class="h-[22px]">
                      {{ subItem.label }}
                    </MenubarItem>
                    <MenubarSeparator v-if="subItem.type === 'separator'" />
                  </template>
                </MenubarSubContent>
              </MenubarSub>
            </template>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>

    <MenuControls />
  </div>
</template>
