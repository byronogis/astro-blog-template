// import {
//   createLocalFontProcessor,
// } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'hoverable-text': 'opacity-60 hover:opacity-100 transition-(opacity 200 ease)',
    'live-area': 'max-w-65rch mx-auto',
  },
  safelist: [
    'i-lucide-house',
    'i-lucide:scroll-text',
    'i-lucide:tag',
    'i-lucide:square-library',
    'i-uil:github-alt',
    'i-lucide:sun',
    'i-lucide:moon',
  ],
  presets: [
    presetWind4(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        'width': '1.2em',
        'height': '1.2em',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
        mono: 'DM Mono',
        condensed: 'Roboto Condensed',
        wisper: 'Bad Script',
      },
      // TODO fix `fontServeBaseUrl` pathing issue with local fonts while astro has base set
      // processors: createLocalFontProcessor(),
    }),
    presetTypography({
      selectorName: 'prose',
      cssExtend: {
        ':not(pre)>code': {
          'white-space': 'break-spaces',
          'word-break': 'break-all',
        },
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
