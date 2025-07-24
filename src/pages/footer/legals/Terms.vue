<template>
  <section>
    <!-- ✨ Pozadinska animacija -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Pozadinska animacija" />
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">📜 Uslovi korišćenja</h1>
          <p class="text-slate-400 text-center mb-12">
            Molimo vas da pažljivo pročitate sledeće uslove pre korišćenja GBS platforme.
          </p>

          <div class="space-y-6 bg-slate-800 p-6 rounded-lg shadow text-slate-300 text-sm leading-relaxed">
            <p><strong>1. Opšte odredbe:</strong> Korišćenjem ove platforme prihvatate sve navedene uslove i obavezujete se da ćete ih poštovati.</p>

            <p><strong>2. Prava i obaveze korisnika:</strong> Korisnik je dužan da unosi tačne podatke i da ne koristi platformu za nezakonite aktivnosti.</p>

            <p><strong>3. Ograničenja odgovornosti:</strong> GBS ne snosi odgovornost za sadržaj koji unesu korisnici niti za eventualne tehničke prekide rada.</p>

            <p><strong>4. Promene uslova:</strong> Zadržavamo pravo da u bilo kom trenutku izmenimo ove uslove. Korisnici će o tome biti obavešteni.</p>

            <p><strong>5. Primenjivo pravo:</strong> Na sve odnose između korisnika i GBS platforme primenjuje se pravo Republike Srbije i drugih država u kojima GBS posluje.</p>

            <p><strong>6. Period važenja:</strong> Ovi uslovi korišćenja stupaju na snagu danom objavljivanja na GBS platformi i važe do opoziva. Poslednji put ažurirani jul 2025.</p>

            <p><strong>7. Kontakt:</strong> Za dodatne informacije možete nas kontaktirati putem <router-link to="/contact" class="text-purple-400 underline hover:text-purple-300">kontakt stranice</router-link>.</p>
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
  name: 'TermsPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
