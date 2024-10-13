export const actionMap: Record<string, () => void> = {
  'New Tab': () => console.log('New Tab Action'),
  'New Window': () => console.log('New Window Action'),
  'Print': () => console.log('Print Action'),
  // Add other actions here...
}

export const statusBarMenu: StatusBarMenuItem[] = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New Tab',
        accelerator: 'CmdOrCtrl+T',
        type: 'item',
      },
      {
        label: 'New Window',
        accelerator: 'CmdOrCtrl+N',
        type: 'item',
      },
      {
        label: 'New Incognito Window',
        disabled: true,
        type: 'item',
      },
      {
        type: 'separator',
      },
      {
        label: 'Share',
        type: 'submenu',
        submenu: [
          {
            label: 'Email link',
            type: 'item',
          },
          {
            label: 'Messages',
            type: 'item',
          },
          {
            label: 'Notes',
            type: 'item',
          },
        ],
      },
      {
        type: 'separator',
      },
      {
        label: 'Print',
        accelerator: 'CmdOrCtrl+P',
        type: 'item',
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        type: 'item',
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        type: 'item',
      },
    ],
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        type: 'item',
      },
      {
        label: 'Developer',
        submenu: [
          {
            label: 'Developer Tools',
            accelerator: 'CmdOrCtrl+Shift+I',
            type: 'item',
          },
          {
            label: 'Toggle Fullscreen',
            accelerator: 'CmdOrCtrl+Shift+F',
            type: 'item',
          },
        ],
      },
    ],
  },
  {
    label: 'Window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        type: 'item',
      },
      {
        label: 'Zoom',
        accelerator: 'CmdOrCtrl+Shift+Z',
        type: 'item',
      },
      {
        type: 'separator',
      },
      {
        label: 'Arrange Icons By',
        type: 'item',
        submenu: [
          {
            label: 'Name',
          },
          {
            label: 'Kind',
          },
          {
            label: 'Date Modified',
          },
        ],
      },
    ],
  },
  // {
  //   label: 'Help',
  //   submenu: [
  //     // Add help menu items here
  //   ],
  // },
]
