import { titleMiddleware } from '@/middleware/titleMiddleware'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
  routes,
})

router.beforeEach(titleMiddleware)

//Handle hot reload for routes (vue router unplugin)
if (import.meta.hot) {
  handleHotUpdate(router)
}
export default router
