export interface StatusBarMenuItem {
  label?: string
  type?: 'separator' | 'item' | 'submenu'
  accelerator?: string
  disabled?: boolean
  submenu?: StatusBarMenuItem[]
}
