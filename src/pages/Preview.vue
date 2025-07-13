<template>
  <div v-if="siteData">
    <div class="text-center mb-6">
  <h2 class="text-lg text-white font-semibold mb-2">📢 Vaša prezentacija je uspešno generisana!</h2>
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
    <h1 class="text-2xl font-bold text-white mb-6 text-center">Pregled vaše prezentacije</h1>
    <component :is="templateComponent" :data="siteData" />
  </div>
  <div v-else class="text-white text-center py-20">Učitavanje...</div>
</template>

<script>
import ClassicPreview from '../templates/ClassicPreview.vue'
import ModernPreview from '../templates/ModernPreview.vue'
import GalleryPreview from '../templates/GalleryPreview.vue'
import BusinessPreview from '../templates/BusinessPreview.vue'
import DarkPreview from '../templates/DarkPreview.vue'
import axios from 'axios'

export default {
  name: 'Preview',
  props: ['slug'],
  components: {
    ClassicPreview,
    ModernPreview,
    GalleryPreview,
    BusinessPreview,
    DarkPreview
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