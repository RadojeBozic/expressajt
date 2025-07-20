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
import FreeSiteForm from './pages/FreeSiteForm.vue'
import Preview from './pages/Preview.vue'
import SelectTemplate from './pages/SelectTemplate.vue'

// 🔹 Admin komponente
import AdminUsers from './partials/admin/AdminUsers.vue'

// 🔹 Servisi
import ServiceMymaxico from './services/ServiceMymaxico.vue'
import ServiceFreeSite from './services/ServiceFreeSite.vue'
import ServiceOnlineshop from './services/ServiceOnlineshop.vue'
import ServiceSaaS from './services/ServiceSaaS.vue'
import ServiceMobileApps from './services/ServiceMobile.vue'
import ServiceErp from './services/ServiceErp.vue'
import ServiceCmsBlog from './services/ServiceCmsBlog.vue'
import ServiceAiAsAService from './services/ServiceAiAsAService.vue'
import ProSiteForm from './services/ProSiteForm.vue'
import ServiceProSite from './services/ServiceProSite.vue'
import DemoFree from './services/DemoFree.vue'
//import DemoPro from './services/DemoPro.vue'

// 🔐 Autentifikacija
import { isAuthenticated } from './utils/auth'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to) {
    window.scrollTo({ top: 0 })
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
    { path: '/admin/dashboard', name: 'AdminDashboard', component: AdminDashboard, meta: { requiresAuth: true, role: 'admin' } },
    { path: '/admin/users', name: 'AdminUsers', component: AdminUsers, meta: { requiresAuth: true, role: 'admin' } },

    // 🔹 Servisi
    { path: '/services/:slug', name: 'Service', component: ServiceMymaxico, props: true },
    { path: '/services/freesite', name: 'FreeSite', component: ServiceFreeSite, props: { slug: 'freesite' } },
    { path: '/services/prosite', name: 'ServiceProSite', component: ServiceProSite, props: { slug: 'prosite' } },
    { path: '/services/onlineshop', name: 'OnlineShop', component: ServiceOnlineshop, props: { slug: 'onlineshop' } },
    { path: '/services/saas', name: 'ServiceSaaS', component: ServiceSaaS, props: { slug: 'saas' } },
    { path: '/services/mobile-apps', name: 'ServiceMobileApps', component: ServiceMobileApps, props: { slug: 'mobile-apps' } },
    { path: '/services/erp', name: 'ServiceErp', component: ServiceErp, props: { slug: 'erp' } },
    { path: '/services/cms-blog', name: 'ServiceCmsBlog', component: ServiceCmsBlog, props: { slug: 'cms-blog' } },
    { path: '/services/ai-as-a-service', name: 'ServiceAiAsAService', component: ServiceAiAsAService, props: { slug: 'ai-as-a-service' } },

    // 🔹 Forme i pregledi
    { path: '/free-site-form', name: 'FreeSiteForm', component: FreeSiteForm },
    { path: '/pro-site-form', name: 'ProSiteForm', component: ProSiteForm },
    //{ path: '/demo-site-form', name: 'DemoSiteForm', component: DemoSiteForm },
    { path: '/prezentacije/demo-free', name: 'DemoFree', component: DemoFree, props: { slug: 'demo-free' } },
    //{ path: '/prezentacije/demo-pro', name: 'DemoPro', component: DemoPro, props: { slug: 'demo-pro' } },
    { path: '/prezentacije/:slug', name: 'Preview', component: Preview, props: true },
    { path: '/select-template', name: 'SelectTemplate', component: SelectTemplate }
  ]
})

// 🔐 Middleware zaštita
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    return next('/signin')
  }
  next()
})

export default router;
