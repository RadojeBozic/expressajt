import { createRouter, createWebHistory } from 'vue-router'

// 🔹 Osnovne stranice
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Changelog from './pages/Changelog.vue'
import Customers from './pages/Customers.vue'
import Customer from './pages/Customer.vue'
import Dashboard from './pages/Dashboard.vue'
import Projects from './pages/Projects.vue'
import Pricing from './pages/Pricing.vue'
import SelectTemplate from './pages/SelectTemplate.vue'

// 🔹 Autentifikacija
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'
import { isAuthenticated } from './utils/auth'

// 🔹 Admin sekcija
import AdminDashboard from './pages/AdminDashboard.vue'
import AdminUsers from './partials/admin/AdminUsers.vue'

// 🔹 Stranice za integracije
import Integrations from './pages/Integrations.vue'
import IntegrationsSingle from './pages/IntegrationsSingle.vue'

// 🔹 Servisi
import ServiceAiAsAService from './services/ServiceAiAsAService.vue'
import ServiceCmsBlog from './services/ServiceCmsBlog.vue'
import ServiceErp from './services/ServiceErp.vue'
import ServiceFreeSite from './services/ServiceFreeSite.vue'
import ServiceMobileApps from './services/ServiceMobile.vue'
import ServiceMymaxico from './services/ServiceMymaxico.vue'
import ServiceOnlineshop from './services/ServiceOnlineshop.vue'
import ServiceProSite from './services/ServiceProSite.vue'
import ServiceSaaS from './services/ServiceSaaS.vue'


// 🔹 Forme i pregledi
import FreeSiteForm from './pages/FreeSiteForm.vue'
import ProSiteForm from './services/ProSiteForm.vue'
import DemoFree from './services/DemoFree.vue'
import Preview from './pages/PresentationView.vue'


const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    window.scrollTo({ top: 0 })
  },
  routes: [
    // 🌐 Javne stranice
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/changelog', component: Changelog },
    { path: '/pricing', component: Pricing },

    // 🧩 Integracije
    { path: '/integrations', component: Integrations },
    { path: '/integrations-single', component: IntegrationsSingle, meta: { requiresAuth: true } },

    // 👥 Korisnici i klijenti
    { path: '/customers', component: Customers, meta: { requiresAuth: true } },
    { path: '/customer', component: Customer, meta: { requiresAuth: true } },

    // 🧾 Projekti i dashboard
    { path: '/projects', component: Projects, meta: { requiresAuth: true } },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },

    // 🔐 Autentifikacija
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp },
    { path: '/reset-password', component: ResetPassword },

    // 🛠️ Admin sekcija
    {
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard,
      meta: { requiresAuth: true, role: 'admin' }
    },
    {
      path: '/admin/users',
      name: 'AdminUsers',
      component: AdminUsers,
      meta: { requiresAuth: true, role: 'admin' }
    },

    // 🧰 Servisi
    { path: '/services/:slug', name: 'Service', component: ServiceMymaxico, props: true },
    { path: '/services/freesite', name: 'FreeSite', component: ServiceFreeSite, props: { slug: 'freesite' } },
    { path: '/services/prosite', name: 'ServiceProSite', component: ServiceProSite, props: { slug: 'prosite' } },
    { path: '/services/onlineshop', name: 'OnlineShop', component: ServiceOnlineshop, props: { slug: 'onlineshop' } },
    { path: '/services/saas', name: 'ServiceSaaS', component: ServiceSaaS, props: { slug: 'saas' } },
    { path: '/services/mobile-apps', name: 'ServiceMobileApps', component: ServiceMobileApps, props: { slug: 'mobile-apps' } },
    { path: '/services/erp', name: 'ServiceErp', component: ServiceErp, props: { slug: 'erp' } },
    { path: '/services/cms-blog', name: 'ServiceCmsBlog', component: ServiceCmsBlog, props: { slug: 'cms-blog' } },
    { path: '/services/ai-as-a-service', name: 'ServiceAiAsAService', component: ServiceAiAsAService, props: { slug: 'ai-as-a-service' } },

    // 📝 Forme za sajtove
    { path: '/free-site-form', name: 'FreeSiteForm', component: FreeSiteForm },
    { path: '/pro-site-form', name: 'ProSiteForm', component: ProSiteForm },

    // 🔎 Pregled prezentacija
    { path: '/prezentacije/demo-free', name: 'DemoFree', component: DemoFree, props: { slug: 'demo-free' } },
    { path: '/prezentacije/:slug', name: 'Preview', component: Preview, props: true },

    // 🧩 Template izbor
    { path: '/select-template', name: 'SelectTemplate', component: SelectTemplate },

    // ✏️ Izmena sajta
    {
      path: '/edit-site/:slug',
      name: 'EditSite',
      component: () => import('./pages/EditSite.vue'),
      props: true
    },
    // 🛠️ Ostale stranice
    { path: '/admin', redirect: '/admin/dashboard' },
    {
      path: '/demo',
      name: 'DemoPreviews',
      component: () => import('./pages/DemoPreviews.vue')
    },
    {
      path: '/prezentacije/demo-klasicni-free',
      name: 'DemoFreeClassic',
      component: Preview,
      props: { slug: 'demo-klasicni-free' }
    },
    {
      path: '/prezentacije/demo-klasicni-pro',
      name: 'DemoProClassic',
      component: Preview,
      props: { slug: 'demo-klasicni-pro' }
    },
    {
      path: '/prezentacije/demo-klasicni-active',
      name: 'DemoActiveClassic',
      component: Preview,
      props: { slug: 'demo-klasicni-active' }
    },
    {
      path: '/demo',
      name: 'DemoPreviews',
      component: () => import('./pages/DemoPreviews.vue')
    },

    // Footer links
    {
  path: '/footer/products/features',
  name: 'FooterFeatures',
  component: () => import('./pages/footer/products/Features.vue')
},
    {
      path: '/footer/products/integrations',
      name: 'FooterIntegrations',
      component: () => import('./pages/footer/products/Integrations.vue')
    }, 
    {
      path: '/footer/products/changelog',
      name: 'ChangelogPage',
      component: () => import('./pages/footer/products/Changelog.vue')
    },
    {
      path: '/footer/products/method',
      name: 'MethodPage',
      component: () => import('./pages/footer/products/Method.vue')
    },
    {
      path: '/footer/company/about',
      name: 'AboutPage',
      component: () => import('./pages/footer/company/About.vue')
    },


  ]
})

// 🔐 Middleware zaštita pristupa
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    return next('/signin')
  }
  next()
})


export default router
