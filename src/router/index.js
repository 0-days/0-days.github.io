import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Contact from '../views/ContactView.vue'
import Events from '../views/EventsView.vue'
import Projects from '../views/ProjectsView.vue'
import Privacypolicy from '../views/legal/PrivacyPolicyView.vue'
import TermsAndConditions from '../views/legal/TermsAndConditionsView.vue'

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
      component: About
    },
    {
      path: '/contact',
      name: 'Contact - Hall of Codes',
      component: Contact
    },
    {
      path: '/events',
      name: 'Events - Hall of Codes',
      component: Events
    },
    {
      path: '/projects',
      name: 'Projects - Hall of Codes',
      component: Projects
    },
    {
      path: '/privacypolicy',
      name: 'Privacy Policy - Hall of Codes',
      component: Privacypolicy
    },
    {
      path: '/termsandconditions',
      name: 'Terms and Conditions - Hall of Codes',
      component: TermsAndConditions
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router
