<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <div class="min-h-screen bg-slate-900 text-white py-10 px-4 flex flex-col items-center">
      <h1 class="text-3xl font-bold mb-6 text-center mt-8">🚀 {{ $t('proform.title') }}</h1>
      <p class="text-slate-400 mb-8 text-center max-w-2xl text-sm">
        {{ $t('proform.note') }} <span class="text-red-400">*</span>
      </p>

      <form @submit.prevent="submitForm" class="bg-slate-800 p-6 rounded-lg shadow max-w-3xl w-full space-y-6">
        
        <!-- 📇 OPŠTI PODACI -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">📇 {{ $t('proform.sections.general') }}</legend>
          <div class="space-y-4">
            <input v-model="form.name" required maxlength="255" :placeholder="$t('proform.fields.name')" class="input" />
            <textarea v-model="form.description" required maxlength="1000" :placeholder="$t('proform.fields.description')" rows="3" class="input" />
            <input type="email" v-model="form.email" required :placeholder="$t('proform.fields.email')" class="input" />
            <input v-model="form.phone" required maxlength="50" :placeholder="$t('proform.fields.phone')" class="input" />
            <input v-model="form.facebook" maxlength="255" :placeholder="$t('proform.fields.facebook')" class="input" />
            <input v-model="form.instagram" maxlength="255" :placeholder="$t('proform.fields.instagram')" class="input" />
            <label class="block text-sm mb-1">{{ $t('proform.fields.logo') }}</label>
            <input type="file" accept="image/*" @change="e => handleFile(e, 'logo')" />
          </div>
        </fieldset>

        <!-- 🎯 HERO -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">🎯 {{ $t('proform.sections.hero') }}</legend>
          <div class="space-y-4">
            <label>{{ $t('proform.fields.heroImage') }} <span class="text-red-400">*</span></label>
            <input type="file" required accept="image/*" @change="e => handleFile(e, 'heroImage')" />
            <input v-model="form.heroTitle" required maxlength="255" :placeholder="$t('proform.fields.heroTitle')" class="input" />
            <textarea v-model="form.heroSubtitle" required maxlength="250" :placeholder="$t('proform.fields.heroSubtitle')" rows="3" class="input" />
          </div>
        </fieldset>

        <!-- 👥 O NAMA -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">👥 {{ $t('proform.sections.about') }}</legend>
          <div class="space-y-4">
            <label>{{ $t('proform.fields.aboutImage') }} <span class="text-red-400">*</span></label>
            <input type="file" required accept="image/*" @change="e => handleFile(e, 'aboutImage')" />
            <input v-model="form.aboutTitle" required maxlength="255" :placeholder="$t('proform.fields.aboutTitle')" class="input" />
            <textarea v-model="form.aboutText" required maxlength="1000" :placeholder="$t('proform.fields.aboutText')" rows="4" class="input" />
          </div>
        </fieldset>

        <!-- 🛍️ NAŠA PONUDA -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">🛍️ {{ $t('proform.sections.offer') }}</legend>
          <div class="space-y-4">
            <input v-model="form.offerTitle" required maxlength="255" :placeholder="$t('proform.fields.offerTitle')" class="input" />
            <div class="space-y-2">
              <div v-for="(item, index) in form.offerItems" :key="index" class="space-y-2 border border-slate-600 p-3 rounded">
                <input v-model="item.title" required maxlength="255" :placeholder="$t('proform.fields.offerItemTitle')" class="input" />
                <input type="file" required accept="image/*" @change="e => handleOfferImageUpload(e, index)" />
                <button v-if="form.offerItems.length > 1" type="button" @click="removeItem(index)" class="text-red-400 text-sm hover:text-red-600">
                  {{ $t('proform.fields.remove') }}
                </button>
              </div>
              <button type="button" @click="addItem" class="text-sm text-purple-300 hover:text-purple-500">
                {{ $t('proform.fields.addOffer') }}
              </button>
            </div>
          </div>
        </fieldset>

        <!-- 📎 DODATNI SADRŽAJ -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">📎 {{ $t('proform.sections.extra') }}</legend>
          <div class="space-y-4">
            <label>{{ $t('proform.fields.pdfDocument') }}</label>
            <input type="file" accept="application/pdf" @change="e => handleFile(e, 'pdfDocument')" />
            <input v-model="form.youtubeLink" maxlength="255" :placeholder="$t('proform.fields.youtube')" class="input" />
          </div>
        </fieldset>

        <!-- 📬 KONTAKT PODACI -->
        <fieldset>
          <legend class="text-xl font-semibold text-purple-400 mb-4">📬 {{ $t('proform.sections.contact') }}</legend>
          <div class="space-y-4">
            <input v-model="form.address_city" required maxlength="255" :placeholder="$t('proform.fields.city')" class="input" />
            <input v-model="form.address_street" required maxlength="255" :placeholder="$t('proform.fields.street')" class="input" />
            <input v-model="form.google_map_link" maxlength="255" :placeholder="$t('proform.fields.map')" class="input" />
            <input v-model="form.phone2" maxlength="50" :placeholder="$t('proform.fields.phone2')" class="input" />
            <input v-model="form.phone3" maxlength="50" :placeholder="$t('proform.fields.phone3')" class="input" />
            <input v-model="form.email2" maxlength="255" :placeholder="$t('proform.fields.email2')" class="input" />
            <input v-model="form.email3" maxlength="255" :placeholder="$t('proform.fields.email3')" class="input" />
          </div>
        </fieldset>

        <!-- ŠABLON -->
        <div>
          <label class="block mb-1">{{ $t('proform.sections.template') }} *</label>
          <select v-model="form.template" required class="input">
            <option value="klasicni-pro">{{ $t('proform.templates.classic') }}</option>
            <option value="moderni-pro">{{ $t('proform.templates.modern') }}</option>
            <option value="galerija-pro">{{ $t('proform.templates.gallery') }}</option>
            <option value="biznis-pro">{{ $t('proform.templates.biznis') }}</option>
            <option value="dark-pro">{{ $t('proform.templates.dark') }}</option>
          </select>
        </div>

        <!-- CTA -->
        <button type="submit" :disabled="loading" class="w-full bg-purple-600 hover:bg-purple-700 py-3 px-4 rounded text-white font-semibold">
          {{ loading ? $t('proform.loading') : $t('proform.submit') }}
        </button>

        <p v-if="successMessage" class="text-green-400 text-sm mt-4">{{ $t('proform.success') }}</p>
        <p v-if="errorMessage" class="text-red-400 text-sm mt-4">{{ $t('proform.error') }}</p>

        <p v-if="resData?.slug" class="text-blue-400 text-sm mt-2">
          {{ $t('proform.preview') }}
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
import { useRoute } from 'vue-router'

