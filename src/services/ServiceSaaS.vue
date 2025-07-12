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
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">✔️ Mi gradimo budućnost</div>
          <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">Napredne Web aplikacije i SaaS sistemi po meri korisnika</h1>
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
            <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Web prezentacije po svačijoj meri</h2>
          </div>

          <div class="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
            <figure class="min-w-[240px]">
              <img class="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src="../images/team.jpg" width="420" height="280" alt="Team" />
            </figure>
            <div class="max-w-[548px] mx-auto">
              <div class="text-slate-400 space-y-6">
                <p>
                    🛍️ <strong>SaaS sistemi sa pretplatama, ulogama, korisničkim panelima.</strong><br>
                    Naša rešenja omogućavaju lako upravljanje korisnicima, njihovim ulogama i pretplatama. Sve je prilagodljivo i može se lako integrisati sa postojećim sistemima. Komunikacija sa korisnicima je jednostavna, a paneli su intuitivni i prilagođeni potrebama svakog korisnika.
                </p>

                <p>
                    🧑‍🤝‍🧑 <strong>Admin šabloni poput mosaic-admin dostupni za demo testiranje.</strong><br>
                    Korišćenjem ovih šablona, možeš brzo postaviti i prilagoditi svoj admin panel prema potrebama svog biznisa. Sve funkcionalnosti su već integrisane, a ti samo biraš koje ćeš koristiti. Ovaj pristup štedi vreme i resurse, omogućavajući ti da se fokusiraš na razvoj svog proizvoda.
                </p>

                <p>
                    ⚙️ <strong>Povezivanje sa eksternim servisima: Mailchimp, Stripe, OpenAI, AWS itd.</strong><br>
                    Naša rešenja omogućavaju lako povezivanje sa najpopularnijim servisima za slanje emailova, naplatu, veštačku inteligenciju i skladištenje podataka. Sve integracije su jednostavne za implementaciju i omogućavaju ti da brzo proširiš funkcionalnosti svog sistema.
                </p>

                <p>
                    💳 <strong>GBS Platform je razvijena korišćenjem istih tehnologija – prikaz potencijala u praksi</strong><br>
                    Naša platforma je primer kako se moderne web tehnologije mogu koristiti za izgradnju skalabilnih i efikasnih SaaS rešenja. Korišćenjem Vue.js, Node.js i drugih savremenih alata, omogućavamo brzu i pouzdanu izradu aplikacija koje zadovoljavaju potrebe korisnika.
                </p>

                <p>
                    📊 <strong>SEO optimizacija.</strong><br>
                    Naša rešenja su optimizovana za pretraživače, što omogućava bolju vidljivost i rangiranje na Google-u. Koristimo najbolje prakse SEO-a, uključujući optimizaciju sadržaja, strukture sajta i brzine učitavanja, kako bismo osigurali da tvoje rešenje bude lako pronađeno od strane korisnika.
                </p>

                <p>
                    📱 <strong>Mobilna podrška i responsive.</strong><br>
                    Sva naša rešenja su dizajnirana da budu potpuno responsive, što znači da će izgledati i funkcionisati odlično na svim uređajima – od desktop računara do mobilnih telefona. Ovo osigurava da tvoji korisnici imaju najbolje moguće iskustvo bez obzira na to kako pristupaju tvojoj aplikaciji.
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

