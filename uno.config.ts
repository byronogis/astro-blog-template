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
        'p>code': {
          'white-space': 'break-spaces',
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
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'site-tag': 'px-0.5em py-0.25em border-2px border-dashed border-current rounded-0.5em text-nowrap',
    'site-opacity': 'opacity-60',
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
