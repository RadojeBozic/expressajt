<template>
  <section>
    <!-- ✨ Pozadina sa particles efektom -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Pozadina" />
      </div>
    </div>

    <!-- 📄 Glavni sadržaj -->
    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">💼 Karijere u GBS platformi</h1>
          <p class="text-slate-400 text-center mb-12">
            Pozivamo te da se priključiš timu koji razvija savremena poslovna rešenja. Prvih 6 meseci angažman je kroz honorarnu saradnju (spoljni saradnici), 100% remote (rad od kuće).
          </p>

          <!-- 🧑‍💻 Oglasi za pozicije -->
          <div class="space-y-8">
            <div class="bg-slate-800 p-5 rounded border border-slate-700 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400 mb-1">Frontend Developer (Junior)</h2>
              <p class="text-slate-300 text-sm leading-relaxed mb-2">
                Osnovno znanje HTML, CSS, JavaScript, Bootstrap. Poželjno: Vue ili React. Rad u timu, rad na postojećim komponentama i učenje kroz praksu.
              </p>
              <ul class="text-sm text-slate-400 list-disc list-inside space-y-1">
                <li>Radno vreme: fleksibilno</li>
                <li>Naknada: 400–600 EUR mesečno</li>
                <li>Saradnja: Ugovor o delu / spoljni saradnik</li>
              </ul>
            </div>

            <div class="bg-slate-800 p-5 rounded border border-slate-700 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400 mb-1">Frontend Developer (Senior)</h2>
              <p class="text-slate-300 text-sm leading-relaxed mb-2">
                Iskustvo sa Vue, Tailwind, animacijama i optimizacijom performansi. Razvijanje sopstvenih komponenti i UI sistema.
              </p>
              <ul class="text-sm text-slate-400 list-disc list-inside space-y-1">
                <li>Radno vreme: fleksibilno / po dogovoru</li>
                <li>Naknada: 800–1200 EUR mesečno</li>
                <li>Saradnja: Ugovor o delu / spoljni saradnik</li>
              </ul>
            </div>

            <div class="bg-slate-800 p-5 rounded border border-slate-700 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400 mb-1">Backend Developer (Junior)</h2>
              <p class="text-slate-300 text-sm leading-relaxed mb-2">
                Osnovno poznavanje PHP-a i Laravel frameworka. Rad sa MySQL bazama, API rutama i razumevanje MVC arhitekture.
              </p>
              <ul class="text-sm text-slate-400 list-disc list-inside space-y-1">
                <li>Radno vreme: fleksibilno</li>
                <li>Naknada: 400–600 EUR mesečno</li>
                <li>Saradnja: Ugovor o delu / spoljni saradnik</li>
              </ul>
            </div>

            <div class="bg-slate-800 p-5 rounded border border-slate-700 shadow hover:shadow-lg transition">
              <h2 class="text-xl font-semibold text-purple-400 mb-1">Backend Developer (Senior)</h2>
              <p class="text-slate-300 text-sm leading-relaxed mb-2">
                Napredno znanje Laravel + MySQL, rad sa API integracijama, autentifikacijom, sigurnošću i pisanjem efikasnog koda.
              </p>
              <ul class="text-sm text-slate-400 list-disc list-inside space-y-1">
                <li>Radno vreme: fleksibilno / po dogovoru</li>
                <li>Naknada: 1000–1400 EUR mesečno</li>
                <li>Saradnja: Ugovor o delu / spoljni saradnik</li>
              </ul>
            </div>
          </div>

          <!-- 📩 Dugme za prijavu -->
          <div class="text-center mt-12">
            <router-link
              to="/contact"
              class="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded text-lg font-semibold transition"
            >
              📧 Pošalji prijavu putem kontakt forme
            </router-link>
          </div>
        </div>
        <!-- ✨ Pozadina sa particles efektom -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-bottom.svg" class="max-w-none" width="2146" height="774" alt="Pozadina" />
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
  name: 'CareersPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