<!-- ✅ FAQ blok za Web aplikacije i SaaS rešenja -->
<div class="md:flex md:space-x-12 space-y-8 md:space-y-0 mt-16 border-t border-slate-700 pt-12">

  <!-- Kolona 1 -->
  <div class="w-full md:w-1/2 space-y-8">

    <div class="space-y-2">
      <h4 class="font-semibold">Da li mogu upravljati aplikacijom bez programera?</h4>
      <p class="text-slate-400">Da. Naš sistem dolazi sa administrativnim panelom (poput Mosaic Admin) gde bez koda upravljaš korisnicima, sadržajem i podešavanjima.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Da li je moguća pretplata (subscription) za korisnike?</h4>
      <p class="text-slate-400">Da. SaaS modeli koje pravimo podržavaju mesečne, godišnje i prilagođene pretplate uz integraciju sa Stripe i PayPal sistemima.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Da li dobijam svoju bazu i admin pristup?</h4>
      <p class="text-slate-400">Naravno. Svaki klijent ima svoju izolovanu bazu i pristup sa punim ovlašćenjima za uvid, izvoz i upravljanje podacima.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Koliko korisnika može koristiti moju aplikaciju?</h4>
      <p class="text-slate-400">Naše aplikacije su skalabilne i spremne za stotine, pa i hiljade korisnika bez kompromisa u performansama.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Da li je moguće imati više uloga (admin, klijent, agent)?</h4>
      <p class="text-slate-400">Da. Sistemi podržavaju višestruke korisničke uloge sa odvojenim pristupima i pravima – uključujući SuperAdmin, Admin, Editor, Korisnik i više.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Da li mogu imati demo verziju za testiranje?</h4>
      <p class="text-slate-400">Da. Po zahtevu obezbeđujemo demo okruženje ili odvojeni instance sistema za testiranje pre ugovora i produkcije.</p>
    </div>

  </div>

  <!-- Kolona 2 -->
  <div class="w-full md:w-1/2 space-y-8">

    <div class="space-y-2">
      <h4 class="font-semibold">Da li mogu koristiti moj domen?</h4>
      <p class="text-slate-400">Naravno. Povezujemo vašu aplikaciju sa bilo kojim domenom ili subdomenom uz SSL podršku i automatski HTTPS.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Mogu li ubaciti sopstveni dizajn ili šablon?</h4>
      <p class="text-slate-400">Da. Možemo koristiti tvoj dizajn (Figma/HTML) ili prilagoditi neki od naših modernih Tailwind/Bootstrap šablona.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Ko je vlasnik aplikacije i podataka?</h4>
      <p class="text-slate-400">Ti si vlasnik svega. Aplikacija se razvija za tvoje potrebe i svi podaci ostaju isključivo tvoje vlasništvo.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Da li podržavate povezivanje sa API servisima?</h4>
      <p class="text-slate-400">Da. Povezujemo aplikacije sa eksternim servisima (OpenAI, Stripe, Mailchimp, ERP, CRM...) i omogućavamo tvoj sopstveni API.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Postoji li podrška za višejezičnost?</h4>
      <p class="text-slate-400">Da. Sistemi su pripremljeni za više jezika sa lokalizacijom korisničkog interfejsa, email šablona i SEO sadržaja.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Da li mogu razvijati aplikaciju fazno?</h4>
      <p class="text-slate-400">Apsolutno. Prvo dobijate MVP verziju (Minimum Viable Product), a kasnije se modularno dodaju funkcionalnosti u skladu s rastom.</p>
    </div>

  </div>

</div>



      </div>
          <!-- CTA Bar -->
<div class="w-full bg-purple-900 text-white text-center py-6 px-4 mt-10 rounded shadow-lg">
  <h3 class="text-xl font-semibold mb-2">Želiš da se bitno razlikuješ od konkurencije?</h3>
  <p class="mb-4">Naruči najsavremenije Web i SaaS rešenje!</p>
  <a
    href="#"
    target="_blank"
    class="inline-block bg-white text-purple-700 font-bold px-6 py-2 rounded hover:bg-slate-100 transition"
  >
  <button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group">
    Mosaic-admin demo <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
  </button>
</a>
 <a
    href="#"
    target="_blank"
    class="inline-block bg-white text-purple-700 font-bold px-6 py-2 rounded hover:bg-slate-100 transition"
  >
  <button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group">
    Pogledaj naše šablone <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
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
  name: 'ServiceSaaS',
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