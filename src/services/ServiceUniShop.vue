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
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">✔️ Mi gradimo i jedno i drugo – po tvojoj meri</div>
          <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">Moćna online prodavnica ili Multi-vendor platforma?</h1>
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
            <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Ako želiš da pokreneš tržište poput Amazona – imamo rešenje</h2>
          </div>

          <div class="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
            <figure class="min-w-[240px]">
              <img class="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src="../images/team.jpg" width="420" height="280" alt="Team" />
            </figure>
            <div class="max-w-[548px] mx-auto">
              <div class="text-slate-400 space-y-6">
                <p>
                    🛍️ <strong>Online prodavnica – po tvojoj meri.</strong><br>
                    Pokreni sopstvenu e-commerce prodavnicu bez potrebe za dodatnim alatima. Sve što ti je potrebno – od prikaza proizvoda, korpe, poručivanja, do automatizovanih e-mail obaveštenja – već je uključeno. Naša rešenja su optimizovana za SEO i brzo učitavanje, tako da tvoja prodaja raste prirodno.
                </p>

                <p>
                    🧑‍🤝‍🧑 <strong>Multi-vendor platforme za veće tržište.</strong><br>
                    Ako želiš da pokreneš sistem kao što je Amazon ili Etsy – gde više prodavaca objavljuje svoje proizvode – razvijamo moćne Multi-vendor platforme. Svaki vendor dobija svoj admin panel, a ti kao vlasnik imaš centralnu kontrolu nad kompletnom platformom, porudžbinama, plaćanjima i statistikama.
                </p>

                <p>
                    ⚙️ <strong>Skalabilnost bez ograničenja.</strong><br>
                    Naš sistem podnosi hiljade proizvoda, kategorija i korisnika. Zahvaljujući modernoj arhitekturi, platforma raste zajedno s tvojim biznisom – bez zastoja i bez gubitka performansi. Koristiš samo ono što ti treba, a ostalo se može uključiti kada bude vreme.
                </p>

                <p>
                    💳 <strong>Direktna i sigurna naplata uz Stripe i druge metode.</strong><br>
                    Kupci plaćaju bezbedno karticama ili drugim metodama, a novac stiže direktno na tvoj račun – bez posrednika i bez provizije od nas. Stripe garantuje najviši nivo sigurnosti uz PCI-DSS standard i 3D Secure zaštitu.
                </p>

                <p>
                    📊 <strong>Napredna analitika i kontrola.</strong><br>
                    Prati učinak svake kategorije, proizvoda i prodavca uz detaljan dashboard. Pored osnovne statistike, dodajemo i pregled konverzija, najposećenijih stranica, prosečne vrednosti porudžbine i još mnogo toga – sve vizuelno i pregledno.
                </p>

                <p>
                    📱 <strong>Mobilna podrška i opcionalna aplikacija.</strong><br>
                    Tvoja prodavnica je responsive – savršeno izgleda na svim uređajima. A ako želiš još više, možemo razviti Android/iOS aplikaciju prilagođenu upravo tvojoj niši. Kupci mogu kupovati u pokretu, a prodavci upravljati prodajom iz džepa.
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

       <!-- ✅ Dodatni FAQ blok za napredni shop/multivendor -->
