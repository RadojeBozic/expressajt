<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- ✅ Gornja navigacija (header sajta) -->
    <Header />
    <section class="relative">

      <!-- Radial gradient -->
      <div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div class="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      <!-- Particles animation -->
      <Particles class="absolute inset-0 h-96 -z-10" :quantity="15" />

      <!-- Illustration -->
      <div class="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <img src="../images/page-illustration.svg" class="max-w-none" width="1440" height="427" alt="Page Illustration">
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-10 md:pt-40">

          <!-- Hero content -->
          <div class="text-center">
            <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">🚀 Premium opcije za tvoj sajt</div>
            <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">PRO verzija sajta – više mogućnosti, veći utisak</h1>
            <!-- Rings illustration -->
            <div class="inline-flex items-center justify-center relative">
              <Particles class="absolute inset-0 -z-10" :quantity="10" />
              <div class="inline-flex [mask-image:_radial-gradient(circle_at_bottom,transparent_15%,black_70%)]">
                <img src="../images/about-illustration.svg" width="446" height="446" alt="About illustration" />
              </div>
              <img class="absolute mt-[30%] drop-shadow-lg animate-float" src="../images/about-icon.svg" width="72" height="72" alt="About icon" />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- PRO Features Section -->
    <section class="relative">
      <div class="px-4 sm:px-6">
        <div class="max-w-5xl mx-auto pb-20">

          <div class="max-w-3xl mx-auto text-center pb-12">
            <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Šta dobijate u PRO paketu?
            </h2>
          </div>

          <div class="text-slate-400 space-y-6 max-w-3xl mx-auto">
            <p>📄 Priloži PDF dokument – cenovnik, brošuru, ponudu ili specifikaciju.</p>
            <p>🎬 Uključi YouTube video prezentaciju sa jednog klikom.</p>
            <p>🔗 Sekcije sajta imaju ID-jeve i mogu se pozivati iz navigacije.</p>
            <p>📱 Sekcija "Kontakt" sa više telefona, adresa, emailova – profesionalno i jasno.</p>
            <p>🛒 U ponudi možeš imati do 12 proizvoda – četiri obavezna + do osam dodatnih.</p>
            <p>🌐 Povezivanje sopstvenog domena, SEO friendly struktura i prilagođena podrška.</p>
          </div>

        </div>
      </div>
    </section>

   <section id="faq" class="relative">
  <!-- Blurred shape -->
  <div class="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
      <defs>
        <linearGradient id="bs3-pro" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
          <stop offset="0%" stop-color="#6366F1" />
          <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path fill="url(#bs3-pro)" fill-rule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
    </svg>
  </div>

  <div class="max-w-6xl mx-auto px-4 sm:px-6">
    <div class="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]">

      <!-- Section header -->
      <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
          PRO Paket – najčešća pitanja
        </div>
        <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
          Sve što treba da znate pre kupovine
        </h2>
      </div>

      <!-- Columns -->
      <div class="md:flex md:space-x-12 space-y-8 md:space-y-0">

        <!-- Column 1 -->
        <div class="w-full md:w-1/2 space-y-8">
          <div class="space-y-2">
            <h4 class="font-semibold">Koliko košta PRO verzija?</h4>
            <p class="text-slate-400">
              Godišnja cena Pro paketa je <strong>1.999 RSD</strong>. Plaćanje se vrši karticom ili uplatnicom, a korisnik dobija podršku i dodatne mogućnosti u odnosu na besplatnu verziju.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="font-semibold">Mogu li povezati svoj domen?</h4>
            <p class="text-slate-400">
              Da. Povezivanje sopstvenog domena (npr. mojbiznis.rs) je uključeno u Pro paket. Pomoći ćemo vam u celom procesu.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="font-semibold">Da li moj sajt ima SEO podršku?</h4>
            <p class="text-slate-400">
              Svaka PRO prezentacija koristi SEO-friendly strukturu, automatski meta opis, naslove i brzinu učitavanja optimizovanu za Google pretragu.
            </p>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="w-full md:w-1/2 space-y-8">
          <div class="space-y-2">
            <h4 class="font-semibold">Koje dodatne sekcije dobijam?</h4>
            <p class="text-slate-400">
              U Pro paketu dobijaš sekcije kao što su PDF cenovnik, video prezentacija, prošireni kontakt formular, dodatni proizvodi/usluge, galerija i više.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="font-semibold">Mogu li ažurirati sadržaj naknadno?</h4>
            <p class="text-slate-400">
              Da, uvek možete tražiti izmene. Takođe možete se odlučiti za administratorski panel uz nadoknadu, kako biste sami upravljali sadržajem.
            </p>
          </div>

          <div class="space-y-2">
            <h4 class="font-semibold">Da li dobijam podršku?</h4>
            <p class="text-slate-400">
              Pro korisnici imaju prioritetnu podršku putem e-maila i WhatsApp-a. Svi zahtevi se rešavaju u najkraćem roku, uključujući tehničke i sadržajne izmene.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full bg-purple-900 text-white text-center py-6 px-4 mt-10 rounded shadow-lg">
  <h3 class="text-xl font-semibold mb-2">Tvoj profesionalni sajt – spreman za par minuta</h3>
  <p class="mb-4">Klikni ispod i započni izradu PRO prezentacije odmah. Bićeš vođen kroz proces.</p>

  <!-- Dugme za kreiranje prezentacije -->
  <router-link
    to="/pro-site-form"
    class="inline-block bg-white text-purple-700 font-bold px-6 py-2 rounded hover:bg-slate-100 transition mb-3"
  >
    <button
      type="button"
      class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group"
    >
      Kreiraj PRO prezentaciju
      <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
    </button>
  </router-link>

  <!-- Dugme za pregled demo verzije -->
  <router-link
    to="/prezentacije/demo-pro"
    class="inline-block bg-transparent text-white font-medium px-6 py-2 rounded border border-white hover:bg-white hover:text-purple-700 transition"
  >
    Pogledaj demo verziju
  </router-link>
</div>


      <SupportCTA />
      <Footer />
    </div>
  </div>
</section>
    </div>
    
    
</template>

<script>
import Particles from '../partials/Particles.vue'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'
import SupportCTA from '../partials/SupportCTA.vue'

export default {
  name: 'ServiceProSite',
  components: {
    Particles,
    Header,
    Footer,
    SupportCTA
  },
  mounted() {
    console.log('Otvorena usluga: prosite')
  },
}
</script>
