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
          <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">✔️ Upravljanje klijentima, fakturama, zalihama, zadacima i više.</div>
          <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">ERP sistemi i poslovne aplikacije po tvojoj meri</h1>
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
            <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Bez viška funkcija – bez manjka kontrole</h2>
          </div>

          <div class="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
            <figure class="min-w-[240px]">
              <img class="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src="../images/team.jpg" width="420" height="280" alt="Team" />
            </figure>
            <div class="max-w-[548px] mx-auto">
              <div class="text-slate-400 space-y-6">
                <p>
                    🧠 <strong>Automatizuj svoje poslovanje.</strong><br>
                    Više nema potrebe za Excel fajlovima i ručnim unosima – ERP sistem povezuje sve aspekte tvog poslovanja i automatizuje ponavljanje zadatke.
                </p>

                <p>
                    📊 <strong>Dashboard sa ključnim metrikama.</strong><br>
                    Pregled prihoda, troškova, otvorenih faktura i statusa zaliha na jednom mestu – uvek ažurno, u realnom vremenu.
                </p>

                <p>
                    👥 <strong>Upravljanje klijentima i timom.</strong><br>
                    CRM funkcije za praćenje potencijalnih i postojećih klijenata, kao i dodavanje zadataka zaposlenima – sve u jednoj aplikaciji.
                </p>

                <p>
                    🧾 <strong>Fakture i finansije.</strong><br>
                    Brzo kreiranje ponuda i faktura, slanje PDF dokumenata, evidencija uplata, povezivanje sa knjigovodstvom – sve je pokriveno.
                </p>

                <p>
                    📦 <strong>Zalihe i narudžbine.</strong><br>
                    Prati stanje magacina, dobavljače, isporuke i nabavke. Sistem šalje obaveštenja kada se roba približi minimalnim zalihama.
                </p>

                <p>
                    🔌 <strong>Povezivanje sa drugim sistemima.</strong><br>
                    ERP možemo integrisati sa eCommerce rešenjem, API servisima, bankama i eksternim knjigovodstvenim softverom.
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
                <h4 class="font-semibold">Ko može koristiti ERP sistem?</h4>
                <p class="text-slate-400">Svi koji žele da centralizuju i digitalizuju svoje poslovanje – mala preduzeća, agencije, firme sa više sektora ili timova.</p>
                </div>

                <div class="space-y-2">
                <h4 class="font-semibold">Da li podržavate više nivoa korisnika?</h4>
                <p class="text-slate-400">Da. Moguće je kreirati različite uloge kao što su menadžer, zaposleni, knjigovođa, klijent – sa kontrolom pristupa.</p>
                </div>

                <div class="space-y-2">
                <h4 class="font-semibold">Koliko traje implementacija?</h4>
                <p class="text-slate-400">Jednostavni sistemi mogu biti gotovi za 10 dana, dok napredni ERP moduli zahtevaju 3–5 nedelja uključujući testiranje i obuku.</p>
                </div>

            </div>

            <!-- Kolona 2 -->
            <div class="w-full md:w-1/2 space-y-8">

                <div class="space-y-2">
                <h4 class="font-semibold">Da li je moguće povezivanje sa mojim postojećim sistemom?</h4>
                <p class="text-slate-400">Da. Ako koristiš neki CRM, prodavnicu, knjigovodstveni softver – možemo obezbediti integraciju putem API-ja ili direktno kroz bazu.</p>
                </div>

                <div class="space-y-2">
                <h4 class="font-semibold">Ko je vlasnik podataka?</h4>
                <p class="text-slate-400">Ti. Svi podaci se nalaze u tvojoj bazi, sa potpunim pristupom i mogućnošću izvoza ili migracije.</p>
                </div>

                <div class="space-y-2">
                <h4 class="font-semibold">Da li nudite podršku i obuku?</h4>
                <p class="text-slate-400">Naravno. Uključen je onboarding, obuka za tim i tehnička podrška tokom implementacije i nakon pokretanja.</p>
                </div>

            </div>

        </div>

      </div>
          <!-- CTA Bar -->
        <div class="w-full bg-purple-900 text-white text-center py-6 px-4 mt-10 rounded shadow-lg">
            <h3 class="text-xl font-semibold mb-2">Naš i vaš razvoj - ERP rešenja</h3>
            <p class="mb-4">Sve u jednom panelu, potpuno prilagodljivo i povezivo sa tvojim postojećim procesima.</p>
            <a
                href="#"
                target="_blank"
                class="inline-block bg-white text-purple-700 font-bold px-6 py-2 rounded hover:bg-slate-100 transition"
            >
            <button type="submit" class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-xs group">
               Moć Softvera<span class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
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
  name: 'ServiceErp',
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