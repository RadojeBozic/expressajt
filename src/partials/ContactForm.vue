<template>
  <section class="bg-slate-900 py-16 px-4 sm:px-6">
    <!-- <div class="max-w-3xl mx-auto text-center mb-12">
      <h2 class="text-3xl font-bold text-white mb-4">{{ $t('contact.heading') }}</h2>
      <p class="text-slate-400 text-lg">{{ $t('contact.subheading') }}</p>
    </div> -->

    <form @submit.prevent="submitForm" class="max-w-xl mx-auto">
      <div class="space-y-4">
        <div>
          <label class="block text-sm text-slate-300 font-medium mb-1" for="name">{{ $t('contact.form.name') }}</label>
          <input id="name" v-model="form.name" class="form-input w-full" type="text" required />
        </div>
        <div>
          <label class="block text-sm text-slate-300 font-medium mb-1" for="email">{{ $t('contact.form.email') }}</label>
          <input id="email" v-model="form.email" class="form-input w-full" type="email" required />
        </div>
        <div>
          <label class="block text-sm text-slate-300 font-medium mb-1" for="message">{{ $t('contact.form.message') }}</label>
          <textarea id="message" v-model="form.message" class="form-textarea w-full h-32" required></textarea>
        </div>
        <div class="flex items-center">
          <input id="newsletter" v-model="form.newsletter" type="checkbox" class="form-checkbox text-purple-500" />
          <label for="newsletter" class="ml-2 text-slate-400 text-sm">{{ $t('contact.form.newsletter') }}</label>
        </div>
      </div>
      <div class="mt-6 text-center">
        <button class="btn text-white bg-purple-500 hover:bg-purple-600 px-6 py-2 rounded" type="submit">
          {{ $t('contact.form.submit') }}
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        newsletter: false
      }
    }
  },
  methods: {
    submitForm() {
      // Kasnije dodajemo backend logiku ovde
      alert(this.$t('contact.success'));
      // Reset
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
      this.form.newsletter = false
    }
  }
}
</script>
