<template>
  <div class="min-h-screen bg-slate-900 text-white p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">✏️ Uredi prezentaciju</h1>
    <div class="text-center text-sm mb-6">
      <span class="inline-block px-3 py-1 rounded-full bg-purple-700">FREE verzija</span>
    </div>

    <form @submit.prevent="submitForm" class="max-w-3xl mx-auto space-y-8">
      <!-- 📇 OPŠTI PODACI -->
      <fieldset class="space-y-4">
        <legend class="text-xl font-semibold text-purple-400 mb-2">📇 Opšti podaci</legend>
        <input v-model="form.name" placeholder="Naziv firme *" required
          class="w-full p-3 rounded-md bg-slate-800 border border-slate-600" />
        <textarea v-model="form.description" rows="3" placeholder="Opis delatnosti *" required
          class="w-full p-3 rounded-md bg-slate-800 border border-slate-600"></textarea>
        <input v-model="form.email" type="email" placeholder="Email *" required
          class="w-full p-3 rounded-md bg-slate-800 border border-slate-600" />
        <input v-model="form.phone" placeholder="Telefon *" required
          class="w-full p-3 rounded-md bg-slate-800 border border-slate-600" />
        <input v-model="form.facebook" placeholder="Facebook"
          class="w-full p-3 rounded-md bg-slate-800 border border-slate-600" />
        <input v-model="form.instagram" placeholder="Instagram"
          class="w-full p-3 rounded-md bg-slate-800 border border-slate-600" />
        <input type="file" @change="e => handleFile(e, 'logo')" class="block mt-2 text-sm" />
      </fieldset>

      <!-- 🎯 HERO -->
      <fieldset class="space-y-4">
        <legend class="text-xl font-semibold text-purple-400 mb-2">🎯 Hero sekcija</legend>
        <input v-model="form.heroTitle" placeholder="Naslov *" required
          class="w-full p-3 rounded-md bg-slate-800 border border-slate-600" />
        <textarea v-model="form.heroSubtitle" rows="2" placeholder="Podnaslov *" required
          class="w-full p-3 rounded-md bg-slate-800 border border-slate-600"></textarea>
        <input type="file" @change="e => handleFile(e, 'heroImage')" class="block mt-2 text-sm" />
      </fieldset>

      <!-- 👥 O NAMA -->
      <fieldset class="space-y-4">
        <legend class="text-xl font-semibold text-purple-400 mb-2">👥 O nama</legend>
        <input v-model="form.aboutTitle" placeholder="Naslov sekcije *" required
          class="w-full p-3 rounded-md bg-slate-800 border border-slate-600" />
        <textarea v-model="form.aboutText" rows="3" placeholder="Opis firme *" required
          class="w-full p-3 rounded-md bg-slate-800 border border-slate-600"></textarea>
        <input type="file" @change="e => handleFile(e, 'aboutImage')" class="block mt-2 text-sm" />
      </fieldset>

      <!-- 🛍️ PONUDA -->
      <fieldset class="space-y-4">
        <legend class="text-xl font-semibold text-purple-400 mb-2">🛍️ Naša ponuda</legend>
        <input v-model="form.offerTitle" placeholder="Naslov ponude (npr. Naše usluge)"
          class="w-full p-3 rounded-md bg-slate-800 border border-slate-600" />
        <div class="space-y-4">
          <div v-for="(item, index) in form.offerItems" :key="index" class="border border-slate-600 p-3 rounded-md space-y-2">
            <input v-model="item.title" placeholder="Naziv stavke (npr. Web dizajn)"
              class="w-full p-3 rounded-md bg-slate-700 border border-slate-500" />
            <input type="file" @change="e => handleOfferImageUpload(e, index)" class="block text-sm" />
            <button type="button" @click="removeItem(index)" v-if="form.offerItems.length > 1"
              class="text-red-400 hover:text-red-600 text-sm">✖ Ukloni stavku</button>
          </div>
          <button type="button" @click="addItem" class="text-sm text-purple-300 hover:text-purple-500">➕ Dodaj stavku</button>
        </div>
      </fieldset>

      <!-- 🎨 ŠABLON -->
      <fieldset class="space-y-4">
        <legend class="text-xl font-semibold text-purple-400 mb-2">🎨 Izbor šablona</legend>
        <select v-model="form.template" required class="w-full p-3 rounded-md bg-slate-800 border border-slate-600">
          <option disabled value="">-- Odaberi šablon --</option>
          <option value="klasicni">🧾 Klasični</option>
          <option value="moderni">✨ Moderni</option>
          <option value="galerija">🖼️ Galerija</option>
          <option value="biznis">🏢 Biznis</option>
          <option value="dark">🌙 Dark mode</option>
        </select>
      </fieldset>

      <!-- CTA dugme -->
      <button type="submit" :disabled="loading"
        class="w-full bg-purple-600 hover:bg-purple-700 py-3 px-4 rounded text-white font-semibold">
        {{ loading ? '⏳ Čuvanje...' : '💾 Sačuvaj izmene' }}
      </button>

      <p v-if="success" class="text-green-400 text-sm">{{ success }}</p>
      <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>
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
      loading: false,
      success: '',
      error: '',
      form: {
        siteType: 'free',
        name: '', description: '', email: '', phone: '',
        facebook: '', instagram: '', logo: null,
        heroTitle: '', heroSubtitle: '', heroImage: null,
        aboutTitle: '', aboutText: '', aboutImage: null,
        offerTitle: '', offerItems: [{ title: '', image: null }],
        template: 'klasicni'
      }
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:8080/api/free-site-request/${this.slug}`)
      const site = res.data

      if (!this.user || (this.user.id !== site.user_id && !['admin', 'superadmin'].includes(this.user.role))) {
        return this.$router.push('/dashboard')
      }

      this.form = {
        ...this.form,
        siteType: site.type,
        name: site.name,
        description: site.description,
        email: site.email,
        phone: site.phone,
        facebook: site.facebook,
        instagram: site.instagram,
        heroTitle: site.hero_title,
        heroSubtitle: site.hero_subtitle,
        aboutTitle: site.about_title,
        aboutText: site.about_text,
        offerTitle: site.offer_title || '',
        template: site.template || 'klasicni',
        offerItems: site.offer_items?.map(item => ({
          title: item.title,
          image: null
        })) || [{ title: '', image: null }]
      }
    } catch (err) {
      this.error = '⚠️ Greška pri učitavanju podataka.'
      console.error(err)
    }
  },
  methods: {
    handleFile(e, field) {
      const file = e.target.files[0]
      if (file) this.form[field] = file
    },
    handleOfferImageUpload(e, index) {
      const file = e.target.files[0]
      if (file && (!file.type.startsWith('image/') || file.size > 4 * 1024 * 1024)) {
        this.error = `⚠️ Slika u stavci ${index + 1} nije validna ili je prevelika.`
        this.form.offerItems[index].image = null
        return
      }
      this.form.offerItems[index].image = file
    },
    addItem() {
      if (this.form.offerItems.length < 10) {
        this.form.offerItems.push({ title: '', image: null })
      }
    },
    removeItem(index) {
      this.form.offerItems.splice(index, 1)
    },
    async submitForm() {
      this.success = ''
      this.error = ''
      this.loading = true

      try {
        const fd = new FormData()
        const token = localStorage.getItem('token')

        Object.entries(this.form).forEach(([key, value]) => {
          if (key !== 'offerItems' && value !== null && typeof value !== 'undefined') {
            fd.append(key, value)
          }
        })

        fd.append('offerTitle', this.form.offerTitle)
        this.form.offerItems.forEach((item, i) => {
          fd.append(`offerItems[${i}][title]`, item.title)
          if (item.image) {
            fd.append(`offerItems[${i}][image]`, item.image)
          }
        })

        const response = await axios.post(`http://localhost:8080/api/free-site-request/${this.slug}?_method=PUT`, fd, {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'multipart/form-data'
  }
})

this.success = '✅ Prezentacija je uspešno sačuvana. Preusmeravanje...'

setTimeout(() => {
  this.$router.push(`/prezentacije/${response.data.slug}`)
}, 1500)
      } catch (err) {
        console.error(err)
        if (err.response?.status === 422 && err.response.data?.errors) {
          const errors = Object.values(err.response.data.errors).flat()
          this.error = errors.join(', ')
        } else {
          this.error = '⚠️ Greška pri čuvanju.'
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