export default {
  name: 'ProSiteForm',
  components: { Header, Footer },
  data() {
    return {
      loading: false,
      resData: null,
      route: useRoute(),
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
  mounted() {
    const slug = this.route.query.fromSlug
    if (slug) this.fetchFromSlug(slug)
  },
  methods: {
    
    addItem() {
      if (this.form.offerItems.length < 12)
        this.form.offerItems.push({ title: '', image: null })
    },
    removeItem(i) {
      this.form.offerItems.splice(i, 1)
    },
    handleFile(e, field) {
      const file = e.target.files[0]
      if (!file) return

      if (field !== 'pdfDocument' && (!file.type.startsWith('image/') || file.size > 4 * 1024 * 1024)) {
        this.errorMessage = this.$t('proform.errors.image')
        this.form[field] = null
        return
      }

      if (field === 'pdfDocument' && file.type !== 'application/pdf') {
        this.errorMessage = this.$t('proform.errors.pdf')
        this.form[field] = null
        return
      }

      this.form[field] = file
      this.errorMessage = ''
    },
    handleOfferImageUpload(e, i) {
      const file = e.target.files[0]
      if (!file || !file.type.startsWith('image/') || file.size > 4 * 1024 * 1024) {
        this.errorMessage = this.$t('proform.errors.offerImage', { index: i + 1 })
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
        fd.append('type', 'pro')

        const textFields = [
          'name', 'description', 'email', 'phone', 'facebook', 'instagram',
          'heroTitle', 'heroSubtitle', 'aboutTitle', 'aboutText', 'offerTitle',
          'youtubeLink', 'google_map_link', 'address_city', 'address_street',
          'phone2', 'phone3', 'email2', 'email3', 'template'
        ]

        textFields.forEach(field => {
          const key = field === 'youtubeLink' ? 'video_url' : field
          fd.append(key, this.form[field] || '')
        })

        if (this.form.logo) fd.append('logo', this.form.logo)
        if (this.form.heroImage) fd.append('heroImage', this.form.heroImage)
        if (this.form.aboutImage) fd.append('aboutImage', this.form.aboutImage)
        if (this.form.pdfDocument) fd.append('pdf_file', this.form.pdfDocument)

        this.form.offerItems.forEach((item, i) => {
          fd.append(`offerItems[${i}][title]`, item.title)
          fd.append(`offerItems[${i}][image]`, item.image)
        })

        const res = await axios.post('http://localhost:8080/api/free-site-request', fd, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })

        
        this.errorMessage = this.$t('proform.errors.general')

        this.successMessage = this.$t('proform.success')
        this.resData = res.data

      } catch (err) {
        console.error('❌', err.response || err)
        this.errorMessage = err.response?.data?.message || this.$t('proform.errors.general')
      } finally {
        this.loading = false
      }
    },
    async fetchFromSlug(slug) {
      try {
        const res = await axios.get(`http://localhost:8080/api/free-site-request/${slug}`)
        const source = res.data

        this.form.name = source.name + ' (kopija)'
        this.form.description = source.description
        this.form.email = source.email
        this.form.phone = source.phone
        this.form.facebook = source.facebook
        this.form.instagram = source.instagram
        this.form.heroTitle = source.hero_title
        this.form.heroSubtitle = source.hero_subtitle
        this.form.aboutTitle = source.about_title
        this.form.aboutText = source.about_text
        this.form.offerTitle = source.offer_title
        this.form.offerItems = source.offer_items.map(item => ({
          title: item.title,
          image: null
        }))
        this.form.youtubeLink = source.video_url || ''
        this.form.address_city = (source.address || '').split(',')[1]?.trim() || ''
        this.form.address_street = (source.address || '').split(',')[0]?.trim() || ''
        this.form.google_map_link = source.google_map_link || ''
        this.form.phone2 = source.phone2 || ''
        this.form.phone3 = source.phone3 || ''
        this.form.email2 = source.email2 || ''
        this.form.email3 = source.email3 || ''
        this.form.template = source.template

      } catch (err) {
        console.error('❌', err)
        this.errorMessage = this.$t('proform.errors.fetch')
      }
    }
  }
}
</script>
