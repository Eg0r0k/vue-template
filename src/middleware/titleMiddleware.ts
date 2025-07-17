import { useTitle } from '@vueuse/core'
import type { RouteLocationNormalized } from 'vue-router'
export const titleMiddleware = (to: RouteLocationNormalized) => {
  const title = to.meta.title ? `${to.meta.title} - App` : 'App'
  useTitle(title)
}
