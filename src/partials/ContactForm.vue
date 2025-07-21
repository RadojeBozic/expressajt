<template>
  <section class="bg-slate-900 py-16 px-4 sm:px-6 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">

      <!-- 💜 Gradient iza forme -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div class="w-[400px] h-[400px] bg-purple-500 rounded-full blur-[160px] opacity-40"></div>
      </div>

      <!-- 🟣 SVG shape iza forme -->
      <div class="absolute bottom-0 left-0 w-full pointer-events-none -z-10 opacity-50 blur-2xl" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stop-color="#A855F7" />
              <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
            </linearGradient>
          </defs>
          <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
        </svg>
      </div>

      <!-- 📬 Kontakt forma -->
      <form @submit.prevent="submitForm" class="max-w-xl mx-auto space-y-4 relative ">
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
    </div>
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
        const response = await axios.post('http://localhost:8090/api/contact', this.form);
        this.success = this.$t('contact.success') || 'Poruka uspešno poslata!';
        this.error = '';
        this.form = { name: '', email: '', message: '', newsletter: false };
      } catch (err) {
        this.success = '';
        this.error = this.$t('contact.error') || 'Došlo je do greške pri slanju.';
        console.error('❌ Greška pri slanju:', err.response?.data || err);
      }
    }
  },
  mounted() {
    this.success = '';
    this.error = '';
    this.form = { name: '', email: '', message: '', newsletter: false };
  }
}
</script>
