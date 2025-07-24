<template>
  <section>
    <!-- ✨ Pozadinska animacija -->
    <div class="absolute inset-0 -z-10">
      <Particles class="absolute inset-0" />
      <div class="absolute left-1/2 -translate-x-1/2 bottom-0">
        <img src="../../../images/glow-top.svg" class="max-w-none" width="2146" height="774" alt="Glow background" />
      </div>
    </div>

    <div class="relative max-w-6xl mx-auto">
      <Header />

      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl font-bold mb-6 text-center">🌐 Zajednica i prisustvo GBS platforme</h1>
          <p class="text-slate-400 text-center mb-12">
            Naš cilj je da okupljamo zajednicu korisnika, developera i partnera koji žele da doprinesu otvorenoj i naprednoj digitalnoj infrastrukturi.
          </p>

          <div class="space-y-8">
            <div class="bg-slate-800 border border-slate-700 rounded p-6 shadow">
              <h2 class="text-xl font-semibold text-purple-400 mb-2">📣 Aktivnost na društvenim mrežama</h2>
              <p class="text-slate-300 text-sm">
                Pratite nas na Facebook-u i Instagramu gde ćemo deliti tutorijale, najave, savete i intervjue sa korisnicima i developerima.
              </p>
              <div class="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com/gbsplatform"
                  target="_blank"
                  class="text-purple-500 hover:text-purple-400 transition text-sm"
                >
                  📘 Facebook
                </a>
                <a
                  href="https://instagram.com/gbsplatform"
                  target="_blank"
                  class="text-purple-500 hover:text-purple-400 transition text-sm"
                >
                  📸 Instagram
                </a>
              </div>
            </div>

            <div class="bg-slate-800 border border-slate-700 rounded p-6 shadow">
              <h2 class="text-xl font-semibold text-purple-400 mb-2">💻 Open source i GitHub doprinosi</h2>
              <p class="text-slate-300 text-sm">
                Naš kod i moduli biće dostupni na GitHub-u. Bićete u mogućnosti da forkujete projekte, otvarate issue-e, učestvujete u razvoju i delite svoja poboljšanja.
              </p>
              <a
                href="https://github.com/gbsplatform"
                target="_blank"
                class="inline-block mt-3 text-purple-500 hover:text-purple-400 text-sm"
              >
                🔗 Posetite naš GitHub →
              </a>
            </div>

            <div class="bg-slate-800 border border-slate-700 rounded p-6 shadow">
              <h2 class="text-xl font-semibold text-purple-400 mb-2">🧠 Učešće na forumima i IT zajednicama</h2>
              <p class="text-slate-300 text-sm mb-3">
                Planiramo aktivno prisustvo na strukovnim forumima gde ćemo deliti znanje i diskutovati o novim tehnologijama.
              </p>
              <ul class="list-disc list-inside text-sm text-slate-400">
                <li>
                  <a href="https://dev.to" target="_blank" class="hover:text-white">dev.to – Developer Community</a>
                </li>
                <li>
                  <a href="https://stackoverflow.com" target="_blank" class="hover:text-white">Stack Overflow</a>
                </li>
                <li>
                  <a href="https://www.reddit.com/r/laravel/" target="_blank" class="hover:text-white">Reddit – Laravel Community</a>
                </li>
              </ul>
            </div>
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
  name: 'CommunityPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