<div class="md:flex md:space-x-12 space-y-8 md:space-y-0 mt-16 border-t border-slate-700 pt-12">

  <!-- Kolona 1 -->
  <div class="w-full md:w-1/2 space-y-8">

    <div class="space-y-2">
      <h4 class="font-semibold">Da li mogu sam da dodajem proizvode?</h4>
      <p class="text-slate-400">Da. Dobijaš pristup svom panelu gde možeš unositi, uređivati i brisati proizvode, kao i pratiti porudžbine i korisnike u realnom vremenu.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Podržavate više prodavaca?</h4>
      <p class="text-slate-400">Da, Multi-vendor sistem omogućava neograničen broj prodavaca, sa pojedinačnim pristupom, pravima i mogućnošću upravljanja putem Admin panela.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Kako se vrši naplata?</h4>
      <p class="text-slate-400">Sistem koristi Stripe i druge metode. Plaćanja idu direktno prodavcima ili na centralni nalog, u zavisnosti od tvoje poslovne politike.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Da li mogu imati više jezika i valuta?</h4>
      <p class="text-slate-400">Naravno. Multi-vendor sistem je pripremljen za internacionalizaciju. Možeš koristiti lokalne jezike i prikazivati cene u više valuta sa automatskom konverzijom.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Koliko brzo se može pokrenuti sistem?</h4>
      <p class="text-slate-400">Samostalna prodavnica može biti online za 10–15 radna dana. Multi-vendor sistem se kompletira za 15–20 dana, uključujući testiranje i inicijalnu obuku.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Da li je dizajn prilagodljiv?</h4>
      <p class="text-slate-400">Da. Možeš koristiti sopstvene boje, fontove i logotipe ili odabrati neki od unapred definisanih šablona. Dizajn je potpuno responsive.</p>
    </div>

  </div>

  <!-- Kolona 2 -->
  <div class="w-full md:w-1/2 space-y-8">

    <div class="space-y-2">
      <h4 class="font-semibold">Mogu li praviti akcije i promocije?</h4>
      <p class="text-slate-400">Da. Sistem omogućava popuste, kupon kodove, istaknute proizvode, kao i podešavanje sezonskih kampanja i vremenski ograničenih ponuda.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Postoji li mobilna aplikacija?</h4>
      <p class="text-slate-400">Možemo razviti nativnu aplikaciju za Android/iOS ili prilagoditi sajt kao progresivnu web aplikaciju (PWA). Idealno za brz pristup i notifikacije.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Ko je vlasnik podataka?</h4>
      <p class="text-slate-400">Svi podaci su tvoji – proizvodi, korisnici, narudžbine. Možeš ih izvesti u CSV ili JSON formatu i koristiti za analitiku, backup ili migraciju.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Mogu li povezati sa društvenim mrežama?</h4>
      <p class="text-slate-400">Da. Možeš integrisati Facebook Shop, Instagram katalog, dodati deljenje proizvoda na društvene mreže i ugraditi Facebook Pixel.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Da li sistem podržava B2B prodaju?</h4>
      <p class="text-slate-400">Da. Multi-vendor sistem podržava B2B prodaju sa posebnim funkcionalnostima za veleprodaju. Takođe, Multi-vendor sistem se moće posmatrati kao online Shopping Mall.</p>
    </div>

    <div class="space-y-2">
      <h4 class="font-semibold">Mogu li migrirati sa druge platforme (Shopify, WooCommerce)?</h4>
      <p class="text-slate-400">Naravno. Nudimo uslugu prebacivanja proizvoda, kategorija i korisnika sa drugih platformi – brzo i bez gubitka podataka.</p>
    </div>

  </div>

</div>


      </div>
          <!-- CTA Bar -->
<div class="w-full bg-purple-900 text-white text-center py-6 px-4 mt-10 rounded shadow-lg">
  <h3 class="text-xl font-semibold mb-2">Želiš da pokreneš svoju online prodavnicu?</h3>
  <p class="mb-4"> Registruj se i pokreni postupak za svoju prodavnicu danas!</p>
  <a
    href="https://agro-shop.in.rs/"
    target="_blank"
    class="inline-block bg-white text-purple-700 font-bold px-6 py-2 rounded hover:bg-slate-100 transition"
  >
  <button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group">
    Primer klasične prodavnice <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
  </button>
</a>
 <a
    href="https://mymaxico.com"
    target="_blank"
    class="inline-block bg-white text-purple-700 font-bold px-6 py-2 rounded hover:bg-slate-100 transition"
  >
  <button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group">
    Marketplace – veleprodaja i multi-vendor <span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
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
  name: 'ServiceOnlineShop',
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