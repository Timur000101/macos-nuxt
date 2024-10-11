// static/menubar-macos.ts
export default [
  {
    label: 'File',
    submenu: [
      {
        label: 'New Tab',
        accelerator: 'CmdOrCtrl+T',
      },
      {
        label: 'New Window',
        accelerator: 'CmdOrCtrl+N',
      },
      {
        label: 'New Incognito Window',
        disabled: true,
      },
      {
        type: 'separator',
      },
      {
        label: 'Share',
        submenu: [
          {
            label: 'Email link',
          },
          {
            label: 'Messages',
          },
          {
            label: 'Notes',
          },
        ],
      },
      {
        type: 'separator',
      },
      {
        label: 'Print...',
        accelerator: 'CmdOrCtrl+P',
      },
    ],
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
      },
    ],
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
      },
      {
        label: 'Developer',
        submenu: [
          {
            label: 'Developer Tools',
            accelerator: 'CmdOrCtrl+Shift+I',
          },
          {
            label: 'Toggle Fullscreen',
            accelerator: 'CmdOrCtrl+Shift+F',
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
      },
      {
        label: 'Zoom',
        accelerator: 'CmdOrCtrl+Shift+Z',
      },
      {
        type: 'separator',
      },
      {
        label: 'Arrange Icons By',
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
  {
    label: 'Help',
    submenu: [
      // Add help menu items here
    ],
  },
]
