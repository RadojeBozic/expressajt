import { createRouter, createWebHistory } from 'vue-router'

// 🔹 Stranice
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
import AdminDashboard from './pages/AdminDashboard.vue'

// 🔹 Admin komponente (organizovane u partials)
import AdminUsers from './partials/admin/AdminUsers.vue'

// 🔹 Servisi (dinamički prikaz)
import ServiceMymaxico from './services/ServiceMymaxico.vue'
import ServiceFreeSite from './services/ServiceFreeSite.vue'
import ServiceOnlineshop from './services/ServiceOnlineshop.vue'
import ServiceSaaS from './services/ServiceSaaS.vue'
import ServiceMobileApps from './services/ServiceMobile.vue'
import ServiceErp from './services/ServiceErp.vue'
import ServiceCmsBlog from './services/ServiceCmsBlog.vue'
import ServiceAiAsAService from './services/ServiceAiAsAService.vue'

// 🔐 Provera autentifikacije
import { isAuthenticated } from './utils/auth'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    // automatski scroll na vrh
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
    { path: '/integrations-single', component: IntegrationsSingle, meta: { requiresAuth: true } },
    { path: '/pricing', component: Pricing },
    { path: '/customers', component: Customers, meta: { requiresAuth: true } },
    { path: '/customer', component: Customer, meta: { requiresAuth: true } },
    { path: '/changelog', component: Changelog },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp },
    { path: '/reset-password', component: ResetPassword },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/projects', component: Projects, meta: { requiresAuth: true } },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },

    // 🔹 Admin rute
    {
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard,
      meta: { requiresAuth: true, role: 'admin' },
    },
    {
      path: '/admin/users',
      name: 'AdminUsers',
      component: AdminUsers,
      meta: { requiresAuth: true, role: 'admin' },
    },

    // 🔹 Dinamička ruta za servise
    {
      path: '/services/:slug',
      name: 'Service',
      component: ServiceMymaxico,
      props: true, // automatski prosleđuje `slug` kao prop
    },
        {
      path: '/services/freesite',
      name: 'FreeSite',
      component: ServiceFreeSite,
      props: { slug: 'freesite' },
    },
    {
    path: '/services/onlineshop',
    name: 'OnlineShop',
    component: ServiceOnlineshop,
    props: { slug: 'onlineshop' }
  },
  {
    path: '/services/saas',
    name: 'ServiceSaaS',
    component: ServiceSaaS,
    props: { slug: 'saas' },
  },
  {
    path: '/services/mobile-apps',
    name: 'ServiceMobileApps',
    component: ServiceMobileApps,
    props: { slug: 'mobile-apps' },
  },
  {
    path: '/services/erp',
    name: 'ServiceErp',
    component: ServiceErp,
    props: { slug: 'erp' },
  },
  {
    path: '/services/cms-blog',
    name: 'ServiceCmsBlog',
    component: ServiceCmsBlog,
    props: { slug: 'cms-blog' },
  },
  {
    path: '/services/ai-as-a-service',
    name: 'ServiceAiAsAService',
    component: ServiceAiAsAService,
    props: { slug: 'ai-as-a-service' },
  },
  ]
})

// 🔐 Globalna zaštita pristupa
router.beforeEach((to, from, next) => {
  const isAuthRequired = to.meta.requiresAuth

  if (isAuthRequired && !isAuthenticated()) {
    return next('/signin')
  }

  next()
})

export default router
