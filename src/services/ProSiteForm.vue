<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <div class="min-h-screen bg-slate-900 text-white py-10 px-4 flex flex-col items-center">
      <h1 class="text-3xl font-bold mb-6 text-center mt-8">🚀 Napredna PRO prezentacija</h1>
      <p class="text-slate-400 mb-8 text-center max-w-2xl text-sm">
        Polja označena zvezdicom (<span class="text-red-400">*</span>) su obavezna. Unesite tačne informacije, uključujući slike i linkove.
      </p>

      <form @submit.prevent="submitForm" class="bg-slate-800 p-6 rounded-lg shadow max-w-3xl w-full space-y-6">
        <!-- 📇 OPŠTI PODACI -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">📇 Opšti podaci</legend>
          <div class="space-y-4">
            <input v-model="form.name" required maxlength="255" placeholder="Naziv firme *" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <textarea v-model="form.description" required maxlength="1000" placeholder="Opis delatnosti *" rows="3" class="w-full p-2 rounded bg-slate-700 border border-slate-600"></textarea>
            <input type="email" v-model="form.email" required placeholder="Email adresa *" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.phone" required maxlength="50" placeholder="Telefon *" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.facebook" maxlength="255" placeholder="Facebook link" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.instagram" maxlength="255" placeholder="Instagram link" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <label class="block text-sm mb-1">Logotip (opciono)</label>
            <input type="file" accept="image/*" @change="e => handleFile(e, 'logo')" />
          </div>
        </fieldset>

        <!-- 🎯 HERO -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">🎯 Hero sekcija</legend>
          <div class="space-y-4">
            <label>Glavna slika (pozadina) <span class="text-red-400">*</span></label>
            <input type="file" required accept="image/*" @change="e => handleFile(e, 'heroImage')" />
            <input v-model="form.heroTitle" required maxlength="255" placeholder="Naslov *" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <textarea v-model="form.heroSubtitle" required maxlength="250" placeholder="Podnaslov *" rows="3" class="w-full p-2 rounded bg-slate-700 border border-slate-600"></textarea>
          </div>
        </fieldset>

        <!-- 👥 O NAMA -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">👥 O nama</legend>
          <div class="space-y-4">
            <label>Slika firme/tima <span class="text-red-400">*</span></label>
            <input type="file" required accept="image/*" @change="e => handleFile(e, 'aboutImage')" />
            <input v-model="form.aboutTitle" required maxlength="255" placeholder="Naslov sekcije *" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <textarea v-model="form.aboutText" required maxlength="1000" placeholder="Opis firme *" rows="4" class="w-full p-2 rounded bg-slate-700 border border-slate-600"></textarea>
          </div>
        </fieldset>

        <!-- 🛍️ NAŠA PONUDA -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">🛍️ Naša ponuda</legend>
          <div class="space-y-4">
            <input v-model="form.offerTitle" required maxlength="255" placeholder="Naslov sekcije *" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <div class="space-y-2">
              <div v-for="(item, index) in form.offerItems" :key="index" class="space-y-2 border border-slate-600 p-3 rounded">
                <input v-model="item.title" required maxlength="255" placeholder="Naziv usluge/proizvoda *" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
                <input type="file" required accept="image/*" @change="e => handleOfferImageUpload(e, index)" />
                <button v-if="form.offerItems.length > 1" type="button" @click="removeItem(index)" class="text-red-400 text-sm hover:text-red-600">✖ Ukloni</button>
              </div>
              <button type="button" @click="addItem" class="text-sm text-purple-300 hover:text-purple-500">➕ Dodaj stavku</button>
            </div>
          </div>
        </fieldset>

        <!-- 📎 DODATNI SADRŽAJ -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">📎 Dodatni sadržaj</legend>
          <div class="space-y-4">
            <label>PDF dokument (cenovnik, ponuda)</label>
            <input type="file" accept="application/pdf" @change="e => handleFile(e, 'pdfDocument')" />
            <input v-model="form.youtubeLink" maxlength="255" placeholder="YouTube link (opciono)" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
          </div>
        </fieldset>

        <!-- 📬 KONTAKT PODACI -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">📬 Kontakt podaci</legend>
          <div class="space-y-4">
            <input v-model="form.address_city" required maxlength="255" placeholder="Mesto *" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.address_street" required maxlength="255" placeholder="Ulica i broj *" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.google_map_link" maxlength="255" placeholder="Google Maps link (opciono)" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.phone2" maxlength="50" placeholder="Dodatni telefon" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.phone3" maxlength="50" placeholder="Još jedan telefon" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.email2" maxlength="255" placeholder="Dodatni email" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.email3" maxlength="255" placeholder="Još jedan email" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
          </div>
        </fieldset>

        <!-- ŠABLON -->
        <div>
          <label class="block mb-1">Izaberi šablon *</label>
          <select v-model="form.template" required class="w-full p-2 rounded bg-slate-700 border border-slate-600">
            <option value="klasicni-pro">🧾 Klasični</option>
            <option value="moderni-pro">✨ Moderni</option>
            <option value="galerija-pro">🖼️ Galerija</option>
            <option value="biznis-pro">🏢 Biznis</option>
            <option value="dark-pro">🌙 Dark mode</option>
          </select>
        </div>

        <!-- CTA -->
        <button type="submit" :disabled="loading" class="w-full bg-purple-600 hover:bg-purple-700 py-3 px-4 rounded text-white font-semibold">
          {{ loading ? '⏳ Slanje...' : '✅ Pošalji zahtev' }}
        </button>

        <p v-if="successMessage" class="text-green-400 text-sm mt-4">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-red-400 text-sm mt-4">{{ errorMessage }}</p>

         <p v-if="resData?.slug" class="text-blue-400 text-sm mt-2">
            📎 Otvori prezentaciju: 
            <a :href="`/prezentacije/${resData.slug}`" class="underline" target="_blank">{{ resData.slug }}</a>
        </p>
      </form>
       
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'ProSiteForm',
  components: { Header, Footer },
  data() {
    return {
      loading: false,
      resData: null,
      form: {
        name: '', description: '', email: '', phone: '',
        facebook: '', instagram: '', logo: null,
        heroTitle: '', heroSubtitle: '', heroImage: null,
        aboutTitle: '', aboutText: '', aboutImage: null,
        offerTitle: '', offerItems: [{ title: '', image: null }],
        pdfDocument: null, youtubeLink: '',
        address_city: '', address_street: '', google_map_link: '',
        phone2: '', phone3: '', email2: '', email3: '',
        template: localStorage.getItem('selectedTemplate') || 'klasicni-pro'
      },
      successMessage: '', errorMessage: ''
    }
  },
  methods: {
    addItem() {
      if (this.form.offerItems.length < 12) this.form.offerItems.push({ title: '', image: null })
    },
    removeItem(i) {
      this.form.offerItems.splice(i, 1)
    },
    handleFile(e, field) {
      const file = e.target.files[0]
      if (!file) return
      if (field !== 'pdfDocument' && (!file.type.startsWith('image/') || file.size > 4 * 1024 * 1024)) {
        this.errorMessage = '⚠️ Slika mora biti manja od 4MB i validnog formata.'
        this.form[field] = null
        return
      }
      if (field === 'pdfDocument' && file.type !== 'application/pdf') {
        this.errorMessage = '⚠️ Dozvoljen je samo PDF dokument.'
        this.form[field] = null
        return
      }
      this.form[field] = file
      this.errorMessage = ''
    },
    handleOfferImageUpload(e, i) {
      const file = e.target.files[0]
      if (!file || !file.type.startsWith('image/') || file.size > 4 * 1024 * 1024) {
        this.errorMessage = `⚠️ Slika u stavci ${i + 1} nije validna ili je prevelika.`
        this.form.offerItems[i].image = null
        return
      }
      this.form.offerItems[i].image = file
      this.errorMessage = ''
    },
  async submitForm() {
  this.successMessage = ''
  this.errorMessage = ''
  this.loading = true
  this.resData = null

  try {
    const fd = new FormData()

    // Tip paketa (free/pro)
    fd.append('type', 'pro')

    // ✔ Opšti podaci
    fd.append('name', this.form.name)
    fd.append('description', this.form.description)
    fd.append('email', this.form.email)
    fd.append('phone', this.form.phone)
    fd.append('facebook', this.form.facebook)
    fd.append('instagram', this.form.instagram)
    fd.append('template', this.form.template)

    // ✔ Fajlovi (logotip, hero, about)
    if (this.form.logo) fd.append('logo', this.form.logo)
    if (this.form.heroImage) fd.append('heroImage', this.form.heroImage)
    if (this.form.aboutImage) fd.append('aboutImage', this.form.aboutImage)

    // ✔ Hero sekcija
    fd.append('heroTitle', this.form.heroTitle)
    fd.append('heroSubtitle', this.form.heroSubtitle)

    // ✔ O nama
    fd.append('aboutTitle', this.form.aboutTitle)
    fd.append('aboutText', this.form.aboutText)

    // ✔ Ponuda
    fd.append('offerTitle', this.form.offerTitle)
    this.form.offerItems.forEach((item, i) => {
      fd.append(`offerItems[${i}][title]`, item.title)
      fd.append(`offerItems[${i}][image]`, item.image)
    })

    // ✔ PRO dodatni sadržaj
    if (this.form.pdfDocument) fd.append('pdf_file', this.form.pdfDocument)
    fd.append('video_url', this.form.youtubeLink || '')
    fd.append('google_map_link', this.form.google_map_link || '')
    fd.append('address_city', this.form.address_city || '')
    fd.append('address_street', this.form.address_street || '')
    fd.append('phone2', this.form.phone2 || '')
    fd.append('phone3', this.form.phone3 || '')
    fd.append('email2', this.form.email2 || '')
    fd.append('email3', this.form.email3 || '')

    // 📤 Slanje
    const res = await axios.post('http://localhost:8090/api/free-site-request', fd, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })

    this.successMessage = '✅ Zahtev uspešno poslat!'
    this.resData = res.data
  } catch (err) {
    console.error('❌', err.response || err)
    this.errorMessage = err.response?.data?.message || '⚠️ Nešto je pošlo po zlu. Pokušajte ponovo.'
  } finally {
    this.loading = false
  }
}

  }
}
</script>
