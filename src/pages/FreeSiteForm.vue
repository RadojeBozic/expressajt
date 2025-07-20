<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <div class="min-h-screen bg-slate-900 text-white py-10 px-4 flex flex-col items-center">
      <h1 class="text-3xl font-bold mb-6 text-center mt-8">🖥️ Jednim klikom do sajta</h1>
      <p class="text-slate-400 mb-8 text-center max-w-2xl text-sm">
        Molimo vas da pažljivo popunite sva polja. Svaki unos je obavezan (osim logotipa), kako bismo mogli generisati kompletnu i profesionalnu prezentaciju. Format slika: JPG/PNG/WebP do 4MB. Ukoliko pokušate da otpremite veću sliku, biće odbijena.
      </p>

      <form @submit.prevent="submitForm" class="bg-slate-800 p-6 rounded-lg shadow max-w-3xl w-full space-y-6">
        <!-- 📇 OPŠTI PODACI -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">📇 Opšti podaci</legend>
          <div class="space-y-4">
            <input v-model="form.name" required maxlength="255" placeholder="Npr. Pekara Jovanović" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <textarea v-model="form.description" required maxlength="1000" placeholder="Kratak opis firme (max 1000 karaktera)" class="w-full p-2 rounded bg-slate-700 border border-slate-600" rows="3"></textarea>
            <input type="email" v-model="form.email" required placeholder="kontakt@firma.rs" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.phone" required pattern=".{5,50}" placeholder="+381 64 123 4567" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.facebook" required placeholder="https://facebook.com/profil" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <input v-model="form.instagram" required placeholder="https://instagram.com/profil" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />

            <label class="block text-sm mb-1">Logotip (opciono)</label>
            <input type="file" accept="image/*" @change="e => handleImageFile(e, 'logo')" class="block" />
          </div>
        </fieldset>

        <!-- 🎯 HERO -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">🎯 Hero sekcija</legend>
          <div class="space-y-4">
            <label>Glavna slika (pozadina)</label>
            <input type="file" required accept="image/*" @change="e => handleImageFile(e, 'heroImage')" />
            <input v-model="form.heroTitle" required maxlength="255" placeholder="Naslov (npr. Kvalitet iz naše tradicije)" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <textarea v-model="form.heroSubtitle" required maxlength="250" placeholder="Kratak podnaslov (do 250 karaktera)" rows="3" class="w-full p-2 rounded bg-slate-700 border border-slate-600"></textarea>
          </div>
        </fieldset>

        <!-- 👥 O NAMA -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4 mt-6">👥 O nama</legend>
          <div class="space-y-4">
            <label>Fotografija firme ili tima</label>
            <input type="file" required accept="image/*" @change="e => handleImageFile(e, 'aboutImage')" />
            <input v-model="form.aboutTitle" required maxlength="255" placeholder="Naslov sekcije (npr. Ko smo mi)" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <textarea v-model="form.aboutText" required maxlength="1000" placeholder="Detaljniji opis (do 1000 karaktera)" rows="5" class="w-full p-2 rounded bg-slate-700 border border-slate-600"></textarea>
          </div>
        </fieldset>

        <!-- 🛍️ NAŠA PONUDA -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4 mt-6">🛍️ Naša ponuda</legend>
          <div class="space-y-4">
            <input v-model="form.offerTitle" required maxlength="255" placeholder="Naslov sekcije (npr. Naše usluge)" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
            <div class="space-y-2">
              <div v-for="(item, index) in form.offerItems" :key="index" class="space-y-2 border border-slate-600 p-3 rounded">
                <input v-model="item.title" required maxlength="255" placeholder="Npr. Web dizajn" class="w-full p-2 rounded bg-slate-700 border border-slate-600" />
                <input type="file" required accept="image/*" @change="e => handleOfferImageUpload(e, index)" />
                <button v-if="form.offerItems.length > 1" type="button" @click="removeItem(index)" class="text-red-400 hover:text-red-600 text-sm">
                  ✖ Ukloni stavku
                </button>
              </div>
              <button type="button" @click="addItem" class="mt-2 text-sm text-purple-300 hover:text-purple-500">
                ➕ Dodaj stavku
              </button>
            </div>
          </div>
        </fieldset>

        <!-- ŠABLON -->
        <div>
          <label class="block mb-1">Izaberi šablon *</label>
          <select v-model="form.template" required class="w-full p-2 rounded bg-slate-700 border border-slate-600">
            <option value="klasicni">🧾 Klasični</option>
            <option value="moderni">✨ Moderni</option>
            <option value="galerija">🖼️ Galerija</option>
            <option value="biznis">🏢 Biznis</option>
            <option value="dark">🌙 Dark mode</option>
          </select>
        </div>

        <!-- CTA -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-purple-600 hover:bg-purple-700 py-3 px-4 rounded text-white font-semibold"
        >
          {{ loading ? '⏳ Slanje...' : '✅ Pošalji zahtev' }}
        </button>

        <p v-if="successMessage" class="text-green-400 text-sm mt-4">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-red-400 text-sm mt-4">{{ errorMessage }}</p>
      </form>

      <!-- <router-link
        to="/select-template"
        class="mt-8 inline-block bg-white text-purple-700 font-semibold px-4 py-2 rounded hover:bg-slate-100 transition"
      >
        🎨 Vidi šablone
      </router-link> -->
    </div>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'FreeSiteForm',
  components: { Header, Footer },
  data() {
    return {
      loading: false,
      form: {
        name: '',
        description: '',
        email: '',
        phone: '',
        facebook: '',
        instagram: '',
        logo: null,
        heroImage: null,
        heroTitle: '',
        heroSubtitle: '',
        aboutImage: null,
        aboutTitle: '',
        aboutText: '',
        offerTitle: '',
        offerItems: [{ title: '', image: null }],
        template: localStorage.getItem('selectedTemplate') || 'klasicni'
      },
      successMessage: '',
      errorMessage: ''
    }
  },
  methods: {
    addItem() {
      if (this.form.offerItems.length < 10) {
        this.form.offerItems.push({ title: '', image: null })
      }
    },
    removeItem(index) {
      this.form.offerItems.splice(index, 1)
    },
    handleImageFile(e, field) {
      const file = e.target.files[0]
      if (file && (!file.type.startsWith('image/') || file.size > 4 * 1024 * 1024)) {
        this.errorMessage = '⚠️ Slika mora biti manja od 4MB i validan format.'
        this.form[field] = null
        return
      }
      this.form[field] = file
      this.errorMessage = ''
    },
    handleOfferImageUpload(e, index) {
      const file = e.target.files[0]
      if (file && (!file.type.startsWith('image/') || file.size > 4 * 1024 * 1024)) {
        this.errorMessage = `⚠️ Slika u stavci ${index + 1} nije validna ili je prevelika.`
        this.form.offerItems[index].image = null
        return
      }
      this.form.offerItems[index].image = file
      this.errorMessage = ''
    },
    async submitForm() {
      this.successMessage = ''
      this.errorMessage = ''
      this.loading = true

      try {
        const formData = new FormData()
        for (const key in this.form) {
          if (key === 'offerItems') {
            this.form.offerItems.forEach((item, i) => {
              formData.append(`offerItems[${i}][title]`, item.title)
              formData.append(`offerItems[${i}][image]`, item.image)
            })
          } else {
            formData.append(key, this.form[key])
          }
        }

        const res = await axios.post('http://localhost:8090/api/free-site-request', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })

        this.successMessage = '✅ Zahtev uspešno poslat!'
        this.$router.push(`/prezentacije/${res.data.slug}`)
      } catch (err) {
        console.error('❌ Detaljna greška:', err.response || err)
        if (err.response?.data?.errors) {
          const errors = Object.values(err.response.data.errors).flat()
          this.errorMessage = errors[0] || '⚠️ Došlo je do greške u unosu.'
        } else {
          this.errorMessage = '⚠️ Nešto je pošlo po zlu. Pokušajte ponovo.'
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
