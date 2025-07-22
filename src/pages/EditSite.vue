<template>
  <div class="min-h-screen bg-slate-900 text-white p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">✏️ Uredi prezentaciju</h1>

    <form @submit.prevent="submitForm" class="max-w-3xl mx-auto space-y-6">
      <!-- OPŠTI PODACI -->
      <fieldset>
        <legend class="text-xl font-semibold text-purple-400 mb-4">📇 Opšti podaci</legend>
        <input v-model="form.name" placeholder="Naziv firme *" required class="input" />
        <textarea v-model="form.description" rows="3" placeholder="Opis delatnosti *" required class="textarea"></textarea>
        <input v-model="form.email" type="email" placeholder="Email *" required class="input" />
        <input v-model="form.phone" placeholder="Telefon *" required class="input" />
        <input v-model="form.facebook" placeholder="Facebook" class="input" />
        <input v-model="form.instagram" placeholder="Instagram" class="input" />
        <input type="file" @change="e => handleFile(e, 'logo')" />
      </fieldset>

      <!-- HERO -->
      <fieldset>
        <legend class="text-xl font-semibold text-purple-400 mb-4">🎯 Hero sekcija</legend>
        <input v-model="form.heroTitle" placeholder="Naslov *" required class="input" />
        <textarea v-model="form.heroSubtitle" rows="2" placeholder="Podnaslov *" required class="textarea"></textarea>
        <input type="file" @change="e => handleFile(e, 'heroImage')" />
      </fieldset>

      <!-- O NAMA -->
      <fieldset>
        <legend class="text-xl font-semibold text-purple-400 mb-4">👥 O nama</legend>
        <input v-model="form.aboutTitle" placeholder="Naslov sekcije *" required class="input" />
        <textarea v-model="form.aboutText" rows="3" placeholder="Opis firme *" required class="textarea"></textarea>
        <input type="file" @change="e => handleFile(e, 'aboutImage')" />
      </fieldset>

      <!-- PDF i VIDEO -->
      <fieldset>
        <legend class="text-xl font-semibold text-purple-400 mb-4">📎 Dodatni sadržaj</legend>
        <input type="file" @change="e => handleFile(e, 'pdf_file')" accept="application/pdf" />
        <input v-model="form.video_url" placeholder="YouTube link" class="input" />
      </fieldset>

      <!-- KONTAKT -->
      <fieldset>
        <legend class="text-xl font-semibold text-purple-400 mb-4">📬 Kontakt</legend>
        <input v-model="form.address_city" placeholder="Grad" class="input" />
        <input v-model="form.address_street" placeholder="Ulica i broj" class="input" />
        <input v-model="form.google_map_link" placeholder="Google Maps link" class="input" />
        <input v-model="form.phone2" placeholder="Telefon 2" class="input" />
        <input v-model="form.phone3" placeholder="Telefon 3" class="input" />
        <input v-model="form.email2" placeholder="Email 2" class="input" />
        <input v-model="form.email3" placeholder="Email 3" class="input" />
      </fieldset>

      <!-- CTA -->
      <button type="submit" :disabled="loading" class="w-full bg-purple-600 hover:bg-purple-700 py-3 px-4 rounded text-white font-semibold">
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
        name: '', description: '', email: '', phone: '',
        facebook: '', instagram: '', logo: null,
        heroTitle: '', heroSubtitle: '', heroImage: null,
        aboutTitle: '', aboutText: '', aboutImage: null,
        pdf_file: null, video_url: '',
        address_city: '', address_street: '', google_map_link: '',
        phone2: '', phone3: '', email2: '', email3: ''
      }
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:8090/api/free-site-request/${this.slug}`)
      const site = res.data

      if (!this.user || (this.user.id !== site.user_id && this.user.role !== 'admin' && this.user.role !== 'superadmin')) {
        return this.$router.push('/dashboard')
      }

      // Prebaci podatke iz baze u formu
      this.form = {
        ...this.form,
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
        video_url: site.video_url || '',
        address_city: site.address?.split(',')[1]?.trim() || '',
        address_street: site.address?.split(',')[0]?.trim() || '',
        google_map_link: site.google_map_link || '',
        phone2: site.phone2 || '',
        phone3: site.phone3 || '',
        email2: site.email2 || '',
        email3: site.email3 || ''
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
    async submitForm() {
      this.success = ''
      this.error = ''
      this.loading = true

      try {
        const fd = new FormData()
        const token = localStorage.getItem('token')

        // Mapiranje
        fd.append('name', this.form.name)
        fd.append('description', this.form.description)
        fd.append('email', this.form.email)
        fd.append('phone', this.form.phone)
        fd.append('facebook', this.form.facebook)
        fd.append('instagram', this.form.instagram)
        fd.append('heroTitle', this.form.heroTitle)
        fd.append('heroSubtitle', this.form.heroSubtitle)
        fd.append('aboutTitle', this.form.aboutTitle)
        fd.append('aboutText', this.form.aboutText)
        fd.append('video_url', this.form.video_url)
        fd.append('google_map_link', this.form.google_map_link)
        fd.append('address_city', this.form.address_city)
        fd.append('address_street', this.form.address_street)
        fd.append('phone2', this.form.phone2)
        fd.append('phone3', this.form.phone3)
        fd.append('email2', this.form.email2)
        fd.append('email3', this.form.email3)

        // Fajlovi (ako postoje)
        if (this.form.logo) fd.append('logo', this.form.logo)
        if (this.form.heroImage) fd.append('heroImage', this.form.heroImage)
        if (this.form.aboutImage) fd.append('aboutImage', this.form.aboutImage)
        if (this.form.pdf_file) fd.append('pdf_file', this.form.pdf_file)

        // Ponuda ne uključena u ovom primeru — može se proširiti

        await axios.post(`http://localhost:8090/api/free-site-request/${this.slug}?_method=PUT`, fd, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })

        this.success = '✅ Prezentacija je uspešno sačuvana.'
      } catch (err) {
        console.error(err)
        this.error = '⚠️ Greška pri čuvanju.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.input {
  @apply w-full p-2 rounded bg-slate-800 border border-slate-600;
}
.textarea {
  @apply w-full p-2 rounded bg-slate-800 border border-slate-600;
}
</style>
