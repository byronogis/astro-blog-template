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
        ':not(pre)>code': {
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
    'site-list': 'grid grid-cols-1 auto-rows-min gap-4 md:(grid-cols-2 gap-8)',
    'site-mask': [
      'fixed z-30 inset-0 m-auto bg-primary:95',
      'sm:(left-80px)',
      'lg:(left-20%)',
      'xl:(left-[calc((100vw-var(--site-theme-breakpoints-xl,1440px))/2+var(--site-theme-breakpoints-xl,1440px)*0.2)])',
    ].join(' '),
    'site-mask__content': [
      'absolute left-0 right-0 top-8 bottom-8 m-auto p-8 w-[min(90%,calc(var(--site-theme-breakpoints-xl,1440px)*0.65))] bg-primary site-shadow-60 rounded-lg',
      'grid grid-rows-[1fr_auto]',
      'lt-md:(p-4)',
      'xl:(right-[calc((100vw-var(--site-theme-breakpoints-xl,1440px))/2)])',
    ].join(' '),
    'site-mask__close': [
      'justify-self-center w-50% mt-4 py-2 px-4 rounded-lg border-1px border-[theme(colors.text)] text-text site-opacity',
      'sm:(justify-self-end w-40)',
    ].join(' '),
  },
  theme: {
    breakpoints: {
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1880px',
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
  preflights: [
    {
      getCSS: ({ theme }) => `
        :root {
          --site-theme-breakpoints-xl: ${theme.breakpoints.xl};
        }
      `,
    },
  ],
})
