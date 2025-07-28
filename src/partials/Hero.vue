<template>
  <section>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Particles -->
      <Particles class="absolute inset-0 -z-10" />

      <!-- Glow background -->
      <div class="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
        <div class="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
          <img src="../images/glow-bottom.svg" class="max-w-none" width="2146" height="774" alt="Hero Illustration" />
        </div>
      </div>

      <!-- Content -->
      <div class="pt-32 pb-16 md:pt-52 md:pb-32">
        <div class="max-w-3xl mx-auto text-center">

          <!-- Label -->
          <div class="mb-6" data-aos="fade-down">
            <div class="inline-flex relative before:absolute before:inset-0 before:bg-purple-500 before:blur-md">
              <a @click.prevent="goToProjects" class="btn-sm py-0.5 text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-purple-500),var(--color-purple-500))_padding-box,linear-gradient(var(--color-purple-500),var(--color-purple-200)_75%,transparent_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/50 before:rounded-full before:pointer-events-none shadow-sm">
                <span class="relative inline-flex items-center">
                  {{ $t('hero.label') }}
                  <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </a>
            </div>
          </div>

          <!-- Naslov i opis -->
          <h1 class="h1 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" data-aos="fade-down">
            {{ $t('hero.title') }}
          </h1>
          <p class="text-lg text-slate-300 mb-8 transition-opacity duration-500" data-aos="fade-down" data-aos-delay="200">
            {{ currentDescription }}
          </p>

          <!-- CTA -->
          <div class="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
            <div>
              <a @click.prevent="goDemoPreviews" class="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group">
                {{ $t('hero.primary_button') }}
                <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
            <div>
              <a @click.prevent="goToSignUp" class="btn text-slate-200 hover:text-white bg-slate-900/25 hover:bg-slate-900/30 w-full transition duration-150 ease-in-out">
                <svg class="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="m1.999 0 1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 0l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM11.999 10l1 2-1 2 2-1 2 1-1-2 1-2-2 1zM6.292 7.586l2.646-2.647L11.06 7.06 8.413 9.707zM0 13.878l5.586-5.586 2.122 2.121L2.12 16z" />
                </svg>
                <span>{{ $t('hero.secondary_button') }}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'

export default {
  name: 'Hero',
  components: {
    Particles
  },
  data() {
    return {
      descriptions: [
        // Prezentacije
        'Pokrenite biznis online za samo jedan dan – bez programiranja, bez komplikacija.',
        'Od ideje do sajta za 24 sata. Prikažite se online – brzo i profesionalno.',
        'Bez programera, bez čekanja – kreirajte sajt za svoj biznis već danas!',
        'Vi razvijate posao. Mi ćemo vam napraviti sajt – već od 0 RSD.',

        // Online prodavnice
        'Online prodavnica? Može i za vikend. Mi postavljamo, vi prodajete.',
        'Pretvorite ideju u online shop sa podrškom za kartice, Stripe i SEO.',
        'Bilo da prodajete 5 ili 500 proizvoda – naš sistem raste s vama.',

        // AI i automatizacija
        'Dodajte AI chatbot, SEO asistenta ili email automatizaciju – Express!',
        'Automatizujte prodaju, podršku i promociju – uz minimalna ulaganja.',

        // Održavanje i podrška
        'Ne morate sami. Naša podrška održava sajt, sigurnost i backup.',
        'Održavanje sajta? Mi se brinemo – vi vodite posao.',
        'Express Dizajn (dizajn po meri i/ili uz AI asistenciju) - već od 999 RSD.',
      ],
      currentIndex: 0,
      currentDescription: ''
    }
  },
  mounted() {
    this.currentDescription = this.descriptions[this.currentIndex]
    setInterval(this.rotateDescription, 5000)
  },
  methods: {
    rotateDescription() {
      this.currentIndex = (this.currentIndex + 1) % this.descriptions.length
      this.currentDescription = this.descriptions[this.currentIndex]
    },
    goToSignUp() {
      this.$router.push('/signup')
    },
    goToProjects() {
      this.$router.push('/projects')
    },
    goDemoPreviews() {
      this.$router.push('/demo')
    }
}
  }

</script>
