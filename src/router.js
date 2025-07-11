import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Integrations from './pages/Integrations.vue'
import IntegrationsSingle from './pages/IntegrationsSingle.vue'
import Pricing from './pages/Pricing.vue'
import Customers from './pages/Customers.vue'
import Customer from './pages/Customer.vue'
import Changelog from './pages/Changelog.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'
import Contact from './pages/Contact.vue'
import Projects from './pages/Projects.vue'
import Dashboard from './pages/Dashboard.vue'
import AdminUsers from './partials/admin/AdminUsers.vue' // Importuj AdminUsers komponent
import AdminDashboard from './pages/AdminDashboard.vue' // Importuj AdminDashboard komponent


import { isAuthenticated } from './utils/auth'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 })
    } else {
      document.querySelector('html').style.scrollBehavior = 'auto'
      window.scroll({ top: 0 })
      document.querySelector('html').style.scrollBehavior = ''
    }
  },
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/integrations', component: Integrations },
    {
      path: '/integrations-single',
      component: IntegrationsSingle,
      meta: { requiresAuth: true },
    },
    { path: '/pricing', component: Pricing },
    {
      path: '/customers',
      component: Customers,
      meta: { requiresAuth: true },
    },
    {
      path: '/customer',
      component: Customer,
      meta: { requiresAuth: true },
    },
    { path: '/changelog', component: Changelog },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp },
    { path: '/reset-password', component: ResetPassword },
    { path: '/contact', name: 'contact', component: Contact },
    {
      path: '/projects',
      component: Projects,
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
    },
    {
    path: '/admin/users',
    name: 'AdminUsers',
    component: AdminUsers, // Komponent za administraciju korisnika
    meta: { requiresAuth: true, role: 'admin' } // ako želiš zaštitu
   },
   {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component:  AdminDashboard,
    meta: { requiresAuth: true, role: 'admin' }
  }

  
  ],
})

// 🔐 Globalni guard za provere prijave
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/signin')
  } else {
    next()
  }
})

export default router
