<template>
  <section>
    <!-- ✨ Pozadinska animacija -->
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
        <div class="max-w-5xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">🚀 Naš metod rada</h1>
          <p class="text-slate-400 text-center mb-12">
            Način na koji razvijamo aplikacije je brz, jasan i prilagođen korisniku. Fokus je na praktičnim rešenjima, minimalnoj komplikaciji i maksimalnom učinku.
          </p>

          <ol class="space-y-8 list-decimal list-inside text-slate-300 text-sm">
            <li>
              <strong class="text-white">🎯 Razumevanje potreba:</strong>
              Svaki projekat počinje razgovorom i analizom konkretnih potreba korisnika, industrije i ciljeva.
            </li>
            <li>
              <strong class="text-white">🧩 Prilagođen izbor modula:</strong>
              Na osnovu zahteva biramo gotove module ili razvijamo nove — efikasno i namenski.
            </li>
            <li>
              <strong class="text-white">⚡ Brza izrada MVP rešenja:</strong>
              Dostavljamo funkcionalnu početnu verziju kako bi se sistem što pre koristio i testirao u realnim uslovima.
            </li>
            <li>
              <strong class="text-white">🔁 Iterativno testiranje i optimizacija:</strong>
              Svaka verzija se analizira, korisnički predlozi se uvažavaju, a funkcionalnosti se prilagođavaju u hodu.
            </li>
            <li>
              <strong class="text-white">🔐 Potpuna kontrola i vlasništvo:</strong>
              Kod je transparentan, podaci ostaju kod korisnika, a moguće su integracije sa ERP, CRM i drugim sistemima.
            </li>
            <li>
              <strong class="text-white">📈 Skalabilnost bez ograničenja:</strong>
              Sistem se lako proširuje — bez potrebe za refaktorisanjima, uz potpunu modularnost i dugoročnu održivost.
            </li>
          </ol>
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
  name: 'MethodPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
