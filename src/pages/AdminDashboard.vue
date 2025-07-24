<template>

     <!-- Header -->
    <Header />
  <div class="p-8 max-w-6xl mx-auto text-white">
    <h1 class="text-3xl font-bold mb-6 mt-[30px]" >📊 Admin kontrolna tabla</h1>

    <!-- Navigacija -->
    <div class="flex gap-4 mb-6">
      <button @click="view = 'users'" class="btn bg-blue-600 hover:bg-blue-700">👤 Korisnici</button>
      <button @click="view = 'messages'" class="btn bg-green-600 hover:bg-green-700">✉️ Poruke</button>
      <button @click="view = 'sites'" class="btn bg-orange-600 hover:bg-orange-700">🌐 Prezentacije</button>
      <button @click="view = 'stats'" class="btn bg-purple-600 hover:bg-purple-700">📈 Statistika</button>
       <button @click="view = 'vulnerabilities'" class="btn bg-red-600 hover:bg-red-700">🛡️ Ranjivosti</button>
    </div>

    <!-- Dinamička komponenta -->
    <component :is="currentComponent" />
  </div>
</template>

<script>
import AdminUsers from '../partials/admin/AdminUsers.vue'
import AdminMessages from '../partials/admin/AdminMessages.vue'
import AdminStats from '../partials/admin/AdminStats.vue'
import Header from '../partials/Header.vue'
import AdminSites from '../partials/admin/AdminSites.vue'
import AdminVulnerabilities from '../partials/admin/AdminVulnerabilities.vue'

export default {
  name: 'AdminDashboard',
  components: {
    AdminUsers,
    AdminMessages,
    AdminStats,
    AdminSites,
    Header,
    AdminVulnerabilities
  },
  data() {
    return {
      view: 'users'

    }
  },
  computed: {
    currentComponent() {
      return {
        users: 'AdminUsers',
        messages: 'AdminMessages',
        sites: 'AdminSites',
        stats: 'AdminStats',
        vulnerabilities: 'AdminVulnerabilities'
      }[this.view]
    }
  }
}
</script>
