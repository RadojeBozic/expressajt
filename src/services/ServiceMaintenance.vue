<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <!-- Hero sekcija -->
    <section class="relative pt-32 pb-12 md:pt-40 text-center">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
          🛠️ Održavanje sajtova
        </div>
        <h1 class="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">
          Profesionalna podrška, bez brige i stresa
        </h1>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          Ažuriranja, sigurnost, izmene i pomoć u radu sajtova – brzo, pouzdano i dostupno kad god ti zatreba.
        </p>
      </div>

      <!-- Dekoracija -->
      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10">
        <img src="../images/page-illustration.svg" class="max-w-none" width="1440" height="427" alt="Page Illustration" />
      </div>
    </section>

    <!-- Opis usluga -->
    <section class="relative py-16 px-6 max-w-5xl mx-auto text-slate-400 text-lg space-y-6">
      <p>🔄 <strong>Ažuriranja sadržaja:</strong> Dodavanje novih sekcija, zamena slika, izmene tekstova i usluga – sve bez tehničkog znanja.</p>
      <p>🔐 <strong>Sigurnost i zaštita:</strong> Aktivna zaštita sajta, monitoring napada, backup sistema i sigurnosne kopije baze podataka.</p>
      <p>🚀 <strong>Brzina i optimizacija:</strong> Redovno čišćenje keša, optimizacija učitavanja, kontrola grešaka i analitika performansi.</p>
      <p>📈 <strong>SEO održavanje:</strong> Provera meta tagova, strukture sajta i vidljivosti na Google-u. Pomoć oko rangiranja i tehničkog SEO-a.</p>
      <p>📩 <strong>Podrška i savetovanje:</strong> Kontakt putem emaila ili WhatsApp-a. Brz odgovor i rešavanje problema.</p>
    </section>

    <!-- CTA -->
    <section class="text-center pb-20">
      <router-link
        to="/contact"
        class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded shadow transition"
      >
        Zatraži održavanje sajta →
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
  name: 'ServiceMaintenance',
  components: {
    Header,
    Footer,
    SupportCTA
  },
  mounted() {
    console.log('Otvorena usluga: maintenance')
  }
}
</script>
