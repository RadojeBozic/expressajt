<template>
  <section class="relative min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6 overflow-hidden">
    <!-- 🌌 Pozadina sa particles animacijom -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Glow background" />
      </div>
    </div>

    <!-- 📄 Glavni sadržaj -->
    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">📝 Naš blog</h1>
          <p class="text-slate-400 text-center mb-12">
            Ovde delimo znanje, uvide iz razvoja, novosti sa platforme i inspirativne priče korisnika.
          </p>

          <!-- Staticki pregled dok ne bude CMS-a -->
          <div class="space-y-8">
            <div class="bg-slate-800 p-5 rounded border border-slate-700 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400 mb-2">Kako nastaje GBS platforma?</h2>
              <p class="text-slate-300 text-sm leading-relaxed">
                Pogled iza kulisa razvoja naše modularne platforme. Od arhitekture i tehnologija do korisničkog iskustva i UI detalja.
              </p>
            </div>

            <div class="bg-slate-800 p-5 rounded border border-slate-700 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400 mb-2">Laravel + Tailwind + AI = Brzina i fleksibilnost</h2>
              <p class="text-slate-300 text-sm leading-relaxed">
                Zašto smo se odlučili za kombinaciju ovih alata? Šta to znači za tebe kao korisnika, i kako doprinosi razvoju prilagođenih rešenja?
              </p>
            </div>

            <div class="bg-slate-800 p-5 rounded border border-slate-700 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400 mb-2">Prezentacije bez programera – stvarnost u Srbiji</h2>
              <p class="text-slate-300 text-sm leading-relaxed">
                Analiza primera iz prakse: kako su mala preduzeća uz pomoć GBS sistema došla do modernog sajta za manje od jednog dana.
              </p>
            </div>

            <div class="text-center mt-10">
              <p class="text-slate-500 text-sm italic">Više članaka i CMS sekcija za blog biće uskoro dostupni.</p>
            </div>
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
  name: 'BlogPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
