<template>
  <div class="min-h-screen bg-slate-900 text-white p-6">
    <h1 class="text-3xl font-bold mb-4">✏️ Uredi prezentaciju</h1>

    <form @submit.prevent="submitForm" class="space-y-6 max-w-3xl mx-auto">
      <!-- Ime firme -->
      <input v-model="form.name" required placeholder="Naziv firme *" class="w-full p-2 rounded bg-slate-800 border border-slate-600" />

      <!-- Opis firme -->
      <textarea v-model="form.description" required placeholder="Opis firme *" class="w-full p-2 rounded bg-slate-800 border border-slate-600" rows="3"></textarea>

      <!-- Telefon -->
      <input v-model="form.phone" required placeholder="Telefon *" class="w-full p-2 rounded bg-slate-800 border border-slate-600" />

      <!-- Facebook i Instagram -->
      <input v-model="form.facebook" required placeholder="Facebook link *" class="w-full p-2 rounded bg-slate-800 border border-slate-600" />
      <input v-model="form.instagram" required placeholder="Instagram link *" class="w-full p-2 rounded bg-slate-800 border border-slate-600" />

      <!-- Logotip -->
      <div>
        <label class="block mb-1">Logotip (opciono)</label>
        <input type="file" @change="e => handleFile(e, 'logo')" />
      </div>

      <!-- Hero naslov i podnaslov -->
      <input v-model="form.heroTitle" required placeholder="Naslov hero sekcije *" class="w-full p-2 rounded bg-slate-800 border border-slate-600" />
      <textarea v-model="form.heroSubtitle" required placeholder="Podnaslov hero sekcije *" class="w-full p-2 rounded bg-slate-800 border border-slate-600" rows="2"></textarea>

      <!-- Hero slika -->
      <div>
        <label class="block mb-1">Hero slika (opciono – zameni postojeću)</label>
        <input type="file" @change="e => handleFile(e, 'heroImage')" />
      </div>

      <!-- CTA -->
      <button :disabled="loading" class="w-full bg-purple-600 hover:bg-purple-700 py-3 px-4 rounded text-white font-semibold">
        {{ loading ? '⏳ Čuvanje...' : '💾 Sačuvaj izmene' }}
      </button>

      <p v-if="successMessage" class="text-green-400 text-sm mt-4">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-red-400 text-sm mt-4">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { getCurrentUser } from '../utils/auth'

export default {
  name: 'EditSite',
  props: ['slug'],
  data() {
    return {
      user: getCurrentUser(),
      form: {
        name: '',
        description: '',
        phone: '',
        facebook: '',
        instagram: '',
        logo: null,
        heroTitle: '',
        heroSubtitle: '',
        heroImage: null,
      },
      loading: false,
      successMessage: '',
      errorMessage: ''
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:8090/api/free-site-request/${this.slug}`)
      const site = res.data

      if (!this.user || (this.user.id !== site.user_id && this.user.role !== 'admin' && this.user.role !== 'superadmin')) {
        this.$router.push('/dashboard')
        return
      }

      this.form.name = site.name
      this.form.description = site.description
      this.form.phone = site.phone
      this.form.facebook = site.facebook
      this.form.instagram = site.instagram
      this.form.heroTitle = site.hero_title
      this.form.heroSubtitle = site.hero_subtitle
    } catch (err) {
      console.error('❌ Greška pri učitavanju podataka:', err)
      this.errorMessage = 'Neuspešno učitavanje prezentacije.'
    }
  },
  methods: {
    handleFile(e, field) {
      const file = e.target.files[0]
      if (file) this.form[field] = file
    },
    async submitForm() {
      this.loading = true
      this.successMessage = ''
      this.errorMessage = ''

      try {
        const formData = new FormData()
        for (const key in this.form) {
          formData.append(key, this.form[key])
        }

        const token = localStorage.getItem('token')
        await axios.put(`http://localhost:8090/api/free-site-request/${this.slug}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })

        this.successMessage = '✅ Izmene su sačuvane.'
      } catch (err) {
        console.error('❌ Greška pri čuvanju:', err)
        this.errorMessage = 'Greška pri čuvanju izmena. Proverite unos.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
