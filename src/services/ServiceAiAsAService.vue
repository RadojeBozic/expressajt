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
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">✔️ Integracija veštačke inteligencije za generisanje sadržaja, SEO optimizaciju, chatbot podršku i automatizaciju.</div>
          <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">AI kao servis – tvoj digitalni asistent 24/7</h1>
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
            <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">AI - rešenja za portale, e-trgovine, interne sisteme i više.</h2>
          </div>

          <div class="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
            <figure class="min-w-[240px]">
              <img class="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src="../images/team.jpg" width="420" height="280" alt="Team" />
            </figure>
            <div class="max-w-[548px] mx-auto">
             <div class="text-slate-400 space-y-6">
                <p>
                    ✍️ <strong>Generisanje sadržaja.</strong><br>
                    Korišćenjem GPT tehnologije generišemo tekstove za blog, proizvode, opise stranica, meta naslove i još mnogo toga – automatski i u skladu sa tonom brenda.
                </p>

                <p>
                    🧠 <strong>SEO analiza i optimizacija.</strong><br>
                    AI pomaže u analizi postojećeg sadržaja, predlaže ključne reči, proverava duplikate i daje savete za bolji rang na Google-u.
                </p>

                <p>
                    🤖 <strong>Chatbot rešenja za korisničku podršku.</strong><br>
                    Trenirani asistenti za podršku koji odgovaraju na najčešća pitanja, povezuju se sa bazom podataka i dostupni su 24/7.
                </p>

                <p>
                    🔗 <strong>Integracija sa tvojim sistemima.</strong><br>
                    AI servisi mogu biti deo postojećeg sajta, admin panela ili CRM softvera – putem API konekcije ili ugrađene komponente.
                </p>

                <p>
                    🧩 <strong>Modularna rešenja.</strong><br>
                    Biraš samo ono što ti treba – od generisanja jednog paragrafa do celog sistema za automatizaciju korisničke podrške.
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

                <div class="space-y-2">
                <h4 class="font-semibold">Da li AI može da piše tekstove za moj sajt?</h4>
                <p class="text-slate-400">Da. Sistem generiše profesionalne tekstove na srpskom i drugim jezicima, uz optimizaciju za SEO i stil koji izabereš.</p>
                </div>

                <div class="space-y-2">
                <h4 class="font-semibold">Da li je AI sadržaj unikatan?</h4>
                <p class="text-slate-400">Da. Tekstovi su generisani u realnom vremenu i ne preuzimaju sadržaj sa drugih sajtova. Mogu se dodatno stilizovati ili korigovati.</p>
                </div>

                <div class="space-y-2">
                <h4 class="font-semibold">Mogu li integrisati AI chatbot na moj sajt?</h4>
                <p class="text-slate-400">Naravno. Chatbot može biti prikazan na sajtu, povezati se sa tvojom bazom i odgovarati na pitanja korisnika u realnom vremenu.</p>
                </div>
            </div>

            <div class="w-full md:w-1/2 space-y-8">

                <div class="space-y-2">
                <h4 class="font-semibold">Da li mogu testirati sistem pre kupovine?</h4>
                <p class="text-slate-400">Da. Možemo ti omogućiti demo za testiranje AI funkcionalnosti u okviru tvoje oblasti poslovanja.</p>
                </div>

                <div class="space-y-2">
                <h4 class="font-semibold">Koje AI servise koristite?</h4>
                <p class="text-slate-400">Koristimo OpenAI (ChatGPT, DALL·E), Google AI, kao i prilagođena rešenja za interne zadatke i analitiku.</p>
                </div>

                <div class="space-y-2">
                <h4 class="font-semibold">Koliko je bezbedno koristiti AI servis?</h4>
                <p class="text-slate-400">Svi AI servisi koriste enkripciju i GDPR politike. Tvoje podatke ne čuvamo bez pristanka i ne šaljemo ih trećim stranama.</p>
                </div>
            </div>
        </div>

      </div>
          <!-- CTA Bar -->
        <div class="w-full bg-purple-900 text-white text-center py-6 px-4 mt-10 rounded shadow-lg">
            <h3 class="text-xl font-semibold mb-2">Poveži se sa budućnošću.</h3>
            <p class="mb-4">Automatizuj, optimizuj i osvoji tržište uz AI alate prilagođene tvom poslovanju.</p>
            <a
                href="#"
                target="_blank"
                class="inline-block bg-white text-purple-700 font-bold px-6 py-2 rounded hover:bg-slate-100 transition"
            >
            <button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group">
                Zakaži besplatan AI demo<span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
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
  name: 'ServiceAiAsAService',
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