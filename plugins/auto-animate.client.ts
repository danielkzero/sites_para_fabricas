import { defineNuxtPlugin } from '#app'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

export default defineNuxtPlugin((nuxtApp) => {
  if (!nuxtApp.vueApp._context.directives?.['auto-animate']) {
    nuxtApp.vueApp.use(autoAnimatePlugin)
  }
})
