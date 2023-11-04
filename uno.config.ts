import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
} from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import presetTheme from 'unocss-preset-theme'
import { site } from './src/setting'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography({
      selectorName: 'markdown',
      cssExtend: {
        '*>code': {
          'white-space': 'break-spaces',
          'word-break': 'break-all',
        },
      },
    }),
    presetTheme({
      theme: {
        dark: {
          colors: {
            primary: '#313338',
            secondary: '#2B2D31',
            strong: '#1E1F22',
            text: '#F2F3F5',
          },
        },
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  rules: [
    [/^site-shadow-(\d+)$/, ([, d]) => ({ 'box-shadow': `0 0 4px 0 rgba(0, 0, 0, ${Number(d) / 100})` })],
  ],
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'site-opacity': 'opacity-60',
    'site-title': 'text-3xl font-bold text-center py-4',
    'site-section-title': 'text-xl font-bold text-center py-4',
    'site-list': 'grid grid-cols-1 auto-rows-min gap-4 lg:(grid-cols-2 gap-8)',
  },
  theme: {
    breakpoints: {
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      primary: '#FFFFFF',
      secondary: '#F2F3F5',
      strong: '#E3E5E8',
      text: '#060607',
    },
  },
  safelist: [
    ...Object.values(site.iconMap),
    '!translate-none',
  ],
  layers: {
    theme: 0,
    icons: 1,
  },
})
