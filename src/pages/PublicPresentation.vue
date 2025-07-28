<template>
  <div ref="printOnly">
    <component :is="templateComponent" :data="siteData" />
  </div>
</template>

<script>
import axios from 'axios'

// Šabloni
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

export default {
  name: 'PublicPresentation',
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
      siteData: null
    }
  },
  computed: {
    templateComponent() {
      const map = {
        'klasicni': 'ClassicPreview',
        'moderni': 'ModernPreview',
        'galerija': 'GalleryPreview',
        'biznis': 'BusinessPreview',
        'dark': 'DarkPreview',
        'klasicni-pro': 'ClassicPreviewPro',
        'moderni-pro': 'ModernPreviewPro',
        'galerija-pro': 'GalleryPreviewPro',
        'biznis-pro': 'BusinessPreviewPro',
        'dark-pro': 'DarkPreviewPro'
      }
      return map[this.siteData?.template] || 'ClassicPreview'
    }
  },
  methods: {
    async fetchSite() {
      try {
        const res = await axios.get(`http://localhost:8080/api/site-request/${this.slug}`)
        this.siteData = res.data
      } catch (err) {
        console.error('❌ Greška pri učitavanju sajta (public):', err)
      }
    }
  },
  created() {
    this.fetchSite()
  }
}
</script>

<style>
/* Dodaj ako želiš da ukloniš marginu za PDF */
body {
  margin: 0;
}
</style>
