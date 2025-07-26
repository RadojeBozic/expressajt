<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <section class="relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-10 md:pt-40 text-center">
        <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
          🎨 Dizajn po narudžbini
        </div>
        <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">
          Express Original sajt – potpuno po tvojoj meri
        </h1>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          Kreiramo unikatne prezentacije, bez šablona – od nule, po tvojim željama. Kompletna izrada za 5–7 dana.
        </p>
      </div>

      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10">
        <img src="../images/page-illustration.svg" class="max-w-none" width="1440" height="427" alt="Page Illustration">
      </div>
    </section>

    <section class="relative py-16 px-6 max-w-5xl mx-auto">
      <div class="text-slate-400 space-y-6 text-lg">
        <p>🛠️ <strong>Proces:</strong> Analiziramo tvoje zahteve, predlažemo strukturu, radimo dizajn i funkcionalnost.</p>
        <p>📌 <strong>Bez ograničenja:</strong> Broj stranica, sekcija i dodataka po dogovoru – punu kontrolu imaš ti.</p>
        <p>📸 <strong>Sadržaj i SEO:</strong> Pomažemo u pisanju teksta, odabiru slika, osnovnoj optimizaciji za pretraživače.</p>
        <p>🔐 <strong>Admin panel (opciono):</strong> Ako želiš – dobićeš mogućnost da sam/a menjaš sadržaj bez programera.</p>
        <p>🚀 <strong>Rok izrade:</strong> 5 do 7 radnih dana, uključujući revizije i objavu sajta.</p>
        <p>💰 <strong>Cena:</strong> Od 9.990 RSD, u zavisnosti od obima i zahteva (ponuda po upitu).</p>
      </div>
    </section>

    <section class="text-center pb-20">
      <router-link
        to="/contact"
        class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-3 rounded shadow transition"
      >
        Zatraži originalni sajt →
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
  name: 'ServiceOriginalSite',
  components: {
    Header,
    Footer,
    SupportCTA
  },
  mounted() {
    console.log('Otvorena usluga: originalsite')
  }
}
</script>
