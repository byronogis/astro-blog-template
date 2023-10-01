import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography({
      selectorName: 'markdown',
    }),
  ],
})
