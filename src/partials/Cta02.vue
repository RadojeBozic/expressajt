<template>
  <section class="relative">

    <!-- Particles animation -->
    <div class="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24">
      <Particles class="absolute inset-0 -z-10" :quantity="6" :staticity="30" />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="relative px-8 py-12 md:py-20 border-t border-b [border-image:linear-gradient(to_right,transparent,var(--color-slate-800),transparent)1]">
        <!-- Blurred shape -->
        <div class="absolute top-0 -mt-24 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stop-color="#A855F7"></stop>
                <stop offset="100%" stop-color="#6366F1" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#bs4-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
          </svg>
        </div>

        <!-- Content -->
        <div class="max-w-3xl mx-auto text-center">
          <div>
            <div class="inline-flex font-medium bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-purple-200 pb-3">
              {{ $t('cta02.label') }}
            </div>
          </div>
          <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
            {{ $t('cta02.title') }}
          </h2>
          <p class="text-lg text-slate-400 mb-8">
            {{ $t('cta02.description') }}
          </p>
          <div>
            <a class="btn text-slate-900 bg-linear-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group" href="#0">
              {{ $t('cta02.button') }} <span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'

export default {
  name: 'Cta02',
  components: {
    Particles
  }
}
</script>
