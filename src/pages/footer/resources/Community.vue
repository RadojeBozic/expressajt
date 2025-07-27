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
          <h1 class="text-3xl font-bold mb-6 text-center">🌐 Zajednica i prisustvo Express Sajta</h1>
          <p class="text-slate-400 text-center mb-12">
            Naš cilj je da okupljamo zajednicu korisnika, developera i partnera koji žele da doprinesu otvorenoj i naprednoj digitalnoj infrastrukturi.
          </p>

          <div class="space-y-8">
            <div class="bg-slate-800 border border-slate-700 rounded p-6 shadow">
              <h2 class="text-xl font-semibold text-purple-400 mb-2">📣 Aktivnost na društvenim mrežama</h2>
              <p class="text-slate-300 text-sm">
                Pratite nas na Facebook-u, Instagram-u i GitHub-u gde ćemo deliti tutorijale, najave, savete i intervjue sa korisnicima i developerima.
              </p>
              <div class="flex space-x-4 mt-4">
                   <!-- Social links -->
            <ul class="flex">
              <!-- Facebook -->
              <li>
                <a href="https://facebook.com/gbsplatform" target="_blank" aria-label="Facebook"
                  class="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out">
                  <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 4.88 3.66 8.93 8.44 9.83v-6.96H8.08v-2.87h2.36V9.41c0-2.33 1.38-3.62 3.5-3.62.7 0 1.42.12 1.42.12v2.6h-1.03c-1.01 0-1.32.63-1.32 1.28v1.53h2.25l-.36 2.87h-1.89v6.96C18.34 21 22 16.95 22 12.07z"/>
                  </svg>
                </a>
              </li>

              <!-- Instagram -->
              <li class="ml-2">
                <a href="https://instagram.com/gbsplatform" target="_blank" aria-label="Instagram"
                  class="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out">
                  <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2.25a.75.75 0 11.001 1.501A.75.75 0 0116.5 5.75zM12 7.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zm0 1.5a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"/>
                  </svg>
                </a>
              </li>
            </ul>
              </div>
            </div>

            <div class="bg-slate-800 border border-slate-700 rounded p-6 shadow">
              <h2 class="text-xl font-semibold text-purple-400 mb-2">💻 Open source i GitHub doprinosi</h2>
              <p class="text-slate-300 text-sm">
                Naš kod i moduli biće dostupni na GitHub-u. Bićete u mogućnosti da forkujete projekte, otvarate issue-e, učestvujete u razvoju i delite svoja poboljšanja.
              </p>
              <a href="https://github.com/RadojeBozic/expressajt" target="_blank" aria-label="GitHub"
                  class="flex justify-center items-center text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out">
                  <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .5C5.8.5.5 5.8.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1 2.3-.7 2.3-.7.2-.8.5-1.3.9-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2 0-.3-.5-1.4.1-3 0 0 1-.3 3.3 1.3a11.2 11.2 0 016 0C17 5.1 18 5.4 18 5.4c.6 1.6.1 2.7.1 3 .7.8 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.5 5.8.4.3.8 1 .8 2v2.9c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.8 18.2.5 12 .5z"/>
                  </svg>
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
  name: 'CommunityPage',
  components: {
    Header,
    Footer,
    Particles
  }
}
</script>
