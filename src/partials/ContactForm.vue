<template>
  <section class="bg-slate-900 py-16 px-4 sm:px-6">
    <form @submit.prevent="submitForm" class="max-w-xl mx-auto space-y-4">
      <div>
        <label for="name" class="block text-sm text-slate-300 font-medium mb-1">{{ $t('contact.form.name') }}</label>
        <input id="name" v-model="form.name" class="form-input w-full" type="text" required />
      </div>
      <div>
        <label for="email" class="block text-sm text-slate-300 font-medium mb-1">{{ $t('contact.form.email') }}</label>
        <input id="email" v-model="form.email" class="form-input w-full" type="email" required />
      </div>
      <div>
        <label for="message" class="block text-sm text-slate-300 font-medium mb-1">{{ $t('contact.form.message') }}</label>
        <textarea id="message" v-model="form.message" class="form-textarea w-full h-32" required></textarea>
      </div>
      <div class="flex items-center">
        <input id="newsletter" v-model="form.newsletter" type="checkbox" class="form-checkbox text-purple-500" />
        <label for="newsletter" class="ml-2 text-slate-400 text-sm">{{ $t('contact.form.newsletter') }}</label>
      </div>

      <div v-if="success" class="text-green-500 text-sm">{{ success }}</div>
      <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

      <div class="text-center mt-6">
        <button class="btn text-white bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded" type="submit">
          {{ $t('contact.form.submit') }}
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        newsletter: false,
      },
      success: '',
      error: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:8000/api/contact', this.form)
        this.success = this.$t('contact.success')
        this.error = ''
        this.form = { name: '', email: '', message: '', newsletter: false }
        console.log('✅ Backend odgovor:', response.data)
      } catch (err) {
        this.error = this.$t('contact.error')
        this.success = ''
        console.error('❌ Greška pri slanju:', err.response?.data || err)
        console.log(JSON.stringify(err.response?.data.errors, null, 2))
      }
    }
  }
}
</script>
