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
            GBS platforma se razvija u skladu sa potrebama korisnika i savremenim standardima razvoja web aplikacija.
          </p>

          <ol class="space-y-8 list-decimal list-inside text-slate-300 text-sm">
            <li>
              <strong class="text-white">Analiza potreba korisnika:</strong>
              Svaki projekat započinjemo razumevanjem konkretnih ciljeva i zahteva firme ili pojedinca.
            </li>
            <li>
              <strong class="text-white">Izbor modula i pristupa:</strong>
              Korisnik bira funkcionalnosti koje želi, a mi predlažemo optimalnu arhitekturu na osnovu iskustva i opterećenja.
            </li>
            <li>
              <strong class="text-white">Brza izrada MVP verzije:</strong>
              MVP (Minimum Viable Product) se isporučuje brzo, kako bi korisnik što pre mogao da koristi sistem.
            </li>
            <li>
              <strong class="text-white">Iterativno testiranje i unapređenja:</strong>
              Svaki deo aplikacije se testira i razvija kroz male cikluse uz povratne informacije korisnika.
            </li>
            <li>
              <strong class="text-white">Puna kontrola nad kodom i podacima:</strong>
              Korisnik ima pristup kodu (po želji) i punu nezavisnost u daljoj integraciji sa ERP, CRM ili drugim sistemima.
            </li>
            <li>
              <strong class="text-white">Skalabilnost i nadogradnja:</strong>
              Naš sistem omogućava da se funkcionalnosti šire u bilo kom trenutku — bez potrebe za ponovnim pisanjem celog sistema.
            </li>
          </ol>
        </div>
        <!-- ✨ Pozadinska animacija -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-bottom.svg" class="max-w-none" width="2146" height="774" alt="Glow background" />
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
