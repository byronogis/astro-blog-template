import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind4(),
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
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
