<template>
  <section>
    <!-- ✨ Pozadinska animacija -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Pozadinska animacija" />
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">🎨 Brend komplet (Brand kit)</h1>
          <p class="text-slate-400 text-center mb-12">
            Na ovoj stranici možete pronaći osnovne smernice za korišćenje Express Sajt logotipa, boja i fontova u skladu sa našim vizuelnim identitetom.
          </p>

          <div class="space-y-6 bg-slate-800 p-6 rounded-lg shadow text-slate-300 text-sm leading-relaxed">

            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">📌 Dozvoljeno korišćenje</h2>
              <ul class="list-disc list-inside space-y-2">
                <li>Upotreba Express Sajt logotipa u kontekstu partnerstava i preporuka.</li>
                <li>Korišćenje boja i fontova za integraciju sa vašim rešenjem.</li>
                <li>Navođenje Express Sajt  platforme kao tehnološkog rešenja (uz napomenu).</li>
              </ul>
            </div>

            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">🚫 Zabranjeno korišćenje</h2>
              <ul class="list-disc list-inside space-y-2">
                <li>Izmena logotipa ili kombinacija boja van propisanih pravila.</li>
                <li>Lažno predstavljanje kao deo Express Sajt tima.</li>
                <li>Korišćenje elemenata u kontekstu koji bi mogao narušiti reputaciju platforme.</li>
              </ul>
            </div>

            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">🎨 Osnovna paleta boja</h2>
              <div class="flex gap-4 mt-2">
                <div class="w-20 h-10 bg-purple-600 rounded text-center text-xs flex items-center justify-center">#7C3AED</div>
                <div class="w-20 h-10 bg-slate-900 rounded text-center text-xs flex items-center justify-center">#0F172A</div>
                <div class="w-20 h-10 bg-slate-800 rounded text-center text-xs flex items-center justify-center">#1E293B</div>
              </div>
            </div>

            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">🅰️ Font</h2>
              <p class="text-slate-300">Platforma koristi moderne sans-serif fontove: <code>Inter</code>, <code>Roboto</code> i <code>system-ui</code>.</p>
            </div>

            <div>
              <h2 class="text-lg font-semibold text-purple-400 mb-2">📁 Preuzimanja</h2>
              <p class="text-slate-300">Uskoro će biti dostupni logotipi u PNG, SVG i AI formatu. Za sada nas možete kontaktirati putem <router-link to="/contact" class="text-purple-400 underline hover:text-purple-300">kontakt forme</router-link>.</p>
            </div>

          </div>
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
  name: 'BrandkitPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
