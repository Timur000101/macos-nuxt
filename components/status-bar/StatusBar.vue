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
</script>

<template>
  <div class="absolute top-0 w-full bg-slate-700/20 px-3">
    <Menubar class="bg-transparent border-none h-6 p-0">
      <MenubarMenu>
        <MenubarTrigger class="h-6 text-white data-[state=open]:text-white focus:text-white focus:bg-white/25 data-[state=open]:bg-white/25">
          File
        </MenubarTrigger>
        <MenubarContent class="border-[0.5px]" :align-offset="0" :side-offset="0">
          <MenubarItem class="h-[22px]">
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem class="h-[22px]">
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem class="h-[22px]" disabled>
            New Incognito Window
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
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
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>
