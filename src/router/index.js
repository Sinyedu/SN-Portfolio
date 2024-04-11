import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import getPortfolioItems from '../modules/getPortfolio.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About'
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfoliosView.vue'),
      meta: {
        title: 'Projects'
      }
    },
    {
      path: '/portfoliodetail/:id',
      name: 'portfoliodetails',
      component: () => import('../views/PortfolioDetailView.vue'),
      meta: {
        dynamicTitle: true
      }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   document.title = `SN | ${to.meta.title}`
//   next()
// })

router.beforeEach ((to, from, next) => {
if (to.meta.dynamicTitle) {
  const portfolioItems = getPortfolioItems()
  .portfolioItems.value.find(item => item.id == to.params.id)
  if(portfolioItems) {
    document.title = `SN | ${portfolioItems.title}`
  }
}
  else {
    document.title = `SN | ${to.meta.title}`
  }
next()
})
export default router
