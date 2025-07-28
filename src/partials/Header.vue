<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">

        <!-- Site branding -->
        <div class="flex-1">
          <router-link class="inline-flex" to="/" aria-label="Logo">
            <img class="max-w-none" src="../images/logo_express02.png" width="138" height="138" alt="Logo" />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">
          <ul class="flex grow justify-center flex-wrap items-center">
            <li>
              <router-link class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5" to="/">{{ $t('header.menu.home') }}</router-link>
            </li>
            <li>
              <router-link class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5" to="/about">{{ $t('header.menu.about') }}</router-link>
            </li>
            <li>
              <router-link class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5" to="/projects">{{ $t('header.menu.projects') }}</router-link>
            </li>
            <li>
              <router-link class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5" to="/pricing">{{ $t('header.menu.pricing') }}</router-link>
            </li>
            <li>
              <router-link class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5" to="/contact">{{ $t('header.menu.contact') }}</router-link>
            </li>
          </ul>
        </nav>

        <!-- Desktop sign-in links -->
        <ul class="flex-1 flex justify-end items-center">
          <li v-if="!user">
            <router-link class="font-medium text-sm text-slate-300 hover:text-white" to="/signin">{{ $t('header.menu.signin') }}</router-link>
          </li>
          <li v-if="!user" class="ml-6">
            <router-link class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" to="/signup">
              <span class="relative inline-flex items-center">
                {{ $t('header.menu.signup') }}<span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 ml-1">→</span>
              </span>
            </router-link>
          </li>

          <!-- Moj nalog -->
          <li v-if="user">
            <router-link to="/dashboard" class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group">
              Moj nalog<span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 ml-1">→</span>
            </router-link>
          </li>

          <!-- Admin dugme -->
          <li v-if="isAdmin">
            <router-link to="/admin/dashboard" class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(var(--color-slate-900),var(--color-slate-900))_padding-box,conic-gradient(var(--color-slate-400),var(--color-slate-700)_25%,var(--color-slate-700)_75%,var(--color-slate-400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none">
              Admin panel<span class="tracking-normal text-purple-500 group-hover:translate-x-0.5 ml-1">→</span>
            </router-link>
          </li>
        </ul>

        <!-- Mobile menu -->
        <div class="md:hidden flex items-center ml-4">
          <!-- Hamburger -->
          <button
            class="group inline-flex w-8 h-8 text-slate-300 hover:text-white"
            ref="hamburger"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
            @click.stop="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">{{ $t('header.menu.toggle') }}</span>
            <svg class="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16">
              <rect y="7" width="16" height="2" rx="1" class="origin-center transition-all duration-300 -translate-y-[5px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0"></rect>
              <rect y="7" width="16" height="2" rx="1" class="origin-center group-aria-expanded:rotate-45 transition-all duration-300"></rect>
              <rect y="7" width="16" height="2" rx="1" class="origin-center transition-all duration-300 translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"></rect>
            </svg>
          </button>

          <!-- Mobile nav -->
          <nav
            id="mobile-nav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            ref="mobileNav"
            :style="[mobileNavOpen ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 } : { maxHeight: 0, opacity: .8 }]"
            @click.outside="expanded = false"
            @keydown.escape.window="expanded = false"
          >
            <ul class="border rounded-lg px-4 py-1.5 bg-slate-900">
              <li><router-link class="flex text-slate-300 hover:text-white py-1.5" to="/">{{ $t('header.menu.home') }}</router-link></li>
              <li><router-link class="flex text-slate-300 hover:text-white py-1.5" to="/about">{{ $t('header.menu.about') }}</router-link></li>
              <li><router-link class="flex text-slate-300 hover:text-white py-1.5" to="/projects">{{ $t('header.menu.projects') }}</router-link></li>
              <li><router-link class="flex text-slate-300 hover:text-white py-1.5" to="/pricing">{{ $t('header.menu.pricing') }}</router-link></li>
              <li><router-link class="flex text-slate-300 hover:text-white py-1.5" to="/contact">{{ $t('header.menu.contact') }}</router-link></li>
            </ul>
          </nav>
        </div>

        <!-- Logout i ime korisnika -->
        <div v-if="user" class="flex items-center gap-3 ml-4">
          <span class="text-slate-300 text-sm">👋 {{ user.name }}</span>
          <button
            @click="logout"
            class="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm"
          >
            Odjavi se
          </button>
        </div>

      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { getCurrentUser, logout as doLogout } from '../utils/auth'

export default {
  name: 'Header',
  setup() {
    const mobileNavOpen = ref(false)
    const mobileNav = ref(null)
    const hamburger = ref(null)

    const clickHandler = ({ target }) => {
      if (!mobileNavOpen.value || mobileNav.value.contains(target) || hamburger.value.contains(target)) return
      mobileNavOpen.value = false
    }

    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen.value || keyCode !== 27) return
      mobileNavOpen.value = false
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    return {
      mobileNavOpen,
      mobileNav,
      hamburger,
    }
  },
  data() {
    const user = getCurrentUser()
    return {
      user,
      isAdmin: user && ['admin@example.com', 'radoje@example.com'].includes(user.email)
    }
  },
  methods: {
    logout() {
      doLogout()
      this.$router.push('/signin')
    }
  }
}
</script>
