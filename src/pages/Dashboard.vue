<template>
  <Header />

    <Hero />
  <main class="grow p-8 text-center min-h-[50vh] flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold text-slate-300 dark:text-white mb-2">
      Dobrodošli, {{ user?.name || 'korisniče' }}!
    </h1>
    <p class="text-slate-300 dark:text-slate-300 mb-6">
      Uspešno ste registrovani na platformu.
    </p>

    <router-link
      to="/"
      class="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded shadow transition duration-150"
    >
      ← Nazad na početnu stranicu
    </router-link>
    <button
      @click="handleLogout"
      class="mt-4 inline-flex items-center px-4 py-2 bg-slate-500 hover:bg-slate-600 text-red-700 text-sm font-medium rounded shadow transition duration-150"
    >
    Odjavi se
    </button>

    <Cta />
  </main>

    <Footer />
</template>

<script>
import { getCurrentUser } from '../utils/auth'
import Header from '../partials/Header.vue'
import Hero from '../partials/Hero.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue' 

export default {
  name: 'Dashboard',
  components: {
    Header,
    Hero,
    Cta,
    Footer
  },
  data() {
    return {
      user: getCurrentUser(),
    }
  },
    methods: {
        handleLogout() {
        localStorage.removeItem('user')
        this.$router.push('/signin')
        }
    },
}
</script>
