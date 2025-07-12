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
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">✔️ Potpuno besplatno za 20 do 100 proizvoda</div>
          <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">MyMaXico – besplatna online prodavnica</h1>
          <!-- Rings illustration -->
          <div class="inline-flex items-center justify-center relative">
            <!-- Particles animation -->
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

  <!-- Second section -->
  <section class="relative">

    <!-- Blurred shape -->
    <div class="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
        <defs>
          <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
            <stop offset="0%" stop-color="#A855F7"></stop>
            <stop offset="100%" stop-color="#6366F1" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
        <path fill="url(#bs4-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
      </svg>
    </div>

    <div class="px-4 sm:px-6">
      <div class="max-w-5xl mx-auto">
        <div class="pb-12 md:pb-20">

          <!-- Section header -->
          <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Jedinstveno rešenje za e-trgovinu</h2>
          </div>

          <div class="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
            <figure class="min-w-[240px]">
              <img class="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src="../images/team.jpg" width="420" height="280" alt="Team" />
            </figure>
            <div class="max-w-[548px] mx-auto">
              <div class="text-slate-400 space-y-6">
                <p>
                  Pokreni svoju prodavnicu danas – bez ikakvog ulaganja! MyMaXico je moderno, brzo i skalabilno e-commerce rešenje za male 
                  preduzetnike i hobiste, ali i velike trgovce. Bez registracije domena, bez zakupa hostinga, bez stresa.             
                </p>
                <p>
                   Potpuno besplatno za 20 do 100 proizvoda, ne plaćaš ni domen, ni hosting – sve je uključeno! Idealno za male proizvođače, zanatlije, umetnike i lokalne prodavce. Kada porasteš, lako prelaziš na profesionalni plan bez gubitka sadržaja.</p>
                <p>
                  Brzo pokretanje – odmah po registraciji sistem automatski kreira tvoju online prodavnicu nakon prijave.Nema potrebe za tehničkim znanjem – sve funkcioniše "iz kutije". Prve proizvode možeš dodati za manje od 5 minuta! </p>
                <p>
                  Predefinisani moderni dizajni. Možeš izabrati jedan od nekoliko dizajna prilagođenih mobilnim uređajima. Dizajni su pažljivo optimizovani za preglednost, konverziju i jednostavnu navigaciju.Kasnije možeš prilagođavati boje, logo i strukturu u skladu sa svojim brendom.</p>
                <p>
                  Funkcionalnosti: korpa, naplata, SEO, mobilna verzija. Tvoja prodavnica dolazi sa kompletnim sistemom korpe, checkout-a i upravljanja porudžbinama. Optimizovana je za Google pretragu – meta tagovi, canonical URL-ovi i brzo učitavanje. Sve stranice su prilagođene mobilnim uređajima, tako da tvoja prodaja ide glatko sa telefona i tableta.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
   <section id="faq" class="relative">

    <!-- Blurred shape -->
    <div class="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
        <defs>
          <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
            <stop offset="0%" stop-color="#6366F1" />
            <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path fill="url(#bs3-a)" fill-rule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div>
            <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">Najčešća pitanja
            </div>
          </div>
          <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Sve što treba da znate</h2>
        </div>

        <!-- Columns -->
        <div class="md:flex md:space-x-12 space-y-8 md:space-y-0">

          <!-- Column -->
          <div class="w-full md:w-1/2 space-y-8">

            <!-- Item -->
            <div class="space-y-2">
              <h4 class="font-semibold">Da li je zaista besplatno da otvorim svoju online prodavnicu?</h4>
              <p class="text-slate-400">Da, potpuno besplatno. MyMaXico omogućava da pokreneš prodavnicu sa 20 do 100 proizvoda bez plaćanja hostinga, domena ili mesečnih pretplata. Idealno za početnike, male brendove i hobiste, ali i velike sisteme</p>
            </div>

            <!-- Item -->
            <div class="space-y-2">
              <h4 class="font-semibold">Kako funkcioniše plaćanje? Da li MyMaXico uzima proviziju?</h4>
              <p class="text-slate-400">MyMaXico koristi Stripe(https://stripe.com/) za obradu plaćanja. Kada kupac izvrši uplatu, sredstva se prvo prebacuju na tvoj Stripe račun, a zatim se automatski prebacuju na tvoj bankovni račun. MyMaXico ne uzima proviziju na tvoje prodaje.</p>
            </div>

            <!-- Item -->
            <div class="space-y-2">
              <h4 class="font-semibold">Da li moram imati svoj domen ili hosting?</h4>
              <p class="text-slate-400">Ne, MyMaXico obezbeđuje sve što ti je potrebno da pokreneš svoju online prodavnicu, uključujući besplatan domen i hosting. Možeš se fokusirati na prodaju svojih proizvoda bez brige o tehničkim detaljima.</p>
            </div>
          </div>

          <!-- Column -->
          <div class="w-full md:w-1/2 space-y-8">

            <!-- Item -->
            <div class="space-y-2">
              <h4 class="font-semibold">Koliko brzo mogu da pokrenem prodavnicu?</h4>
              <p class="text-slate-400">Možeš pokrenuti svoju prodavnicu u roku od nekoliko minuta. Proces registracije je jednostavan i brz, a nakon što postaviš svoje proizvode, tvoja prodavnica će biti spremna za rad.</p>
            </div>

            <!-- Item -->
            <div class="space-y-2">
              <h4 class="font-semibold">Da li dobijam svoj dizajn i branding?</h4>
              <p class="text-slate-400">Da, MyMaXico ti omogućava da prilagodiš izgled svoje prodavnice prema svojim potrebama. Možeš dodati svoj logo, odabrati boje i fontove koji odgovaraju tvom brendu, i tako stvoriti jedinstveno iskustvo za svoje kupce.</p>
            </div>

            <!-- Item -->
            <div class="space-y-2">
              <h4 class="font-semibold">Kome je namenjen MyMaXico?</h4>
              <p class="text-slate-400">MyMaXico je namenjen svima koji žele da pokrenu svoju online prodavnicu, bez obzira na nivo iskustva. Idealno je rešenje za preduzetnike, male brendove, umetnike i hobiste koji žele da prodaju svoje proizvode na internetu, a takođe i za velike trgovce koji žele da prošire svoje poslovanje.</p>
            </div>

          </div>

        </div>

      </div>
          <!-- CTA Bar -->
<div class="w-full bg-purple-900 text-white text-center py-6 px-4 mt-10 rounded shadow-lg">
  <h3 class="text-xl font-semibold mb-2">Želiš da pokreneš svoju online prodavnicu?</h3>
  <p class="mb-4">Registruj se odmah i koristi MyMaXico potpuno besplatno!</p>
  <a
    href="https://mymaxico.com/seller/login"
    target="_blank"
    class="inline-block bg-white text-purple-700 font-bold px-6 py-2 rounded hover:bg-slate-100 transition"
  >
  <button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group">
    Registruj se – isprobaj besplatno <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
  </button>
</a>
</div>

       <SupportCTA />        <!-- 🆕 Poziv korisnicima da kontaktiraju ili pretraže bazu pomoći -->

       <!-- ✅ Donji deo sajta (footer) -->
    <Footer />
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
  name: 'ServiceMymaxico',
  components: {
    Particles,
    Header,
    Footer,
    SupportCTA
  },
  props: ['slug'],
  mounted() {
    console.log('Otvorena usluga:', this.slug)
    // Na osnovu slug-a možeš menjati sadržaj
  },
  
}
</script>