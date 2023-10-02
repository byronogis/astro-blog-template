import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
} from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import presetTheme from 'unocss-preset-theme'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography({
      selectorName: 'markdown',
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
  },
  theme: {
    breakpoints: {
      lg: '1024px',
    },
    colors: {
      primary: '#FFFFFF',
      secondary: '#F2F3F5',
      strong: '#E3E5E8',
      text: '#060607',
    },
  },
})
