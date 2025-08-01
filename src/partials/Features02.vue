<template>
  <section class="relative">

    <!-- Particles animation -->
    <div class="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
      <Particles class="absolute inset-0 -z-10" :quantity="6" :staticity="30" />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-16 md:pt-32">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">{{ $t('features02.title') }}</h2>
          <p class="text-lg text-slate-400">{{ $t('features02.description') }}</p>
        </div>

        <!-- Highlighted boxes -->
        <div class="relative pb-12 md:pb-20">
          <!-- Blurred shape -->
          <div class="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                  <stop offset="0%" stop-color="#6366F1" />
                  <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path fill="url(#bs2-a)" fill-rule="evenodd" d="m346 898 461 369-284 58z" transform="translate(-346 -898)" />
            </svg>
          </div>
          <!-- Grid -->
          <Highlighter class="grid md:grid-cols-12 gap-6 group">
            <!-- Box #1 -->
            <div class="md:col-span-12" data-aos="fade-down">
              <HighlighterItem>
                <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                    <!-- Blurred shape -->
                    <div class="absolute right-0 top-0 blur-2xl" aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="342" height="393">
                        <defs>
                          <linearGradient id="bs-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                            <stop offset="0%" stop-color="#6366F1" />
                            <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                          </linearGradient>
                        </defs>
                        <path fill="url(#bs-a)" fill-rule="evenodd" d="m104 .827 461 369-284 58z" transform="translate(0 -112.827)" opacity=".7" />
                      </svg>
                    </div>
                    <!-- Radial gradient -->
                    <div class="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square" aria-hidden="true">
                      <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70"></div>
                      <div class="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]"></div>
                    </div>


                    <!-- Text -->
                    <div class="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                      <div class="mb-5">
                        <div>
                          <h3 class="inline-flex text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">{{ $t('features02.box1.title') }}</h3>
                          <p class="text-slate-400">{{ $t('features02.box1.text') }}</p>
                        </div>
                      </div>
                      <div>
                        <a class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" href="https://agro-shop.in.rs" target="_blank" rel="noopener noreferrer">
                          <span class="relative inline-flex items-center">
                            {{ $t('features02.box1.button') }}<span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <!-- Image -->
                    <div class="relative w-full h-64 md:h-auto overflow-hidden">
                      <img class="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0 md:translate-x-0" src="../images/feature-image-01.png" width="504" height="400" alt="Feature 01">
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #2 -->
            <div class="md:col-span-7" data-aos="fade-down">
              <HighlighterItem>
                <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                  <div class="flex flex-col">
                    <!-- Radial gradient -->
                    <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                      <div class="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                    </div>
                    <!-- Text -->
                    <div class="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                      <div>
                        <h3 class="inline-flex text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">{{ $t('features02.box2.title') }}</h3>
                        <p class="text-slate-400">{{ $t('features02.box2.text') }}</p>
                      </div>
                    </div>
                    <!-- Image -->
                    <div class="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                      <img class="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src="../images/feature-image-02.png" width="536" height="230" alt="Feature 02">
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
            <!-- Box #3 -->
            <div class="md:col-span-5" data-aos="fade-down">
              <HighlighterItem>
                <div class="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                  <div class="flex flex-col">
                    <!-- Radial gradient -->
                    <div class="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                      <div class="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]"></div>
                    </div>
                    <!-- Text -->
                    <div class="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                      <div>
                        <h3 class="inline-flex text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">{{ $t('features02.box3.title') }}</h3>
                        <p class="text-slate-400">{{ $t('features02.box3.text') }}</p>
                      </div>
                    </div>
                    <!-- Image -->
                    <div class="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                      <img class="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src="../images/feature-image-03.png" width="230" height="230" alt="Feature 03">
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </Highlighter>
        </div>

        <!-- Features list -->
        <div class="grid md:grid-cols-3 gap-8 md:gap-12">
          <!-- Feature -->
          <div>
            <div class="flex items-center space-x-2 mb-1">
              <svg class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" />
              </svg>
              <h4 class="font-medium text-slate-50">{{ $t('features02.list.filters.title') }}</h4>
            </div>
            <p class="text-sm text-slate-400">{{ $t('features02.list.filters.text') }}</p>
          </div>
          <!-- Feature -->
          <div>
            <div class="flex items-center space-x-2 mb-1">
              <svg class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
              </svg>
              <h4 class="font-medium text-slate-50">{{ $t('features02.list.configurable.title') }}</h4>
            </div>
            <p class="text-sm text-slate-400">{{ $t('features02.list.configurable.text') }}</p>
          </div>
          <!-- Feature -->
          <div>
            <div class="flex items-center space-x-2 mb-1">
              <svg class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path d="M14 0a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V2H2v12h4a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm-1.957 10.629 3.664 3.664a1 1 0 0 1-1.414 1.414l-3.664-3.664-.644 2.578a.5.5 0 0 1-.476.379H9.5a.5.5 0 0 1-.48-.362l-2-7a.5.5 0 0 1 .618-.618l7 2a.5.5 0 0 1-.017.965l-2.578.644Z" />
              </svg>
              <h4 class="font-medium text-slate-50">{{ $t('features02.list.adaptable.title') }}</h4>
            </div>
            <p class="text-sm text-slate-400">{{ $t('features02.list.adaptable.text') }}</p>
          </div>
          <!-- Feature -->
          <div>
            <div class="flex items-center space-x-2 mb-1">
              <svg class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
              </svg>
              <h4 class="font-medium text-slate-50">{{ $t('features02.list.authorization.title') }}</h4>
            </div>
            <p class="text-sm text-slate-400">{{ $t('features02.list.authorization.text') }}</p>
          </div>
          <!-- Feature -->
          <div>
            <div class="flex items-center space-x-2 mb-1">
              <svg class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
              </svg>
              <h4 class="font-medium text-slate-50">{{ $t('features02.list.management.title') }}</h4>
            </div>
            <p class="text-sm text-slate-400">{{ $t('features02.list.management.text') }}</p>
          </div>
          <!-- Feature -->
          <div>
            <div class="flex items-center space-x-2 mb-1">
              <svg class="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z" />
              </svg>
              <h4 class="font-medium text-slate-50">{{ $t('features02.list.building.title') }}</h4>
            </div>
            <p class="text-sm text-slate-400">{{ $t('features02.list.building.text') }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'
import Highlighter from './Highlighter.vue'
import HighlighterItem from './HighlighterItem.vue'

export default {
  name: 'Features02',
  components: {
    Particles,
    Highlighter,
    HighlighterItem,
  },  
}
</script>