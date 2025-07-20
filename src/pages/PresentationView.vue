<template>
  <div v-if="siteData">
    <!-- INFO o paketu -->
    <div class="text-center mb-6">
      <h2 class="text-lg text-white font-semibold mb-1 flex items-center justify-center gap-2">
        📢 Pregled sajta:
        <span
          class="text-xs font-bold px-2 py-1 rounded uppercase"
          :class="siteData.type === 'pro' ? 'bg-yellow-500 text-slate-900' : 'bg-green-500 text-white'"
        >
          {{ siteData.type === 'pro' ? 'PRO' : 'FREE' }}
        </span>
      </h2>

      <!-- 🟡 PRO poruka -->
      <div v-if="siteData.type === 'pro'" class="bg-yellow-100 text-yellow-800 text-sm p-4 rounded mb-4 max-w-xl mx-auto border border-yellow-300">
        <strong>⚠️ Ovo je PRO prezentacija.</strong><br />
        Uskoro će biti omogućeno uređivanje sadržaja i status aktivacije.<br />
        Imate pitanje? <router-link to="/contact" class="text-blue-600 underline hover:text-blue-800">Kontaktirajte podršku</router-link>.
      </div>
    </div>

    <!-- 🔧 ADMIN/USER AKCIJE -->
    <div v-if="isOwnerOrAdmin" class="flex justify-center gap-4 mb-6">
      <router-link
        :to="`/edit-site/${slug}`"
        class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded shadow"
      >
        ✏️ Uredi
      </router-link>
      <button
        @click="confirmDelete"
        class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded shadow"
      >
        🗑 Obriši
      </button>
    </div>

    <!-- PRIKAZ ŠABLONA -->
    <component :is="templateComponent" :data="siteData" />

  </div>

  <div v-else class="text-white text-center py-20">Učitavanje...</div>
</template>

<script>
import axios from 'axios'
import { getCurrentUser } from '../utils/auth'

// Import svih šablona
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
  name: 'PresentationView',
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
      user: getCurrentUser()
    }
  },
  computed: {
    fullLink() {
      return `${window.location.origin}/prezentacije/${this.slug}`
    },
    isOwnerOrAdmin() {
      return this.user && (this.user.role === 'admin' || this.user.role === 'superadmin' || this.user.id === this.siteData?.user_id)
    },
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
        const res = await axios.get(`http://localhost:8090/api/site-request/${this.slug}`)
        this.siteData = res.data
      } catch (err) {
        console.error('❌ Greška pri preuzimanju sajta:', err)
      }
    },
    async confirmDelete() {
      if (!confirm('Da li ste sigurni da želite da obrišete ovu prezentaciju?')) return
      try {
        const token = localStorage.getItem('token')
        await axios.delete(`http://localhost:8090/api/site-request/${this.slug}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        alert('🗑 Prezentacija je uspešno obrisana.')
        this.$router.push('/dashboard') // ili admin ruta
      } catch (err) {
        console.error('❌ Greška pri brisanju:', err)
        alert('⚠️ Nešto nije u redu. Proverite dozvole ili pokušajte ponovo.')
      }
    }
  },
  created() {
    this.fetchSite()
  }
}
</script>
