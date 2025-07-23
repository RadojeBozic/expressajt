<template>
  <section class="relative min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 overflow-hidden">
    <!-- 🎇 Pozadina sa particles i glow -->
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
          <h1 class="text-3xl font-bold mb-6 text-center">🔗 Integracije</h1>
          <p class="text-slate-400 text-center mb-12">
            GBS platforma omogućava integraciju sa vodećim alatima i servisima kako biste proširili funkcionalnosti svog sajta ili aplikacije.
          </p>

          <ul class="space-y-6">
            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Stripe</h2>
              <p class="text-slate-300 text-sm mt-1">Pouzdana integracija za online plaćanja – naplata proizvoda i usluga putem kartica.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Mailchimp</h2>
              <p class="text-slate-300 text-sm mt-1">Automatska prijava korisnika na newsletter listu, slanje kampanja i praćenje statistike.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Google Maps</h2>
              <p class="text-slate-300 text-sm mt-1">Prikaz lokacije firme direktno na sajtu sa mogućnošću navigacije do adrese.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">YouTube</h2>
              <p class="text-slate-300 text-sm mt-1">Ugradnja video prezentacija ili reklama u sekciji o firmi, proizvodu ili usluzi.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Facebook & Instagram</h2>
              <p class="text-slate-300 text-sm mt-1">Povezivanje sa društvenim mrežama radi veće vidljivosti i direktne komunikacije sa korisnicima.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Google Analytics</h2>
              <p class="text-slate-300 text-sm mt-1">Praćenje poseta, ponašanja korisnika i analitika konverzija.</p>
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
  name: 'FooterIntegrations',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
