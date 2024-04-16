import { createRouter, createWebHistory } from 'vue-router'
import AboutmeView from '../components/AboutmeView.vue'
import ContactView from '../components/ContactView.vue'
import MainView from '../components/MainView.vue'
import getPortfolioItems from '../modules/getPortfolio.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutmeView,
      meta: {
        title: 'About'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact'
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
      name: 'details',
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
