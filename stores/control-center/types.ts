export interface ControlCenterConnection {
  id: string
  title: string
  description: string
  icon: string
  active: boolean
  onClick: () => void
}
