<template>
      <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

  <!-- Gornja navigacija (header sajta) -->
  <Header />


  <main class="grow">
    <section class="relative">
      <!-- Ilustracija -->
      <div
        class="md:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-70 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <img src="../images/auth-illustration.svg" class="max-w-none" width="1440" height="450" alt="Page Illustration" />
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
          <!-- Header -->
          <div class="max-w-3xl mx-auto text-center pb-12">
            <div class="mb-5">
              <router-link class="inline-flex" to="/">
                <div class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl bg-slate-900">
                  <img class="relative" src="../images/logog.png" width="42" height="42" alt="Stellar" />
                </div>
              </router-link>
            </div>
            <h1 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              {{ $t('register.title_register') }}
            </h1>
          </div>

          <!-- Forma -->
          <div class="max-w-sm mx-auto">
            <form @submit.prevent="submitForm" class="space-y-4">
              <div>
                <label class="block text-sm text-slate-300 font-medium mb-1" for="name">
                  {{ $t('register.fullname') }} <span class="text-rose-500">*</span>
                </label>
                <input v-model="form.name" id="name" type="text" class="form-input w-full" :placeholder="$t('register.name_manager')" required />
              </div>

              <div>
                <label class="block text-sm text-slate-300 font-medium mb-1" for="email">
                  {{ $t('register.email') }} <span class="text-rose-500">*</span>
                </label>
                <input v-model="form.email" id="email" type="email" class="form-input w-full" placeholder="you@example.com" required />
              </div>

              <div>
                <label class="block text-sm text-slate-300 font-medium mb-1" for="password">
                  {{ $t('register.password') }} <span class="text-rose-500">*</span>
                </label>
                <input v-model="form.password" id="password" type="password" class="form-input w-full" autocomplete="on" required />
              </div>

             <!--  <div>
                <label class="block text-sm text-slate-300 font-medium mb-1" for="message">
                  {{ $t('register.message') }}
                </label>
                <textarea v-model="form.message" id="message" class="form-textarea w-full h-24" :placeholder="$t('register.message_placeholder')"></textarea>
              </div> -->

              <!-- Referrer -->
              <div>
                <label class="block text-sm text-slate-300 font-medium mb-1" for="referrer">
                  {{ $t('register.referrer') }} <span class="text-rose-500">*</span>
                </label>
                <select v-model="form.referrer" id="referrer" class="form-select text-sm py-2 w-full" required>
                  <option value="google">{{ $t('register.referrer_options.google') }}</option>
                  <option value="medium">{{ $t('register.referrer_options.medium') }}</option>
                  <option value="github">{{ $t('register.referrer_options.github') }}</option>
                </select>
              </div>

              <!-- Poruke -->
              <div v-if="success" class="text-green-500 text-sm">{{ success }}</div>
              <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

              <div class="mt-6">
                <button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group">
                  {{ $t('register.button') }}
                  <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
                </button>
              </div>
            </form>

            <div class="text-center mt-4 text-sm text-slate-400">
              {{ $t('register.already') }}
              <router-link class="font-medium text-purple-500 hover:text-purple-400" to="/signin">
                {{ $t('register.signin') }}
              </router-link>
            </div>

            <!-- Divider -->
            <div class="flex items-center my-6">
              <div class="border-t border-slate-800 grow mr-3" aria-hidden="true"></div>
              <div class="text-sm text-slate-500 italic">{{ $t('register.or') }}</div>
              <div class="border-t border-slate-800 grow ml-3" aria-hidden="true"></div>
            </div>

            <!-- Social login -->
            <div class="flex space-x-3">
              <button class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group relative h-9">
                <span class="relative">
                  <span class="sr-only">{{ $t('register.continue_twitter') }}</span>
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="14" height="12">
                    <path d="m4.34 0 2.995 3.836L10.801 0h2.103L8.311 5.084 13.714 12H9.482L6.169 7.806 2.375 12H.271l4.915-5.436L0 0h4.34Zm-.635 1.155H2.457l7.607 9.627h1.165L3.705 1.155Z" />
                  </svg>
                </span>
              </button>
              <button class="btn text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group relative h-9">
                <span class="relative">
                  <span class="sr-only">{{ $t('register.continue_github') }}</span>
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="15">
                    <path d="M7.488 0C3.37 0 0 3.37 0 7.488c0 3.276 2.153 6.084 5.148 7.113.374.094.468-.187.468-.374v-1.31c-2.06.467-2.527-.936-2.527-.936-.375-.843-.843-1.124-.843-1.124-.655-.468.094-.468.094-.468.749.094 1.123.75 1.123.75.655 1.216 1.778.842 2.153.654.093-.468.28-.842.468-1.03-1.685-.186-3.37-.842-3.37-3.743 0-.843.281-1.498.75-1.966-.094-.187-.375-.936.093-1.965 0 0 .655-.187 2.059.749a6.035 6.035 0 0 1 1.872-.281c.655 0 1.31.093 1.872.28 1.404-.935 2.059-.748 2.059-.748.374 1.03.187 1.778.094 1.965.468.562.748 1.217.748 1.966 0 2.901-1.778 3.463-3.463 3.65.281.375.562.843.562 1.498v2.059c0 .187.093.468.561.374 2.996-1.03 5.148-3.837 5.148-7.113C14.976 3.37 11.606 0 7.488 0Z" />
                  </svg>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  </main>
</div>
    
</template>

<script>
import axios from 'axios'
import Header from '../partials/Header.vue'

export default {
  name: 'SignUp',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        // message: '',
        referrer: 'google',
      },
      success: '',
      error: '',
    }
  },
  components: {
    Header,
  },
  methods: {
    async submitForm() {
  try {
const response = await axios.post('http://localhost:8080/api/register', this.form);

    const { token, user } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    this.success = this.$t('register.success') || 'Registracija uspešna!';
    this.error = '';

    this.$router.push('/dashboard');
  } catch (error) {
    this.success = '';
    if (error.response?.status === 422) {
      this.error = this.$t('register.validation_error') || 'Greška u validaciji.';
      console.error('Validacija:', error.response.data.errors);
    } else {
      this.error = this.$t('register.error') || 'Greška prilikom registracije.';
      console.error('Backend greška:', error);
    }
  }
}
  }
}
</script>
