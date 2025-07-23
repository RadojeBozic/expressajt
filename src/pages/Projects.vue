<template>
   <section>
      <div class="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
         <Particles class="absolute inset-0 -z-10" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
          <img src="../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Hero Illustration">
        </div>
      </div>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
 <!-- ✅ Gornja navigacija (header sajta) -->
    <Header />
      <!-- Illustration -->
      <div class="pt-32 pb-16 md:pt-52 md:pb-32 ">
         <div class="min-h-screen bg-slate-900 text-white py-20 px-4 sm:px-6">
    <div class="max-w-5xl mx-auto">

<div class="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
         <Particles class="absolute inset-0 -z-10" />
  <div class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
          <img src="../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Hero Illustration">
        </div>
      </div>
       
      <h1 class="text-3xl font-bold mb-6 text-center">📁 Naši projekti</h1>
      <p class="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
        Pregled dostupnih rešenja i sistema koje smo razvili. Svaki projekat ima svoju tehničku strukturu i koristi se kao nezavisna aplikacija ili modul u okviru šireg sistema.
      </p>

      <div class="space-y-6">
       
        <div
          v-for="project in projects"
          :key="project.id"
          class="border border-slate-700 rounded p-6 bg-slate-800 shadow hover:shadow-lg transition"
        >
          <h2 class="text-xl font-semibold text-purple-400">{{ project.title }}</h2>
          <p class="text-slate-300 text-sm italic mb-2">{{ project.subtitle }}</p>

          <details class="mt-2 text-slate-400">
            <summary class="cursor-pointer hover:underline">📖 Više o projektu</summary>
            <div class="mt-3 text-sm leading-relaxed whitespace-pre-line">
              {{ project.description }}
            </div>
          </details>

           <div class="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
            <Particles class="absolute inset-0 -z-10" />
            <div class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
          <img src="../images/glow-bottom.svg" class="max-w-none" width="2146" height="774" alt="Hero Illustration">
        </div>
      </div>
        </div>
       
      </div>
    </div>
  </div>
        <Footer />
      </div>
    </div>

  </section>
</template>

<script>
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'
import Particles from '../partials/Particles.vue'

export default {
  name: 'Projects',
  components: {
    Header,
    Footer,
    Particles, 
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'MyMaXico – besplatna online prodavnica',
          subtitle: 'Pokreni online prodaju bez troškova.',
          description: 'MyMaXico je kompletno rešenje za pokretanje maloprodajne online prodavnice sa opcijom integracije u multi-vendor sistem. Uključuje proizvode, porudžbine, korisnički panel, administraciju i naplatu.'
        },
        {
          id: 2,
          title: 'Jednim klikom do sajta',
          subtitle: 'Brza prezentacija firme bez tehničkog znanja.',
          description: 'Korisnik popunjava formular, bira šablon, sistem automatski generiše prezentaciju. Namenjeno malim firmama i preduzetnicima za brzi web nastup.'
        },
        {
          id: 3,
          title: 'Pro verzija sajta',
          subtitle: 'Napredna online prezentacija sa dodatnim sekcijama.',
          description: 'Omogućava dodavanje dodatnih kontakt podataka, PDF dokumenata, YouTube prezentacija i mape sa lokacijom. Idealno za firme koje žele ozbiljniji digitalni nastup.'
        },
        {
          id: 4,
          title: 'Online prodavnice & Multi-vendor',
          subtitle: 'Rešenja za pojedinačne i grupne prodavce.',
          description: 'Podrška za single-vendor i multi-vendor rešenja sa panelima za prodavce, statistiku, narudžbine, dostavu i naplatu.'
        },
        {
          id: 5,
          title: 'Web aplikacije i SaaS rešenja',
          subtitle: 'Aplikacije koje rešavaju konkretne potrebe.',
          description: 'Razvijamo prilagođene aplikacije: CRM, rezervacioni sistemi, zakazivanja, komunikacija, izveštaji i još mnogo toga.'
        },
        {
          id: 6,
          title: 'Mobilne aplikacije',
          subtitle: 'Android & iOS aplikacije povezane sa web backendom.',
          description: 'Kreiramo mobilne aplikacije za naručivanje, evidentiranje, komunikaciju i prezentaciju — kao dodatak web platformi ili nezavisno.'
        },
        {
          id: 7,
          title: 'ERP moduli i poslovne aplikacije',
          subtitle: 'Upravljanje firmom iz jednog panela.',
          description: 'Finansije, zalihe, fakture, partneri i projekti — sve u jednom centralizovanom sistemu za mikro, mala i srednja preduzeća.'
        },
        {
          id: 8,
          title: 'CMS i blog sistem',
          subtitle: 'Objavljujte sadržaj bez programiranja.',
          description: 'CMS sistem za vesti, edukacije, objave i blogove sa podrškom za kategorije, komentare, korisničke uloge i SEO podešavanja.'
        },
        {
          id: 9,
          title: 'AI kao servis',
          subtitle: 'Pametna rešenja na dohvat ruke.',
          description: 'Korišćenje AI alata u okviru naših aplikacija: automatizacija podrške, analiza podataka, kreiranje sadržaja, chatbotovi i drugi servisi.'
        }
      ]
    }
  }
}
</script>

