// @ts-check
import { defineConfig, envField } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ context: 'server', access: 'public', default: true }),
      SCORE_API_ENDPOINT: envField.string({ context: 'server', access: 'public', url: true })
    }
  }
})
