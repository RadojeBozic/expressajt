<template>
  <section >
   
      <!-- Particles background -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Glow background" />
      </div>
    </div>
    <!-- Main container -->
    <div class="relative max-w-6xl mx-auto mt-4">
     
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32 ">
        <div class="max-w-5xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">🛠️ Funkcionalnosti GBS platforme</h1>
          <p class="text-slate-400 text-center mb-12">
            GBS je kompletna poslovna platforma koja objedinjuje frontend, backend i napredne poslovne funkcionalnosti za male i srednje firme.
          </p>

          <ul class="space-y-6">
            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">MyMaXico – besplatna online prodavnica</h2>
              <p class="text-slate-300 text-sm mt-1">Besplatno rešenje za do 100 proizvoda, bez obaveze plaćanja hostinga i domena.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Jednim klikom do sajta</h2>
              <p class="text-slate-300 text-sm mt-1">Besplatne mini prezentacije. Brzo kreiranje poslovnih sajtova koristeći Laravel + Bootstrap.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">PRO verzija sajta</h2>
              <p class="text-slate-300 text-sm mt-1">Automatski generisan sajt sa dodatnim sekcijama, PDF-om, kontaktima i video prezentacijom.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Online prodavnice & Multi-vendor</h2>
              <p class="text-slate-300 text-sm mt-1">E-commerce sistem sa podrškom za Stripe, SEO, više prodavaca i upravljanje narudžbinama.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Web aplikacije i SaaS rešenja</h2>
              <p class="text-slate-300 text-sm mt-1">Kreiramo prilagođene web aplikacije i SaaS platforme koje su skalabilne, sigurne i modularne.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Mobilne aplikacije</h2>
              <p class="text-slate-300 text-sm mt-1">Razvoj mobilnih aplikacija za Android i iOS, povezane sa backend-om i korisničkim panelima.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">ERP moduli i poslovne aplikacije</h2>
              <p class="text-slate-300 text-sm mt-1">Upravljanje klijentima, fakturama, dokumentima, projektima, dashboard i drugim ključnim segmentima poslovanja.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">CMS i blog sistem</h2>
              <p class="text-slate-300 text-sm mt-1">Objavljivanje vesti, kategorije, komentari, SEO podrška i integracija sa Mailchimp-om.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">AI kao servis</h2>
              <p class="text-slate-300 text-sm mt-1">Kreiranje sadržaja, SEO analiza, chatbot integracije i automatizacija korisničke podrške.</p>
            </li>
          </ul>
         
        </div>

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
  name: 'FeaturesPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
