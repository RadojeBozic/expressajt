<template>
  <Header />
  <Hero />

  <main class="grow p-8 text-center min-h-[50vh] flex flex-col items-center justify-center">
    <!-- Dobrodošlica -->
    <h1 class="text-3xl font-bold text-slate-300 dark:text-white mb-2">
      Dobrodošli, {{ user?.name || 'korisniče' }}!
    </h1>
    <p class="text-slate-300 dark:text-slate-300 mb-6">
      Uspešno ste registrovani na platformu.
    </p>

    <!-- Profil podaci -->
    <div class="bg-slate-800 p-6 rounded-lg text-left max-w-xl w-full mb-8 text-white shadow-lg">
      <h2 class="text-xl font-semibold mb-4">🧑‍💼 Moj profil</h2>
      <p><strong>Ime:</strong> {{ user?.name }}</p>
      <p><strong>Email:</strong> {{ user?.email }}</p>
    </div>

    <!-- Poruke korisnika -->
    <div class="bg-slate-800 p-6 rounded-lg text-left max-w-xl w-full mb-8 text-white shadow-lg">
      <h2 class="text-xl font-semibold mb-4">📩 Moje poruke</h2>
      <ul>
        <li v-for="(msg, index) in messages" :key="index" class="border-b border-slate-700 pb-2 mb-2">
          {{ msg.message }}
        </li>
        <li v-if="messages.length === 0">Nemate nijednu poruku.</li>
      </ul>
    </div>

    <!-- Usluge / Paketi -->
    <div class="bg-slate-800 p-6 rounded-lg text-left max-w-xl w-full mb-8 text-white shadow-lg">
      <h2 class="text-xl font-semibold mb-4">🎯 Naše usluge</h2>
      <div v-for="(item, index) in services" :key="index" class="mb-4">
        <h3 class="text-lg font-bold">{{ item.title }}</h3>
        <p class="text-sm mb-2">{{ item.description }}</p>
        <button
          @click="interested(item.title)"
          class="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm"
        >
          Zainteresovan sam
        </button>
      </div>
    </div>

    <!-- Akcije -->
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
import axios from 'axios'
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
      messages: [],
      services: [
        {
          title: 'Jednim klikom do sajta',
          description: 'Brzo kreiranje poslovnih sajtova koristeći Laravel + Bootstrap.'
        },
        {
          title: 'ERP moduli i poslovne aplikacije',
          description: 'Upravljanje klijentima, fakturama, dashboard i više.'
        },
        {
          title: 'Online prodavnice & Multi-vendor',
          description: 'E-commerce sistem sa podrškom za Stripe i SEO.'
        },
        {
          title: 'CMS i blog sistem',
          description: 'Objave, kategorije, komentari i integracija sa Mailchimp.'
        },
        {
          title: 'AI kao servis',
          description: 'Kreiranje sadržaja, SEO analiza, Chatbot integracije.'
        }
      ]
    }
  },
  mounted() {
    if (!this.user) {
      this.$router.push('/signin')
    } else {
      this.fetchMessages()
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      this.$router.push('/signin')
    },
    async fetchMessages() {
      try {
        const response = await axios.get('http://localhost:8000/api/messages')
        this.messages = response.data
      } catch (error) {
        console.error('❌ Greška pri preuzimanju poruka:', error)
      }
    },
    interested(serviceTitle) {
      alert(`Zabeleženo interesovanje za: ${serviceTitle}`)
      // TODO: slanje u backend kad bude spremno
    }
  }
}
</script>
