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
          <h1 class="text-3xl font-bold mb-6 text-center">🔒 Politika privatnosti</h1>
          <p class="text-slate-400 text-center mb-12">
            Vaša privatnost je za nas veoma važna. U nastavku možete pročitati na koji način prikupljamo, koristimo i štitimo vaše podatke.
          </p>

          <div class="space-y-6 bg-slate-800 p-6 rounded-lg shadow text-slate-300 text-sm leading-relaxed">
            <p><strong>1. Podaci koje prikupljamo:</strong> Prikupljamo samo osnovne kontakt podatke koje korisnici sami unesu (ime, email, broj telefona i slično).</p>

            <p><strong>2. Korišćenje podataka:</strong> Podaci se koriste isključivo za komunikaciju sa korisnicima i unapređenje usluga.</p>

            <p><strong>3. Zaštita podataka:</strong> Vaši podaci su zaštićeni i nikada se neće deliti sa trećim licima bez vaše dozvole.</p>

            <p><strong>4. Kolačići (cookies):</strong> Platforma koristi kolačiće za analitiku i funkcionalnost. Možete ih onemogućiti u svom pregledaču.</p>

            <p><strong>5. Prava korisnika:</strong> U svakom trenutku imate pravo da zatražite uvid, ispravku ili brisanje svojih podataka.</p>

            <p><strong>6. Period važenja:</strong> Ovaj dokument - Politika privatnosti, stupa na snagu danom objavljivanja na GBS platformi i važi do opoziva. Poslednji put ažuriran jul 2025.</p>

            <p><strong>7. Kontakt:</strong> Za sve zahteve vezane za privatnost, obratite nam se putem <router-link to="/contact" class="text-purple-400 underline hover:text-purple-300">kontakt stranice</router-link>.</p>
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
  name: 'PrivacyPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
