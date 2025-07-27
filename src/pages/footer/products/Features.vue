<template>
  <section>
    <!-- Particles background -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Glow background" />
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto mt-4">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-5xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">✨ Express Sajt – ponuda i mogućnosti</h1>
          <p class="text-slate-400 text-center mb-12">
            Express Sajt je modularna platforma za izradu sajta, prezentacije i e-prodavnica, uz dodatne opcije i usluge po potrebi korisnika.
          </p>

          <ul class="space-y-6">
            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Express FREE sajt</h2>
              <p class="text-slate-300 text-sm mt-1">Besplatan sajt za 5–10 minuta – bez programiranja, sa odabirom šablona i jednostavnim unosom sadržaja.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Express PRO sajt</h2>
              <p class="text-slate-300 text-sm mt-1">Napredna prezentacija sa dodatnim sekcijama, PDF dokumentima, mapom, video sadržajem i proširenim kontaktom.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Express W3 sajt</h2>
              <p class="text-slate-300 text-sm mt-1">Brza izrada sajta u roku od jednog dana koristeći jednostavne i čiste W3CSS šablone – idealno za preduzetnike.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Express CRUIP sajt</h2>
              <p class="text-slate-300 text-sm mt-1">Moderne web prezentacije sa vrhunskim UI dizajnom, interaktivnim sekcijama i animacijama. Vreme izrade 4–5 dana.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Express Original sajt</h2>
              <p class="text-slate-300 text-sm mt-1">Kompletno ručno izrađen sajt, prema zahtevu klijenta. Unikatan dizajn, logika i sadržaj.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Express Basic Shop</h2>
              <p class="text-slate-300 text-sm mt-1">Online prodavnica sa osnovnim funkcijama: dodavanje proizvoda, korpa, checkout i SEO optimizacija.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Express UNI Shop</h2>
              <p class="text-slate-300 text-sm mt-1">Napredna online prodavnica za više prodavaca (multi-vendor), sa dashboard-om, statistikama, filterima i integracijama.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Domen & hosting usluga</h2>
              <p class="text-slate-300 text-sm mt-1">Pomoć u izboru hostinga i kupovini domena – preporuke, podešavanja i tehnička asistencija uz proviziju.</p>
            </li>

            <li class="border border-slate-700 rounded p-4 bg-slate-800 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400">Održavanje sajta</h2>
              <p class="text-slate-300 text-sm mt-1">Paket podrške: sigurnosne kopije, izmene sadržaja, SEO optimizacija, dodavanje sekcija, saveti i podrška po potrebi.</p>
            </li>
          </ul>
        </div>

       <!-- ✨ Pozadina sa particles efektom -->
          <div class="absolute inset-0 -z-10">
            <Particles class="absolute inset-0" />
            <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
              <img src="../../../images/glow-bottom.svg" class="max-w-none" width="546" height="274" alt="Pozadina" />
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
