<template>
  <section >
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
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">🏢 O nama</h1>
          <p class="text-slate-400 text-center mb-12">
            GBS je savremena digitalna platforma za male i srednje biznise, koja spaja jednostavnost sa tehnološkom naprednošću.
          </p>

          <div class="space-y-6 text-slate-300 text-sm leading-relaxed">
            <p>
              Naša misija je da omogućimo svakoj firmi, preduzetniku i organizaciji da brzo i jednostavno dođe do profesionalnog online nastupa – bilo da se radi o prezentacionom sajtu, online prodavnici, ili kompleksnijim poslovnim aplikacijama.
            </p>
            <p>
              Platforma je izgrađena uz korišćenje najmodernijih tehnologija – Laravel, Vue, Bootstrap, Livewire – i osmišljena tako da bude maksimalno fleksibilna i modularna.
            </p>
            <p>
              GBS se razvija u Srbiji, od strane lokalnog tima koji razume specifične potrebe domaćeg tržišta. Podršku pružaju eksperti iz oblasti web razvoja, dizajna, poslovne analitike i marketinga.
            </p>
            <p>
              Fokusiramo se na transparentnost, lokalizaciju, pristupačne cene i mogućnost širenja sistema bez komplikacija.
            </p>
            <p>
              Kroz različite pakete i module, naši korisnici mogu da kreiraju rešenje po meri, koje će rasti zajedno sa njihovim biznisom.
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
  name: 'AboutPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
