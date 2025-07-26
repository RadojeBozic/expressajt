<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <!-- Hero sekcija -->
    <section class="relative pt-32 pb-12 md:pt-40 text-center">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
          🌐 Domen & Hosting usluge
        </div>
        <h1 class="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">
          Pomoć pri kupovini domena i hostinga – brzo i bez stresa
        </h1>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          Ne znaš gde da kupiš domen? Koji hosting da izabereš? Tu smo da ti pomognemo uz najbolje partnere i preporuke.
        </p>
      </div>

      <!-- Dekoracija -->
      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10">
        <img src="../images/page-illustration.svg" class="max-w-none" width="1440" height="427" alt="Page Illustration">
      </div>
    </section>

    <!-- Sadržaj -->
    <section class="relative py-16 px-6 max-w-5xl mx-auto text-slate-400 text-lg space-y-6">
      <p>🌍 <strong>Pomoć pri izboru domena:</strong> Proverićemo dostupnost .rs, .com, .net i drugih ekstenzija – i predložiti najbolje varijante.</p>
      <p>📡 <strong>Registracija domena preko nas:</strong> Naši partneri omogućavaju povoljnije cene i administraciju na jednom mestu.</p>
      <p>💾 <strong>Hosting preporuke:</strong> Deljeni, cloud ili VPS hosting – zavisno od tvog projekta, daćemo preporuku i obezbediti instalaciju.</p>
      <p>🤝 <strong>Partnerski odnos:</strong> Ako kupiš domen ili hosting preko nas, dobijamo proviziju – ali ti dobijaš podršku, brzinu i sigurnost.</p>
      <p>🔐 <strong>SSL sertifikat i sigurnost:</strong> Podešavamo HTTPS i automatski backup – da tvoj sajt radi 24/7 bezbedno.</p>
    </section>

    <!-- CTA -->
    <section class="text-center pb-20">
      <router-link
        to="/contact"
        class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded shadow transition"
      >
        Zatraži preporuku za domen/hosting →
      </router-link>
    </section>

    <SupportCTA />
    <Footer />
  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'
import SupportCTA from '../partials/SupportCTA.vue'

export default {
  name: 'ServiceDomainHosting',
  components: {
    Header,
    Footer,
    SupportCTA
  },
  mounted() {
    console.log('Otvorena usluga: domain-hosting')
  }
}
</script>
