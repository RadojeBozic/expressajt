<template>

     <!-- Header -->
    <Header />
  <div class="p-8 max-w-6xl mx-auto text-white">
    <h1 class="text-3xl font-bold mb-6 mt-[30px]" >📊 Admin kontrolna tabla</h1>

    <!-- Navigacija -->
    <div class="flex gap-4 mb-6">
      <button @click="view = 'users'" class="btn bg-blue-600 hover:bg-blue-700">👤 Korisnici</button>
      <button @click="view = 'messages'" class="btn bg-green-600 hover:bg-green-700">✉️ Poruke</button>
      <button @click="view = 'stats'" class="btn bg-purple-600 hover:bg-purple-700">📈 Statistika</button>
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

export default {
  name: 'AdminDashboard',
  components: {
    AdminUsers,
    AdminMessages,
    AdminStats,
    Header
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
        stats: 'AdminStats'
      }[this.view]
    }
  }
}
</script>
