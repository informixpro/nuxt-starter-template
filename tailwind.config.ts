import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    './src/components/**/*.{vue,js}',
    './src/composables/**/*.{js,ts}',
    './src/content/**/*.md',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/utils/**/*.{js,ts}',
    './src/config/**/*.{js,ts}',
    './src/app.vue',
    './src/error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
