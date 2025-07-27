<template>
  <div class="flex flex-col min-h-screen bg-slate-900 text-white">
    <Header />
    <main class="grow pt-32 pb-20 px-4 sm:px-6 max-w-6xl mx-auto relative">
      <Particles class="absolute inset-0 -z-10" />
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold">📁 Naši Express projekti</h1>
        <p class="text-slate-400 max-w-2xl mx-auto mt-4">
          Pogledajte dostupne sisteme i usluge koje nudimo — svaki projekat je prilagođen realnim potrebama klijenata.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-lg hover:shadow-purple-700 transition"
        >
          <h2 class="text-xl font-semibold text-purple-400 mb-1">{{ project.title }}</h2>
          <p class="text-slate-300 text-sm italic mb-2">{{ project.subtitle }}</p>
          <details class="text-slate-400 mt-2 text-sm">
            <summary class="cursor-pointer hover:underline">📖 Više o projektu</summary>
            <div class="mt-3 whitespace-pre-line leading-relaxed">
              {{ project.description }}
            </div>
          </details>
        </div>
      </div>
    </main>
    <Footer />
  </div>
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
    Particles
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Express FREE sajt',
          subtitle: 'Sajt za 5 minuta – besplatno i bez kodiranja.',
          description: 'Korisnik popunjava formular, bira šablon, sistem generiše prezentaciju. Namenjeno malim firmama i pojedincima.'
        },
        {
          id: 2,
          title: 'Express PRO sajt',
          subtitle: 'Napredna online prezentacija za ozbiljan nastup.',
          description: 'Dodaj PDF, video, dodatne sekcije, kontakt i više – uz SEO i podršku.'
        },
        {
          id: 3,
          title: 'Express W3 sajt',
          subtitle: 'Unikatna poslovna prezentacija za 1 dan.',
          description: 'Brza izrada preko W3Schools šablona — jednostavno, pregledno, mobilno.'
        },
        {
          id: 4,
          title: 'Express CRUIP sajt',
          subtitle: 'Moderne i animirane prezentacije.',
          description: 'Na bazi Cruip dizajna – za tehnološke, startup i SaaS klijente.'
        },
        {
          id: 5,
          title: 'Express Original sajt',
          subtitle: 'Sajt po meri – dizajn i funkcije od nule.',
          description: 'Prilagođena rešenja za zahtevne klijente i specifične industrije.'
        },
        {
          id: 6,
          title: 'Express Basic Shop',
          subtitle: 'Online prodavnica sa osnovnim funkcijama.',
          description: 'Korpa, checkout, admin panel, SEO – sve što treba za start.'
        },
        {
          id: 7,
          title: 'Express UNI Shop',
          subtitle: 'Napredni multi-vendor ili B2B sistem.',
          description: 'Marketplace, dashboard za prodavce, filteri, Stripe i više jezika.'
        },
        {
          id: 8,
          title: 'Domen & hosting usluga',
          subtitle: 'Pomoć pri kupovini i povezivanju domena.',
          description: 'Nabavka i povezivanje domena, hostinga, SSL sertifikata i emaila.'
        },
        {
          id: 9,
          title: 'Održavanje sajta',
          subtitle: 'Tehnička podrška, SEO, backup i izmene.',
          description: 'Mesečne ili jednokratne usluge održavanja, sigurnosti i ažuriranja.'
        }
      ]
    }
  }
}
</script>
