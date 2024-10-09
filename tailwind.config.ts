import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'content-bg-light': '#F4F5F5',
        'content-bg-dark': '#FFFFFF05',
        'control-accent': '#007AFF',
        'control-bg-light': '#FFFFFF',
        'control-bg-dark': '#1E1E1E',
        'control-regular-light': '#FFFFFF',
        'control-regular-dark': '#FFFFFF25',
        'control-text-regular-light': '#00000085',
        // 'control-text-regular-dark': '#FFFFFF85',
        'control-text-disabled-light': '#00000025',
        // 'control-text-disabled-dark': '#FFFFFF25',
        'find-highlighting': '#FFFF00',
        'grid-light': '#E6E6E6',
        // 'grid-dark': '#000000',
        'header-text-light': '#00000085',
        // 'header-text-dark': '#FFFFFF85',
      },
    },
  },
}
