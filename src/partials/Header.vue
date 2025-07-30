<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        
        <!-- Logo -->
        <div class="flex-1">
          <router-link to="/" aria-label="Logo" class="inline-flex">
            <img src="../images/logo_express02.png" width="138" height="138" alt="Logo" />
          </router-link>
        </div>

        <!-- Desktop navigacija -->
        <nav class="hidden md:flex md:grow">
          <ul class="flex grow justify-center flex-wrap items-center">
            <li v-for="link in navLinks" :key="link.to">
              <router-link :to="link.to" class="font-medium text-sm text-slate-300 hover:text-white mx-2 md:mx-4">
                {{ $t(link.label) }}
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Desktop meni desno -->
        <div class="flex items-center gap-2">
          <div v-if="!user">
            <router-link class="text-sm text-slate-300 hover:text-white" to="/signin">{{ $t('header.menu.signin') }}</router-link>
            <router-link class="ml-3 text-sm bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded" to="/signup">{{ $t('header.menu.signup') }}</router-link>
            
          </div>

          <div v-if="user" class="flex items-center gap-2">
            <span class="text-sm text-white font-medium bg-slate-700 px-2 py-1 rounded">
  👋 {{ user.name }}
</span>
            <router-link to="/dashboard" class="text-sm text-slate-300 hover:text-white">{{ $t('header.menu.account') }} →</router-link>
            <button @click="logout" class="text-sm px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded">{{ $t('header.menu.logout') }}</button>
            
          </div>


          <div v-if="isAdmin">
            <router-link to="/admin/dashboard" class="text-sm border border-purple-400 text-purple-400 px-3 py-1 rounded hover:bg-purple-800">
              {{ $t('header.menu.admin') }} →
            </router-link>
          </div>

          <!-- Jezički dropdown -->
          <div class="relative">
            <button @click="toggleLangDropdown" class="flex items-center gap-1 text-sm text-slate-300 hover:text-white border border-slate-600 px-2 py-1 rounded">
              <img :src="currentFlag" class="w-4 h-4" />
              <span>{{ currentLabel }}</span>
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.355a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"/></svg>
            </button>
            <div v-if="showLang" class="absolute right-0 mt-1 w-32 rounded bg-slate-800 border border-slate-600 shadow-lg z-50">
              <button @click="setLanguage('sr')" class="flex items-center w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-700">
                <img src="../images/flag-rs.png" class="w-4 h-4 mr-2" /> SR
              </button>
              <button @click="setLanguage('en')" class="flex items-center w-full px-3 py-2 text-sm text-slate-300 hover:bg-slate-700">
                <img src="../images/flag-uk.png" class="w-4 h-4 mr-2" /> EN
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile meni -->
        <div class="md:hidden flex items-center ml-4">
          <button
            class="text-slate-300 hover:text-white"
            ref="hamburger"
            @click="mobileNavOpen = !mobileNavOpen"
            aria-label="Toggle navigation"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile navigacija -->
      <nav
        v-if="mobileNavOpen"
        ref="mobileNav"
        class="md:hidden mt-2 border rounded bg-slate-900 px-4 py-3 transition-all"
      >
        <ul>
          <li v-for="link in navLinks" :key="link.to" class="py-1">
            <router-link :to="link.to" class="block text-slate-300 hover:text-white">
              {{ $t(link.label) }}
            </router-link>
          </li>
          <li class="py-1">
            <button @click="setLanguage('sr')" class="flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <img src="../images/flag-rs.png" class="w-4 h-4" /> SR
            </button>
            <button @click="setLanguage('en')" class="flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <img src="../images/flag-uk.png" class="w-4 h-4" /> EN
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getCurrentUser, logout as doLogout } from '../utils/auth'

export default {
  name: 'Header',
  setup() {
    const mobileNavOpen = ref(false)
    const mobileNav = ref(null)
    const hamburger = ref(null)
    const showLang = ref(false)
    const { locale } = useI18n()

    const toggleLangDropdown = () => (showLang.value = !showLang.value)
    const setLanguage = (lang) => {
      locale.value = lang
      localStorage.setItem('locale', lang)
      showLang.value = false
    }

    const currentFlag = computed(() =>
      locale.value === 'sr'
        ? new URL('../images/flag-rs.png', import.meta.url).href
        : new URL('../images/flag-uk.png', import.meta.url).href
    )
    const currentLabel = computed(() => (locale.value === 'sr' ? 'SR' : 'EN'))

    const clickHandler = ({ target }) => {
      if (!mobileNavOpen.value || mobileNav.value?.contains(target) || hamburger.value?.contains(target)) return
      mobileNavOpen.value = false
    }
    const keyHandler = ({ key }) => {
      if (key === 'Escape') mobileNavOpen.value = false
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
      showLang,
      toggleLangDropdown,
      setLanguage,
      currentFlag,
      currentLabel,
      locale
    }
  },
  data() {
    const user = getCurrentUser()
    return {
      user,
      isAdmin: user && ['admin@example.com', 'radoje@example.com'].includes(user.email),
      navLinks: [
        { to: '/', label: 'header.menu.home' },
        { to: '/about', label: 'header.menu.about' },
        { to: '/projects', label: 'header.menu.projects' },
        { to: '/pricing', label: 'header.menu.pricing' },
        { to: '/contact', label: 'header.menu.contact' }
      ]
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
