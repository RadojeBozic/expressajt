<template>
  <Header />
  <main class="grow p-8 min-h-[60vh]">
    <!-- Dobrodošlica -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-slate-300 dark:text-white pt-8 mt-4">
        Dobrodošli, {{ user?.name || 'korisniče' }}!
      </h1>
      <p class="text-slate-400">Uspešno ste registrovani na platformu.</p>
    </div>

    <!-- Profil -->
    <div class="bg-slate-800 p-6 rounded-lg max-w-5xl w-full mx-auto text-white mb-8 shadow-lg">
      <h2 class="text-xl font-semibold mb-4">🧑‍💼 Moj profil</h2>
      <p><strong>Ime:</strong> {{ user?.name }}</p>
      <p><strong>Email:</strong> {{ user?.email }}</p>
    </div>

    <!-- Poruke korisnika -->
    <div class="bg-slate-800 p-6 rounded-lg max-w-5xl w-full mx-auto text-white mb-8 shadow-lg">
      <h2 class="text-xl font-semibold mb-4">📩 Moje poruke</h2>
      <ul>
        <li v-for="(msg, index) in messages" :key="index" class="border-b border-slate-700 pb-2 mb-2">
          {{ msg.message }}
        </li>
        <li v-if="messages.length === 0">Nemate nijednu poruku.</li>
      </ul>
    </div>

    <!-- Naše usluge -->
    <div class="bg-slate-800 p-6 rounded-lg max-w-7xl w-full mx-auto text-white mb-12 shadow-lg">
      <h2 class="text-xl font-semibold mb-6 text-center">🎯 Naše Express usluge</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in services"
          :key="index"
          class="bg-slate-900 p-4 rounded-lg border border-slate-700 flex flex-col justify-between"
        >
          <div>
            <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
            <p class="text-sm text-slate-300">{{ item.description }}</p>
          </div>
         <router-link
          :to="item.route"
          class="mt-4 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm text-white self-start text-center"
        >
          Zainteresovan/a sam
        </router-link>
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<script>
import axios from 'axios'
import { getCurrentUser } from '../utils/auth'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Dashboard',
  components: { Header, Footer },
  data() {
    return {
      user: getCurrentUser(),
      messages: [],
      services: [
        {
          title: 'Express FREE sajt',
          description: 'Besplatan sajt za 5–10 minuta – jednostavno, brzo, bez programiranja.',
          route: '/services/freesite'
        },
        {
          title: 'Express PRO sajt',
          description: 'Napredna prezentacija sa dodatnim sekcijama, PDF, mapom i kontakt formom.',
          route: '/services/prosite'
        },
        {
          title: 'Express W3 sajt',
          description: 'Unikatna poslovna prezentacija za jedan dan – koristi W3 šablone i brz dizajn.',
          route: '/services/w3site'
        },
        {
          title: 'Express CRUIP sajt',
          description: 'Moderne prezentacije sa Cruip UI dizajnom i efektima. Vreme izrade: 4–5 dana.',
          route: '/services/cruipsite'
        },
        {
          title: 'Express Original sajt',
          description: 'Sajt po posebnom zahtevu – kreiranje od nule, unikatno i ekskluzivno.',
          route: '/services/originalsite'
        },
        {
          title: 'Express Basic Shop',
          description: 'Online prodavnica sa osnovnim funkcijama – checkout, korpa, SEO.',
          route: '/services/basicshop'
        },
        {
          title: 'Express UNI Shop',
          description: 'Višenamenska online prodavnica sa filterima, partnerima, dashboard-om.',
          route: '/services/unishop'
        },
        {
          title: 'Domen & hosting usluga',
          description: 'Pomoć u izboru i kupovini hostinga/domena – sa podrškom i provizijom.',
          route: '/services/domain-hosting'
        },
        {
          title: 'Održavanje sajta',
          description: 'Pomoć u izmenama, SEO, sigurnosti i backup-u. Mesečno ili po intervenciji.',
          route: '/services/maintenance'
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
    async fetchMessages() {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get('http://localhost:8080/api/my-messages', {
          headers: { Authorization: `Bearer ${token}` }
        })
        this.messages = res.data
      } catch (error) {
        console.error('❌ Greška pri preuzimanju poruka:', error)
      }
    },
   interested(serviceTitle) {
      const selected = this.services.find(item => item.title === serviceTitle)
      if (selected) {
        this.$router.push(selected.route)
      } else {
        alert(`Zabeleženo interesovanje za: ${serviceTitle}`)
      }
    }, 
    
  }
}
</script>
