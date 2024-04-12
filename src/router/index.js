import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'Contact - Hall of Codes',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/events',
      name: 'Events - Hall of Codes',
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/projects',
      name: 'Projects - Hall of Codes',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/privacypolicy',
      name: 'Privacy Policy - Hall of Codes',
      component: () => import('../views/legal/PrivacyPolicyView.vue')
    },
    {
      path: '/termsandconditions',
      name: 'Terms and Conditions - Hall of Codes',
      component: () => import('../views/legal/TermsAndConditionsView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
