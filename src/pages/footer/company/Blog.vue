<template>
  <section>
    <!-- 🌌 Pozadina sa particles animacijom -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Glow background" />
      </div>
    </div>

    <!-- 📄 Glavni sadržaj -->
    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">📚 Express Blog</h1>
          <p class="text-slate-400 text-center mb-12">
            Saveti, inspiracija i prakse iz sveta izrade sajtova, digitalizacije i malih biznisa u Srbiji.
          </p>

          <!-- Statički blog postovi -->
          <div class="space-y-8">
            <div class="bg-slate-800 p-5 rounded border border-slate-700 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400 mb-2">Kako do sajta za 10 minuta bez programera?</h2>
              <p class="text-slate-300 text-sm leading-relaxed">
                Objašnjavamo kako funkcioniše Express FREE sajt – korak po korak. I šta mali preduzetnik dobija potpuno besplatno.
              </p>
            </div>

            <div class="bg-slate-800 p-5 rounded border border-slate-700 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400 mb-2">PRO paket – da li vredi uložiti?</h2>
              <p class="text-slate-300 text-sm leading-relaxed">
                Poređenje besplatne i PRO verzije sajta. Koliko košta, šta se sve dobija, i da li je to prava investicija za vaš biznis?
              </p>
            </div>

            <div class="bg-slate-800 p-5 rounded border border-slate-700 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400 mb-2">Kako izgleda saradnja sa Express timom?</h2>
              <p class="text-slate-300 text-sm leading-relaxed">
                Od prvog klika do gotovog sajta. Šta sve možete da očekujete u toku izrade, koliko to traje i ko vam pomaže?
              </p>
            </div>

            <div class="text-center mt-10">
              <p class="text-slate-500 text-sm italic">
                Uskoro otvaramo CMS za korisničke priče, tutorijale i analize – pratite nas.
              </p>
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
  name: 'BlogPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
