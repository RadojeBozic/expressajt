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
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">✔️ Potpuno besplatno napravi svoj sajt</div>
          <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">Jednim klikom do sajta – besplatna online prezentacija</h1>
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
            <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Kreiraj svoj sajt bez ikakvih troškova</h2>
          </div>

          <div class="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
            <figure class="min-w-[240px]">
              <img class="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src="../images/team.jpg" width="420" height="280" alt="Team" />
            </figure>
            <div class="max-w-[548px] mx-auto">
              <div class="text-slate-400 space-y-6">
                <p>
                    ⚡ Brzo pokretanje.
                    Izaberi dizajn, unesi sadržaj i objavi. Tvoj sajt je spreman za manje od 10 minuta. Bez instalacija, bez komplikacija.                </p>
                <p>
                    🎨 Moderni šabloni.
                    Na raspolaganju ti je kolekcija profesionalnih šablona prilagođenih za sve uređaje – laptop, tablet, telefon.     
                </p>
                <p>
                    🧩 Dodaci po izboru.
                    Dodaj galeriju, kontakt formu, mapu, biografiju ili ponudu – sve jednostavno i modularno.                </p>
                <p>
                    📱 Mobilna verzija automatski.
                    Tvoj sajt izgleda savršeno na svakom ekranu – bez dodatnog podešavanja. Responsive dizajn je standard.                </p>
                <p>
                    🌐 Tvoj link – odmah.
                    Dobićeš svoj poddomen tvoj-biznis.freesite.rs ili u nekoj drugoj formi – lako za deljenje i promociju.                
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
              <h4 class="font-semibold">Da li mi je potreban programer?</h4>
              <p class="text-slate-400">Ne. Sve se radi kroz vizuelni interfejs. Ne moraš znati kodiranje. Service FreeSite je dizajniran da bude jednostavan za korišćenje.</p>
            </div>

            <!-- Item -->
            <div class="space-y-2">
              <h4 class="font-semibold">Da li mogu da povežem svoj domen?</h4>
              <p class="text-slate-400">U besplatnoj verziji koristiš poddomen, a u Pro verziji možeš povezati svoj domen po želji. Ukoliko se odlučiš za Pro verziju, lako možeš povezati svoj domen putem kontrolne table. </p>
            </div>

            <!-- Item -->
            <div class="space-y-2">
              <h4 class="font-semibold">Koliko sekcija mogu da napravim?</h4>
              <p class="text-slate-400">U besplatnoj verziji imaš do 5 sekcija – naslovna, o meni, ponuda/usluge, kontakt i dodatak po izboru. U Pro verziji možeš dodati neograničen broj sekcija. U ponudi imamo preko 20 spremnih, najsavremenijih šablona, prilagođenih za različite delatnosti</p>
            </div>
          </div>

          <!-- Column -->
          <div class="w-full md:w-1/2 space-y-8">

            <!-- Item -->
            <div class="space-y-2">
              <h4 class="font-semibold">Koje tehnologije koristite?</h4>
              <p class="text-slate-400">Koristimo Laravel za backend i moderne frontend alate kao što su TailwindCSS i Vue.js. Ceo sistem je optimizovan za brzinu, SEO i bezbednost. Ne moraš da brineš o tehnologiji – tvoj sajt samo radi.</p>
            </div>

            <!-- Item -->
            <div class="space-y-2">
              <h4 class="font-semibold">Da li sajt mogu da uredim kasnije?</h4>
              <p class="text-slate-400">Naravno. Pristup sajtu je omogućen i posle objave – za izmene i ažuriranja. U besplatnoj varijanti možete očekivati ograničenja u broju sekcija i dizajnu, ali i dalje možete menjati sadržaj i slike.</p>
            </div>

            <!-- Item -->
            <div class="space-y-2">
              <h4 class="font-semibold">Koliko dugo mogu da koristim ovakav sajt besplatno?</h4>
              <p class="text-slate-400">Besplatna verzija sajta nema vremensko ograničenje. Možeš je koristiti koliko god želiš, dok god poštuješ pravila korišćenja. Ako ti bude trebalo više opcija, možeš lako preći na napredni paket bez gubitka sadržaja.</p>
            </div>

          </div>

        </div>

      </div>
          <!-- CTA Bar -->
<div class="w-full bg-purple-900 text-white text-center py-6 px-4 mt-10 rounded shadow-lg">
  <h3 class="text-xl font-semibold mb-2">Bez programera. Bez plaćanja. Bez problema.</h3>
  <p class="mb-4">Klikni ispod i započni besplatnu prezentaciju svog posla ili hobija.</p>
 <router-link
  to="/free-site-form"
  class="inline-block bg-white text-purple-700 font-bold px-6 py-2 rounded hover:bg-slate-100 transition"
>
  <button type="button" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group">
    Pokreni svoj sajt odmah – bez čekanja!
    <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
  </button>
</router-link>
<!-- Dugme za pregled demo verzije -->
  <router-link
    to="/demo"
    class="inline-block bg-transparent text-white font-medium px-6 py-2 rounded border border-white hover:bg-white hover:text-purple-700 transition"
  >
    Pogledaj demo verziju
  </router-link>
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
  name: 'ServiceFreeSite',
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