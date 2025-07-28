<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <!-- Hero sekcija -->
    <section class="text-center py-20 bg-slate-900 text-white">
      <div class="max-w-4xl mx-auto px-4">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">🎨 Express Dizajn</h1>
        <p class="text-slate-300 text-lg">
          Dizajn logotipa, banera i društvenih mreža — brzo, kreativno i uz AI podršku.
        </p>
      </div>
    </section>

    <!-- Info sekcije -->
    <section class="py-16 px-4 max-w-5xl mx-auto text-slate-200 space-y-10">
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h2 class="text-xl font-semibold mb-2">🎯 Šta nudimo</h2>
          <ul class="list-disc list-inside text-sm space-y-2">
            <li>Logo dizajn – unikatno ili preko Canva Pro predložaka</li>
            <li>Baneri, vizit karte, objave za društvene mreže</li>
            <li>AI generisani predlozi na osnovu tvog opisa</li>
            <li>Brendirani PDF i Canva dokumenti spremni za štampu</li>
          </ul>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2">🤖 AI + Canva Pro</h2>
          <p class="text-sm">
            Koristimo najbolje iz oba sveta: veštačku inteligenciju i profesionalne templejte iz Canva Pro biblioteke.
            Nemaš ideju? Dovoljno je da opišeš biznis – mi ćemo predložiti rešenje.
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-slate-800 border border-slate-600 p-6 rounded-lg shadow text-center">
        <h3 class="text-lg font-semibold mb-2">Započni svoj Express dizajn</h3>
        <p class="text-sm mb-4">Pošalji nam opis i za 24h dobijaš prvi predlog.</p>
        <router-link to="/contact" class="btn bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm">
          Pošalji zahtev
        </router-link>
      </div>
    </section>

    <SupportCTA />
    <Footer />
  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'
import SupportCTA from '../partials/SupportCTA.vue'

export default {
  name: 'ServiceDesign',
  components: {
    Header,
    Footer,
    SupportCTA
  },
  mounted() {
    console.log('Otvorena usluga: dizajn')
  }
}
</script>
