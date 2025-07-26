<template>
  <div class="p-8 max-w-6xl mx-auto text-white">
    <h1 class="text-3xl font-bold mb-6">🌐 Poslate prezentacije</h1>

    <table class="table-auto w-full border border-slate-700 text-sm rounded-lg overflow-hidden shadow-md">
      <thead class="bg-slate-800 text-left">
        <tr>
          <th class="px-4 py-2 border border-slate-700">Naziv</th>
          <th class="px-4 py-2 border border-slate-700">Korisnik</th>
          <th class="px-4 py-2 border border-slate-700">Tip</th>
          <th class="px-4 py-2 border border-slate-700">Datum</th>
          <th class="px-4 py-2 border border-slate-700">Status</th>
          <th class="px-4 py-2 border border-slate-700">Akcije</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="site in sites" :key="site.id" class="hover:bg-slate-700 transition duration-100">
          <td class="px-4 py-2 border border-slate-700">{{ site.name }}</td>
          <td class="px-4 py-2 border border-slate-700">
            {{ site.email || 'Nepoznato' }}
          </td>
          <td class="px-4 py-2 border border-slate-700">
            <span :class="site.type === 'pro' ? 'text-yellow-400' : 'text-green-400'">{{ site.type.toUpperCase() }}</span>
          </td>
          <td class="px-4 py-2 border border-slate-700">{{ formatDate(site.created_at) }}</td>
          <td class="px-4 py-2 border border-slate-700">
            <span
                :class="{
                'text-yellow-400': site.status === 'pending',
                'text-green-400': site.status === 'active',
                'text-red-400': site.status === 'rejected'
                }"
            >
                {{ site.status }}
            </span>
        </td>
          <td class="px-4 py-2 border border-slate-700 space-x-2">
            <router-link
              :to="`/prezentacije/${site.slug}`"
              class="text-sm bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white"
            >👁 Pregled</router-link>

            <router-link
              :to="`/edit-site/${site.slug}`"
              class="text-sm bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded text-white"
            >✏️ Uredi</router-link>

            <button
            v-if="site.status === 'pending'"
            @click="approveSite(site.slug)"
            class="text-sm bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-white"
            >
            ✅ Odobri
            </button>

            <button
              @click="deleteSite(site.slug)"
              class="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white"
            >🗑 Obriši</button>
          </td>
        </tr>
      </tbody>
    </table>

    <p v-if="sites.length === 0" class="text-slate-400 mt-6 text-center">Nema unetih prezentacija.</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminSites',
  data() {
    return {
      sites: []
    }
  },
  async mounted() {
    const token = localStorage.getItem('token')
    try {
      const res = await axios.get('http://localhost:8080/api/all-site-requests', {
        headers: { Authorization: `Bearer ${token}` }
      })
      this.sites = res.data
    } catch (error) {
      console.error('❌ Greška pri učitavanju sajtova:', error)
    }
  },
  async approveSite(slug) {
  const token = localStorage.getItem('token')
  try {
    await axios.patch(`http://localhost:8080/api/free-site-request/${slug}/status`, {
      status: 'active'
    }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    const site = this.sites.find(s => s.slug === slug)
    if (site) site.status = 'active'
    alert('✅ Prezentacija je aktivirana.')
  } catch (err) {
    console.error('❌ Greška pri aktivaciji:', err)
  }
},

  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString('sr-RS')
    },
    async deleteSite(slug) {
      if (!confirm('Da li sigurno želite da obrišete ovu prezentaciju?')) return

      const token = localStorage.getItem('token')
      try {
        await axios.delete(`http://localhost:8080/api/free-site-request/${slug}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.sites = this.sites.filter(s => s.slug !== slug)
        alert('🗑 Prezentacija je obrisana.')
      } catch (error) {
        console.error('❌ Greška pri brisanju:', error)
      }
    }
    
  }
}
</script>
