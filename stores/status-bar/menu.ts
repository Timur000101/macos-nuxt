import type { StatusBarMenuItem } from './types'
import { actionMap, statusBarMenu } from './status-bar-menu'

export const useStatusBarMenu = defineStore('status-bar/menu', {
  state: () => ({
    menuData: [...statusBarMenu] as StatusBarMenuItem[],
  }),

  actions: {
    triggerAction(label: string) {
      if (label in actionMap) {
        actionMap[label]()
      }
    },
  },
})
