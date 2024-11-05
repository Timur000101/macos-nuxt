import type { ControlCenterConnection } from '~/stores/control-center/types'

export const useControlCenter = defineStore('control-center', () => {
  const connections = ref<ControlCenterConnection[]>([
    {
      id: 'wifi',
      title: 'Wi-Fi',
      description: 'My iPhone',
      icon: 'i-shared-wi-fi',
      active: false,
      onClick: () => toggleConnection('wifi'),
    },
    {
      id: 'bluetooth',
      title: 'Bluetooth',
      description: 'On',
      icon: 'i-shared-radio-waves',
      active: false,
      onClick: () => toggleConnection('bluetooth'),
    },
    {
      id: 'airdrop',
      title: 'AirDrop',
      description: 'On',
      icon: 'i-shared-airdrop',
      active: false,
      onClick: () => toggleConnection('airdrop'),
    },
  ])

  function toggleConnection(title: string) {
    const connectionIndex = connections.value.findIndex((connection: ControlCenterConnection) => connection.id === title)
    connections.value[connectionIndex].active = !connections.value[connectionIndex].active
    if (connectionIndex !== 0) {
      if (connections.value[connectionIndex].active)
        connections.value[connectionIndex].description = 'Off'
      else connections.value[connectionIndex].description = 'On'
    }
  }

  return {
    connections,
  }
})
