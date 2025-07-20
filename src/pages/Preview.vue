<template>
  <div v-if="siteData">
    <!-- 🧾 Tip paketa + poruka -->
    <div class="text-center mb-6">
      <h2 class="text-lg text-white font-semibold mb-1 flex items-center justify-center gap-2">
        📢 Vaša prezentacija je uspešno generisana!
        <span
          class="text-xs font-bold px-2 py-1 rounded uppercase"
          :class="siteData.type === 'pro' ? 'bg-yellow-500 text-slate-900' : 'bg-green-500 text-white'"
        >
          {{ siteData.type === 'pro' ? 'PRO' : 'FREE' }}
        </span>
      </h2>

      <!-- Poruka i opcije za Pro / Free -->
      <div v-if="siteData.type === 'pro'" class="bg-yellow-100 text-yellow-800 text-sm p-4 rounded mb-4 max-w-xl mx-auto border border-yellow-300">
        <strong>⚠️ Ovo je PRO prezentacija.</strong><br />
        Link će biti aktivan nakon odobrenja administratora.<br />
        Imate pitanje? <router-link to="/contact" class="text-blue-600 underline hover:text-blue-800">Kontaktirajte podršku</router-link>.
      </div>

      <div v-else>
        <p class="text-slate-300 text-sm mb-2">Kopirajte link i podelite ga:</p>
        <div class="flex items-center justify-center gap-2">
          <input
            :value="fullLink"
            readonly
            class="bg-slate-700 text-white px-4 py-2 rounded w-[300px] text-sm"
          />
          <button @click="copyLink" class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm">
            📋 Kopiraj
          </button>
        </div>
        <p v-if="copied" class="text-green-400 text-sm mt-2">Link kopiran u clipboard ✅</p>
      </div>
    </div>

    <!-- Pregled prezentacije -->
    <h1 class="text-2xl font-bold text-white mb-6 text-center">Pregled vaše prezentacije</h1>
    <component :is="templateComponent" :data="siteData" />
  </div>

  <div v-else class="text-white text-center py-20">Učitavanje...</div>
</template>

<script>
import ClassicPreview from '../templates/ClassicPreview.vue'
import ClassicPreviewPro from '../templates/ClassicPreviewPro.vue'
import ModernPreview from '../templates/ModernPreview.vue'
import ModernPreviewPro from '../templates/ModernPreviewPro.vue'
import GalleryPreview from '../templates/GalleryPreview.vue'
import GalleryPreviewPro from '../templates/GalleryPreviewPro.vue'
import BusinessPreview from '../templates/BusinessPreview.vue'
import BusinessPreviewPro from '../templates/BusinessPreviewPro.vue'
import DarkPreview from '../templates/DarkPreview.vue'
import DarkPreviewPro from '../templates/DarkPreviewPro.vue'
import axios from 'axios'

export default {
  name: 'Preview',
  props: ['slug'],
  components: {
    ClassicPreview,
    ClassicPreviewPro,
    ModernPreview,
    ModernPreviewPro,
    GalleryPreview,
    GalleryPreviewPro,
    BusinessPreview,
    BusinessPreviewPro,
    DarkPreview,
    DarkPreviewPro
  },
  data() {
    return {
      siteData: null,
      copied: false
    }
  },
  computed: {
    fullLink() {
      return `${window.location.origin}/prezentacije/${this.slug}`
    },
    templateComponent() {
      switch (this.siteData?.template) {
        case 'moderni': return 'ModernPreview'
        case 'galerija': return 'GalleryPreview'
        case 'biznis': return 'BusinessPreview'
        case 'dark': return 'DarkPreview'
        case 'moderni-pro': return 'ModernPreviewPro'
        case 'galerija-pro': return 'GalleryPreviewPro'
        case 'biznis-pro': return 'BusinessPreviewPro'
        case 'dark-pro': return 'DarkPreviewPro'
        case 'klasicni-pro': return 'ClassicPreviewPro'
        case 'klasicni':
        default: return 'ClassicPreview'
      }
    }
  },
  methods: {
    copyLink() {
      navigator.clipboard.writeText(this.fullLink)
      this.copied = true
      setTimeout(() => (this.copied = false), 3000)
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:8090/api/free-site-request/${this.slug}`)
      this.siteData = res.data
    } catch (err) {
      console.error('❌ Greška pri preuzimanju sajta:', err)
    }
  }
}
</script>
