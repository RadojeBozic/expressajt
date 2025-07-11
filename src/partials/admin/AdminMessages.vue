<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">📩 Kontakt poruke</h2>

    <table class="table-auto w-full border border-slate-700 text-sm">
      <thead class="bg-slate-800">
        <tr>
          <th class="border border-slate-700 px-3 py-2">Ime</th>
          <th class="border border-slate-700 px-3 py-2">Email</th>
          <th class="border border-slate-700 px-3 py-2">Poruka</th>
          <th class="border border-slate-700 px-3 py-2">Newsletter</th>
          <th class="border border-slate-700 px-3 py-2">Datum</th>
          <th class="border border-slate-700 px-3 py-2">Akcija</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="msg in messages" :key="msg.id" class="hover:bg-slate-700">
          <td class="border border-slate-700 px-3 py-2">{{ msg.name }}</td>
          <td class="border border-slate-700 px-3 py-2">{{ msg.email }}</td>
          <td class="border border-slate-700 px-3 py-2">{{ msg.message }}</td>
          <td class="border border-slate-700 px-3 py-2">
            <span v-if="msg.newsletter" class="text-green-400">✅</span>
            <span v-else class="text-red-400">❌</span>
          </td>
          <td class="border border-slate-700 px-3 py-2">{{ formatDate(msg.created_at) }}</td>
          <td class="border border-slate-700 px-3 py-2">
            <button @click="deleteMessage(msg.id)" class="px-2 py-1 bg-red-600 text-white rounded text-xs hover:bg-red-700">Obriši</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminMessages',
  data() {
    return {
      messages: []
    }
  },
  async mounted() {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get('http://localhost:8090/api/messages', {
        headers: { Authorization: `Bearer ${token}` }
      })
      this.messages = response.data
    } catch (error) {
      console.error('❌ Greška pri učitavanju poruka:', error)
    }
  },
  methods: {
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleString()
    },
    async deleteMessage(id) {
      const token = localStorage.getItem('token')
      if (!confirm('Obrisati ovu poruku?')) return

      try {
        await axios.delete(`http://localhost:8090/api/messages/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.messages = this.messages.filter(m => m.id !== id)
      } catch (error) {
        console.error('❌ Greška pri brisanju poruke:', error)
      }
    }
  }
}
</script>
