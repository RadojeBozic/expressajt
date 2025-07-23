<template>
  <section >
    <!-- 🎇 Pozadina -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Glow background" />
      </div>
    </div>

    <!-- ✅ Sadržaj -->
    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-5xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">📝 Izmene i unapređenja (Changelog)</h1>
          <p class="text-slate-400 text-center mb-12">
            Ova stranica prikazuje najnovije izmene, funkcionalnosti i ispravke u okviru GBS platforme.
          </p>

          <ul class="space-y-6">
            <li v-for="entry in changelog" :key="entry.date" class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-lg font-semibold text-purple-400">{{ entry.date }} – {{ entry.version }}</h2>
              <ul class="list-disc ml-5 mt-2 space-y-1 text-slate-300 text-sm">
                <li v-for="item in entry.changes" :key="item">{{ item }}</li>
              </ul>
            </li>
          </ul>
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
  name: 'ChangelogPage',
  components: {
    Header,
    Footer,
    Particles
  },
  data() {
    return {
        // Primer podataka za prikaz
      changelog: [
        {
          date: '2025-07-22',
          version: 'v1.4.0',
          changes: [
            'Dodata stranica za prikaz izmene (changelog)',
            'Unapređen UI u sekciji Funkcionalnosti',
            'Dodate nove integracije (Google Analytics, Facebook)',
          ]
        },
        {
          date: '2025-07-15',
          version: 'v1.3.5',
          changes: [
            'Omogućeno preuzimanje PRO prezentacija kao PDF',
            'Ispravljen bug u vezi prikaza video prezentacije',
          ]
        },
        {
          date: '2025-07-01',
          version: 'v1.3.0',
          changes: [
            'Dodati novi demo sajtovi na stranici /demo',
            'Unapređen sigurnosni sloj API-ja',
            'Dodate nove uloge korisnika u admin panelu',
          ]
        }
      ]
    }
  }
}
</script>
