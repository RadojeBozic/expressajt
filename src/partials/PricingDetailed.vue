<template>
  <section class="max-w-4xl mx-auto py-12 px-4 text-white relative">
    <!-- Radial gradient -->
    <div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
      <div class="absolute inset-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
      <div class="absolute w-64 h-64 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
    </div>

    <!-- Particles animation -->
    <Particles class="absolute inset-0 h-96 -z-11" />

    <!-- Illustration -->
    <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
      <img src="../images/page-illustration.svg" class="max-w-none" width="1440" height="427" alt="Page Illustration">
    </div>

    <!-- Section header -->
    <div class="text-center pb-12 md:pb-20">
      <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
        <p>Transparentan pregled svih naših usluga i cena</p>
      </div>
      <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
        Detaljan Cenovnik naših usluga
      </h1>
      <div class="max-w-3xl mx-auto">
        <p class="text-lg text-slate-400">
          Cenovnik odražava našu trenutnu ponudu i važi za sve nove korisnike.
          Dodatni popusti su mogući u zavisnosti od vrste i količine naručenih usluga
        </p>
      </div>
    </div>

    <!-- Pricing list -->
    <ul class="space-y-4">
      <li v-for="(item, index) in services" :key="index"
          class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:border-purple-500 transition">
        <button @click="toggle(index)" class="w-full text-left flex justify-between items-center">
          <div>
            <span class="font-semibold text-white">{{ item.title }}</span>
            <span class="ml-2 text-xs text-purple-400 hover:underline">[Detaljnije ⌄]</span>
          </div>
          <span class="text-sm text-slate-400">{{ item.price }}</span>
        </button>
        <transition name="fade">
          <div v-if="item.open" class="mt-3 text-sm text-slate-300 border-t border-slate-600 pt-3">
            <p class="mb-2">{{ item.description }}</p>
            <button
              @click="openRequestForm(item)"
              class="inline-block px-3 py-1 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded"
            >
              📩 Zatraži ponudu
            </button>
          </div>
        </transition>
      </li>
    </ul>

    <!-- Modal za zahtev za ponudu -->
    <RequestOfferModal
      :visible="showModal"
      :selectedService="selectedService"
      @close="showModal = false"
    />
  </section>
</template>

<script>
import Particles from './Particles.vue'
import RequestOfferModal from './RequestOfferModal.vue'

export default {
  name: 'PricingDetailed',
  components: {
    Particles,
    RequestOfferModal
  },
  data() {
    return {
      showModal: false,
      selectedService: '',
      services: [
        {
          title: 'Besplatna prezentacija (Starter)',
          price: '0 RSD',
          description: 'Idealno za CV, portfolio, jednu stranicu. Prikaz po šablonu, generiše se automatski. Uređivanje putem forme.',
          open: false
        },
        {
          title: 'Poslovna prezentacija (Basic)',
          price: 'od 1.999 RSD godišnje',
          description: 'Sadrži: kontakt formu, Google mapu, PDF, linkove, dodatne sekcije. Besplatan domen *.rs nije uključen.',
          open: false
        },
        {
          title: 'Online prodavnica (Shop)',
          price: 'od 3.999 RSD godišnje',
          description: 'Do 20 proizvoda, korpa, Stripe integracija, podrška za SEO. Mogućnost nadogradnje.',
          open: false
        },
        {
          title: 'Profesionalni logo dizajn',
          price: 'od 1.000 RSD',
          description: 'Izrada logotipa putem AI + Canva uz konsultaciju. Finalni fajlovi: PNG, SVG, PDF.',
          open: false
        },
        {
          title: 'Tehnička podrška (mesečna)',
          price: 'od 999 RSD',
          description: 'Ažuriranje sajta, sigurnost, SEO preporuke, dodavanje slika ili sekcija – 1h podrške mesečno.',
          open: false
        },
        {
          title: 'Održavanje sajta (po intervenciji)',
          price: 'od 499 RSD',
          description: 'Jednokratna pomoć: upload sadržaja, izmena teksta, SEO optimizacija, backup sajta itd.',
          open: false
        }
      ]
    }
  },
  methods: {
    toggle(index) {
      this.services[index].open = !this.services[index].open
    },
    openRequestForm(service) {
      this.selectedService = service.title
      this.showModal = true
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
