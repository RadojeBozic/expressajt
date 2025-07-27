<template>
  <section>
    <!-- ✨ Particles animacija -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Pozadina" />
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">📊 Finansijski izveštaji</h1>
          <p class="text-slate-400 text-center mb-12">
            Pregled osnovnih finansijskih podataka u skladu sa principima transparentnosti poslovanja. Ovi izveštaji se odnose na razvoj GBS platforme i Express Sajta, prihod od usluga i ulaganja u infrastrukturu.
          </p>

          <div class="space-y-6">
            <!-- Godišnji izveštaji (placeholder) -->
            <div
              v-for="year in reports"
              :key="year.year"
              class="bg-slate-800 border border-slate-700 rounded p-5 shadow hover:shadow-lg transition"
            >
              <h2 class="text-xl font-semibold text-purple-400">{{ year.title }}</h2>
              <p class="text-slate-300 text-sm mt-1">{{ year.description }}</p>
              <div class="mt-4">
                <button
                  class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm"
                  disabled
                >
                  📁 Preuzimanje biće dostupno uskoro
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- ✨ Pozadina sa particles efektom -->
          <div class="absolute inset-0 -z-10">
            <Particles class="absolute inset-0" />
            <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
              <img src="../../../images/glow-bottom.svg" class="max-w-none" width="546" height="274" alt="Pozadina" />
            </div>
          </div>
      </div>

      <Footer />
    </div>
  </section>
</template>

<script>
import Header from '../../../partials/Header.vue'
import Footer from '../../../partials/Footer.vue'
import Particles from '../../../partials/Particles.vue'

export default {
  name: 'FinancePage',
  components: {
    Header,
    Footer,
    Particles
  },
  data() {
    return {
      reports: [
        {
          year: 2025,
          title: 'Godišnji izveštaj za 2025.',
          description: 'Zbirni pregled prihoda i rashoda u vezi sa razvojem GBS platforme u tekućoj godini.'
        },
        {
          year: 2024,
          title: 'Godišnji izveštaj za 2024.',
          description: 'Uvid u ulaganja u serversku infrastrukturu, open-source komponente i razvoj funkcionalnosti.'
        },
        {
          year: 2023,
          title: 'Pilot faza i inicijalno finansiranje (2023.)',
          description: 'Izveštaj o početnim troškovima, testiranju i uspostavljanju timske strukture.'
        }
      ]
    }
  }
}
</script>
