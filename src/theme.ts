import { system } from '@theme-ui/presets'

export const theme = {
  ...{
    ...system,
    colors: {
      ...system.colors,
      modes: {},
    },
  },
  styles: {
    root: {
      margin: 0,
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    a: {
      color: 'primary',
    },
  },
}
