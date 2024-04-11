import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home - Hall of Codes',
      component: Home
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/about',
      name: 'About - Hall of Codes',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      name: 'Contact - Hall of Codes',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/events',
      name: 'Events - Hall of Codes',
      component: () => import('../views/Events.vue')
    },
    {
      path: '/projects',
      name: 'Projects - Hall of Codes',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/privacypolicy',
      name: 'Privacy Policy - Hall of Codes',
      component: () => import('../views/legal/PrivacyPolicy.vue')
    },
    {
      path: '/termsandconditions',
      name: 'Terms and Conditions - Hall of Codes',
      component: () => import('../views/legal/TermsAndConditions.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
