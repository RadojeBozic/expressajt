<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <section class="min-h-screen bg-slate-900 text-white py-16 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold text-center mb-6 mt-[100px]">{{ $t('demoPreviews.title') }}</h1>
        <p class="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          {{ $t('demoPreviews.subtitle') }}
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <DemoBox
            v-for="site in demoSites"
            :key="site.slug"
            :title="`🌐 ${site.name}`"
            :description="site.description"
            :link="`/preview/${site.slug}`"
          />
          <DemoBox
            title="🥖 Autos - Free"
            description="Auto's je porodična firma za prodaju i servis polovnih automobila"
            link="http://localhost:5173/prezentacije/autos-6884e5a9758b0"
          />
          <DemoBox
            title="📊 Zdravo da ste - Pro"
            description="Usluge knjigovodstva sa PDF dokumentacijom i sekcijom 'O nama'."
            link="http://localhost:5173/prezentacije/httplocalhost5173-687e89f24047c"
          />
          <DemoBox
            title="🏡 Frizer Neša"
            description="Galerija, ponuda, kontakt i video prezentacija – kompletna turistička prezentacija."
            link="http://localhost:5173/preview/frizerski-salon-nesa-688eef29dade4"
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
            {{ isAuthenticated ? $t('demoPreviews.goToDashboard') : $t('demoPreviews.registerAndCreate') }}
          </router-link>

          <p class="text-bold text-slate-400 mt-4">{{ $t('demoPreviews.note') }}</p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <router-link
              to="/free-site-form"
              class="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded font-medium text-sm shadow transition"
            >
              {{ $t('demoPreviews.freeSiteButton') }}
            </router-link>

            <router-link
              to="/pro-site-form"
              class="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-5 py-3 rounded font-medium text-sm shadow transition"
            >
              {{ $t('demoPreviews.proSiteButton') }}
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
  data() {
  return {
    demoSites: []
  }
},
  components: {
    DemoBox,
    Header,
    Footer
  },
  computed: {
    isAuthenticated() {
      return isAuthenticated()
    }
  },
  mounted() {
  axios.get('http://localhost:8080/api/demo-sites')
    .then(res => {
      this.demoSites = res.data
    })
    .catch(err => {
      console.error('❌ Greška pri učitavanju demo sajtova:', err)
    })
}
}
</script>