<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
  <!-- ✅ Gornja navigacija (header sajta) -->
  <Header />
  <Hero />
  <main class="text-center py-24">
     
    <h1 class="text-4xl font-bold text-white">Naši projekti</h1>
    <p class="text-slate-400 mt-4">Uskoro više informacija o GBS projektima.</p>
  </main>

  <Footer />

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Footer from '../partials/Footer.vue'
import Hero from '../partials/Hero.vue'
export default {
  name: 'Projects',
  components: {
    Header,
    Footer,
    Hero,
  },
}
</script>

