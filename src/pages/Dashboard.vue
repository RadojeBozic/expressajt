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
      <h2 class="text-xl font-semibold mb-6 text-center">🎯 Naše usluge</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(item, index) in services" :key="index" class="bg-slate-900 p-4 rounded-lg border border-slate-700 flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
            <p class="text-sm text-slate-300">{{ item.description }}</p>
          </div>
          <button
            @click="interested(item.title)"
            class="mt-4 px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm text-white self-start"
          >
            Zainteresovan/a sam
          </button>
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
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user: getCurrentUser(),
      messages: [],
      services: [
        {
          title: 'MyMaXico – besplatna online prodavnica',
          description: 'Besplatno i bez obaveze plaćanja hostinga i domena. Pokreni svoju e-commerce prodavnicu sa do 100 proizvoda i svim neophodnim funkcijama – korpa, checkout, mobilna verzija, SEO, povezivanje sa društvenim mrežama i više.'
        },
        {
          title: 'Jednim klikom do sajta',
          description: 'besplatne mini prezentacije. Brzo kreiranje poslovnih sajtova koristeći Laravel + Bootstrap.'
        },
        {
          title: 'Pro verzija sajta',
          description: 'Automatski generisan sajt sa dodatnim sekcijama, PDF-om, kontaktima i video prezentacijom.'
        },
         {
          title: 'Online prodavnice & Multi-vendor',
          description: 'E-commerce sistem sa podrškom za Stripe i SEO.'
        },
        {
          title: 'Web aplikacije i SaaS rešenja',
          description: 'Kreiramo prilagođene web aplikacije i SaaS platforme koje su skalabilne i sigurne.'
        },
        {
          title: 'Mobilne aplikacije',
          description: 'Razvoj mobilnih aplikacija za Android i iOS platforme.'
        },
        {
          title: 'ERP moduli i poslovne aplikacije',
          description: 'Upravljanje klijentima, fakturama, dashboard i više.'
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
    const token = localStorage.getItem('token')
    const response = await axios.get('http://localhost:8090/api/my-messages', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    this.messages = response.data;
    } catch (error) {
      console.error('❌ Greška pri preuzimanju poruka:', error);
    }
  },
     /*  interested(serviceTitle) {
    const slug = this.slugify(serviceTitle)
    this.$router.push(`/services/${slug}`)
  }, */
    interested(serviceTitle) {
    if (serviceTitle.includes('MyMaXico')) {
      this.$router.push('/services/mymaxico')
    } else if (serviceTitle.includes('Jednim klikom do sajta')) {
      this.$router.push('/services/freesite')
    } else if (serviceTitle.includes('Pro verzija sajta')) {
      this.$router.push('/services/prosite')
    } else if (serviceTitle.includes('Online prodavnice & Multi-vendor')) {
      this.$router.push('/services/onlineshop')
    } else if (serviceTitle.includes('SaaS') || serviceTitle.includes('web aplikacije')) {
      this.$router.push('/services/saas')
    } else if (serviceTitle.includes('Mobilne aplikacije')) {
      this.$router.push('/services/mobile-apps')
    } else if (serviceTitle.includes('ERP moduli i poslovne aplikacije')) {
      this.$router.push('/services/erp')
    } else if (serviceTitle.includes('CMS i blog sistem')) {
      this.$router.push('/services/cms-blog')
    } else if (serviceTitle.includes('AI kao servis')) {
      this.$router.push('/services/ai-as-a-service')
    } else {
      alert(`Zabeleženo interesovanje za: ${serviceTitle}`)
    }
  },
    // Slugify funkcija za kreiranje URL-friendly stringa
  slugify(title) {
      return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')
    }
  }
}
</script>
