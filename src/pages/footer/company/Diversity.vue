<template>
  <section>
    <!-- ✨ Particles pozadina -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Glow background" />
      </div>
    </div>

    <!-- 📦 Glavni sadržaj -->
    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">🌍 Raznolikost i inkluzija</h1>
          <p class="text-slate-400 text-center mb-12">
            U GBS platformi verujemo da različitost timova vodi ka boljim rešenjima. Naš pristup je otvoren, inkluzivan i orijentisan ka vrednostima.
          </p>

          <div class="space-y-6 text-slate-300 text-sm leading-relaxed">
            <p>
              Ne pravimo razliku među ljudima po osnovu pola, rase, vere, invaliditeta, uzrasta ili bilo kog drugog ličnog svojstva. Cenimo različita mišljenja, perspektive i iskustva jer verujemo da nas upravo one čine jačima.
            </p>
            <p>
              Naš tim je sastavljen od pojedinaca sa različitim pozadinama – od programera i dizajnera do analitičara i edukatora. Svi imaju jednaku šansu da doprinesu i rastu u skladu sa svojim potencijalom.
            </p>
            <p>
              Prilikom kreiranja sadržaja, sistema i alata, uvek vodimo računa da oni budu pristupačni, lokalizovani i upotrebljivi za sve korisnike – bez obzira na njihovo obrazovanje ili tehničko znanje.
            </p>
            <p>
              Podstičemo fer saradnju, zajedničko učenje i razmenu znanja – jer znamo da inkluzivno okruženje donosi najkreativnija rešenja.
            </p>
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
  name: 'DiversityPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
