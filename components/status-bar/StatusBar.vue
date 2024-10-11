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

import menubarData from '~/static/status-bar-menu'
</script>

<template>
  <div class="absolute top-0 w-full bg-quaternary px-3">
    <Menubar class="bg-transparent border-none h-6 p-0">
      <MenubarMenu v-for="menu in menubarData" :key="menu.label">
        <MenubarTrigger class="h-6 text-white data-[state=open]:text-white focus:text-white focus:bg-white/25 data-[state=open]:bg-white/25">
          {{ menu.label }}
        </MenubarTrigger>
        <MenubarContent class="border-[0.5px] bg-content-bg shadow-black/16 shadow-md" :align-offset="0" :side-offset="0">
          <template v-for="item in menu.submenu" :key="item.label">
            <MenubarItem v-if="!item.type" class="h-[22px]">
              {{ item.label }}
              <MenubarShortcut v-if="item.accelerator">
                {{ item.accelerator }}
              </MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator v-else />
          </template>
          <!-- <MenubarSub>
            <MenubarSubTrigger class="h-[22px]">
              Share
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem class="h-[22px]">
                Email link
              </MenubarItem>
              <MenubarItem class="h-[22px]">
                Messages
              </MenubarItem>
              <MenubarItem class="h-[22px]">
                Notes
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem class="h-[22px]">
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem> -->
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>
