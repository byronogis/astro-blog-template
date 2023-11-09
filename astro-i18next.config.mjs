import { site } from './src/setting.js'

/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: site.preferredLocale,
  locales: site.locales,
}
