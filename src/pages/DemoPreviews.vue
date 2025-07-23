<template>

        <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- ✅ Gornja navigacija (header sajta) -->
    <Header />
  <section class="min-h-screen bg-slate-900 text-white py-16 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-6 mt-[100px]">🌍 Demo sajtovi – Realne prezentacije</h1>
      <p class="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
        Pogledajte gotove primere sajtova izrađenih kroz naš sistem. Kliknite i uverite se kako izgleda profesionalna online prezentacija – bez potrebe za tehničkim znanjem!
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <DemoBox
          title="🥖 Zdravo da ste - Free"
          description="Tradicionalna pekara sa kontakt sekcijom i lokacijom."
          link="http://localhost:5173/prezentacije/zdrava-hrana-zdravo-da-ste-687e896c0e19e"
        />
        <DemoBox
          title="📊 Zdravo da ste - Pro"
          description="Usluge knjigovodstva sa PDF dokumentacijom i sekcijom 'O nama'."
          link="http://localhost:5173/prezentacije/httplocalhost5173-687e89f24047c"
        />
        <DemoBox
          title="🏡 Zdravo da ste - Pro"
          description="Galerija, ponuda, kontakt i video prezentacija – kompletna turistička prezentacija."
          link="http://localhost:5173/prezentacije/zdravo-da-ste-687e8d00eb94b"
        />
        <DemoBox
          title="🧼 Zdravo da ste - Pro"
          description="Jednostavan i moderan sajt za lokalnu perionicu – kontakt forma, lokacija i radno vreme."
          link="http://localhost:5173/prezentacije/httplocalhost5173-687e89f24047c#hero"
        />
        <DemoBox
          title="🥖 Pekara Jovanović"
          description="Tradicionalna pekara sa kontakt sekcijom i lokacijom."
          link="http://localhost:5173/prezentacije/agro-bim-687c01b9c33bd"
        />
        <DemoBox
          title="📊 Knjigovodstvo Bonus"
          description="Usluge knjigovodstva sa PDF dokumentacijom i sekcijom 'O nama'."
          link="http://localhost:5173/prezentacije/agro-bim-687cf97d8b8af"
        />
        <DemoBox
          title="🏡 Etno selo Naša Mera"
          description="Galerija, ponuda, kontakt i video prezentacija – kompletna turistička prezentacija."
          link="http://localhost:5173/prezentacije/agro-bim-687bdd11bf2d0"
        />
        <DemoBox
          title="🧼 Auto perionica Speed Wash"
          description="Jednostavan i moderan sajt za lokalnu perionicu – kontakt forma, lokacija i radno vreme."
          link="http://localhost:5173/prezentacije/agro-bim-687d6e121769d"
        />
      </div>

      <div class="text-center mt-12 space-y-4">
  <router-link
    :to="isAuthenticated ? '/dashboard' : '/signup'"
    class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded text-lg font-semibold transition"
  >
    {{ isAuthenticated ? '🛠 Idi na svoj nalog' : '🚀 Registruj se i napravi svoj sajt' }}
  </router-link>

  <!-- Objašnjenje -->
  <p class="text-bold text-slate-400 mt-4">Ne moraš da se registruješ da bi isprobao formu:</p>

  <!-- Dugmad za testiranje -->
  <div class="flex flex-col sm:flex-row gap-4 justify-center mt-2">
    <router-link
      to="/free-site-form"
      class="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded font-medium text-sm shadow transition"
    >
      📝 Kreiraj svoju BESPLATNU prezentaciju
    </router-link>

    <router-link
      to="/pro-site-form"
      class="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-5 py-3 rounded font-medium text-sm shadow transition"
    >
      🚀 Kreiraj svoju PRO prezentaciju
    </router-link>
  </div>
</div>

    </div>
  </section>

     <Footer />

 </div>


</template>

<script>
import DemoBox from '../components/DemoBox.vue'
import { isAuthenticated } from '../utils/auth'
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'DemoPreviews',
  components:
   { 
    DemoBox,
    Header, 
    Footer 
    },
  computed: {
    isAuthenticated() {
      return isAuthenticated()
    }
  }
}
</script>
