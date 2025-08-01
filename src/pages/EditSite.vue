<template>
  <div class="min-h-screen bg-slate-900 text-white p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">✏️ {{ $t('edit.title') }}</h1>
    <div class="text-center text-sm mb-6">
      <span class="inline-block px-3 py-1 rounded-full bg-purple-700">{{ $t('edit.version') }}</span>
    </div>

    <form @submit.prevent="submitForm" class="max-w-3xl mx-auto space-y-8">
      <!-- 📇 OPŠTI PODACI -->
      <fieldset class="space-y-4">
        <legend class="text-xl font-semibold text-purple-400 mb-2">📇 {{ $t('edit.sections.general') }}</legend>
        <input v-model="form.name" :placeholder="$t('edit.fields.name')" required class="input" />
        <textarea v-model="form.description" rows="3" :placeholder="$t('edit.fields.description')" required class="input" />
        <input v-model="form.email" type="email" :placeholder="$t('edit.fields.email')" required class="input" />
        <input v-model="form.phone" :placeholder="$t('edit.fields.phone')" required class="input" />
        <input v-model="form.facebook" :placeholder="$t('edit.fields.facebook')" class="input" />
        <input v-model="form.instagram" :placeholder="$t('edit.fields.instagram')" class="input" />
        <input type="file" @change="e => handleFile(e, 'logo')" class="block mt-2 text-sm" />
      </fieldset>

      <!-- 🎯 HERO -->
      <fieldset class="space-y-4">
        <legend class="text-xl font-semibold text-purple-400 mb-2">🎯 {{ $t('edit.sections.hero') }}</legend>
        <input v-model="form.heroTitle" :placeholder="$t('edit.fields.heroTitle')" required class="input" />
        <textarea v-model="form.heroSubtitle" rows="2" :placeholder="$t('edit.fields.heroSubtitle')" required class="input" />
        <input type="file" @change="e => handleFile(e, 'heroImage')" class="block mt-2 text-sm" />
      </fieldset>

      <!-- 👥 O NAMA -->
      <fieldset class="space-y-4">
        <legend class="text-xl font-semibold text-purple-400 mb-2">👥 {{ $t('edit.sections.about') }}</legend>
        <input v-model="form.aboutTitle" :placeholder="$t('edit.fields.aboutTitle')" required class="input" />
        <textarea v-model="form.aboutText" rows="3" :placeholder="$t('edit.fields.aboutText')" required class="input" />
        <input type="file" @change="e => handleFile(e, 'aboutImage')" class="block mt-2 text-sm" />
      </fieldset>

      <!-- 🛍️ PONUDA -->
      <fieldset class="space-y-4">
        <legend class="text-xl font-semibold text-purple-400 mb-2">🛍️ {{ $t('edit.sections.offer') }}</legend>
        <input v-model="form.offerTitle" :placeholder="$t('edit.fields.offerTitle')" class="input" />
        <div class="space-y-4">
          <div v-for="(item, index) in form.offerItems" :key="index" class="border border-slate-600 p-3 rounded-md space-y-2">
            <input v-model="item.title" :placeholder="$t('edit.fields.offerItemTitle')" class="input bg-slate-700" />
            <input type="file" @change="e => handleOfferImageUpload(e, index)" class="block text-sm" />
            <button type="button" @click="removeItem(index)" v-if="form.offerItems.length > 1" class="text-red-400 hover:text-red-600 text-sm">
              {{ $t('edit.fields.remove') }}
            </button>
          </div>
          <button type="button" @click="addItem" class="text-sm text-purple-300 hover:text-purple-500">
            {{ $t('edit.fields.addOffer') }}
          </button>
        </div>
      </fieldset>

      <!-- 🎨 ŠABLON -->
      <fieldset class="space-y-4">
        <legend class="text-xl font-semibold text-purple-400 mb-2">🎨 {{ $t('edit.sections.template') }}</legend>
        <select v-model="form.template" required class="input">
          <option disabled value="">-- {{ $t('edit.fields.chooseTemplate') }} --</option>
          <option value="klasicni">🧾 {{ $t('edit.templates.classic') }}</option>
          <option value="moderni">✨ {{ $t('edit.templates.modern') }}</option>
          <option value="galerija">🖼️ {{ $t('edit.templates.gallery') }}</option>
          <option value="biznis">🏢 {{ $t('edit.templates.biznis') }}</option>
          <option value="dark">🌙 {{ $t('edit.templates.dark') }}</option>
        </select>
      </fieldset>

      <!-- CTA -->
      <button type="submit" :disabled="loading" class="w-full bg-purple-600 hover:bg-purple-700 py-3 px-4 rounded text-white font-semibold">
        {{ loading ? $t('edit.loading') : $t('edit.submit') }}
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
        name: '',
        description: '',
        email: '',
        phone: '',
        facebook: '',
        instagram: '',
        logo: null,
        heroTitle: '',
        heroSubtitle: '',
        heroImage: null,
        aboutTitle: '',
        aboutText: '',
        aboutImage: null,
        offerTitle: '',
        offerItems: [{ title: '', image: null }],
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
      console.error(err)
      this.error = this.$t('edit.errors.load')
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
        this.error = this.$t('edit.errors.image', { index: index + 1 })
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

        const response = await axios.post(
          `http://localhost:8080/api/free-site-request/${this.slug}?_method=PUT`,
          fd,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          }
        )

        this.success = this.$t('edit.success')

        setTimeout(() => {
          this.$router.push(`/prezentacije/${response.data.slug}`)
        }, 1500)
      } catch (err) {
        console.error(err)
        if (err.response?.status === 422 && err.response.data?.errors) {
          const errors = Object.values(err.response.data.errors).flat()
          this.error = errors.join(', ')
        } else {
          this.error = this.$t('edit.errors.save')
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
