<template>
  <div id="hero" class="bg-white text-gray-900 font-sans px-6 py-8 max-w-5xl mx-auto shadow rounded-lg scroll-smooth">
    <!-- Header -->
    <header class="flex items-center justify-between mb-8 border-b border-gray-300 pb-4">
      <div class="flex items-center space-x-2">
        <img
          v-if="data.logo_path"
          :src="getImageUrl(data.logo_path)"
          alt="Logo"
          class="h-12 w-12 object-contain rounded-full hover:scale-105 transition-transform duration-300"
        />
        <h1 v-else class="text-xl font-bold">{{ data.name }}</h1>
      </div>
      <nav class="space-x-4 text-sm">
        <a href="#about" class="hover:underline text-gray-600">{{ $t('businessPreviewPro.nav.about') }}</a>
        <a href="#ponuda" class="hover:underline text-gray-600">{{ $t('businessPreviewPro.nav.offer') }}</a>
        <a href="#kontakt" class="hover:underline text-gray-600">{{ $t('businessPreviewPro.nav.contact') }}</a>
      </nav>
    </header>

    <!-- Hero -->
    <section class="mb-10 min-h-[70vh]" id="hero">
      <h2 class="text-3xl font-bold mb-2">{{ data.hero_title }}</h2>
      <p class="text-gray-600 mb-4 italic break-words whitespace-pre-line">{{ data.hero_subtitle }}</p>
      <img
        v-if="data.hero_image"
        :src="getImageUrl(data.hero_image)"
        class="w-full h-[400px] object-cover rounded-lg hover:scale-105 transition duration-300"
      />
    </section>

    <!-- Opis delatnosti -->
    <section v-if="data.description" class="mb-10">
      <h2 class="text-xl font-semibold mb-2 text-blue-800">{{ $t('businessPreviewPro.activity') }}</h2>
      <p class="text-gray-700 text-sm whitespace-pre-line break-words">
        {{ data.description }}
      </p>
    </section>

    <!-- Napomena -->
    <div class="bg-purple-100 border border-purple-300 rounded p-4 text-sm text-purple-800 mb-10">
      * {{ $t('businessPreviewPro.note') }}
    </div>

    <!-- O nama -->
    <section class="mb-10" id="about">
      <h2 class="text-2xl font-semibold mb-4 text-blue-800">{{ data.about_title }}</h2>
      <div class="flex flex-col md:flex-row gap-6 items-center">
        <img
          v-if="data.about_image"
          :src="getImageUrl(data.about_image)"
          class="w-60 h-60 object-cover rounded shadow hover:scale-105 transition duration-300"
        />
        <div class="text-sm leading-relaxed whitespace-pre-line break-words w-full text-justify">
          {{ data.about_text }}
        </div>
      </div>
    </section>

    <!-- Ponuda -->
    <section id="ponuda" class="mb-10">
      <h2 class="text-2xl font-semibold mb-4 text-blue-800">{{ data.offer_title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(item, index) in data.offer_items"
          :key="index"
          class="flex flex-col items-center text-center"
        >
          <img
            v-if="item.image"
            :src="getImageUrl(item.image)"
            class="w-full h-48 object-cover rounded shadow hover:scale-105 transition duration-300"
          />
          <p class="mt-2 text-sm font-medium break-words">{{ item.title }}</p>
        </div>
      </div>
    </section>

    <!-- Video -->
    <section v-if="embedVideoUrl" class="my-10">
      <h2 class="text-2xl font-semibold mb-4 text-blue-800">{{ $t('businessPreviewPro.video') }}</h2>
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          :src="embedVideoUrl"
          frameborder="0"
          allowfullscreen
          class="w-full h-80 rounded"
        ></iframe>
      </div>
    </section>

    <!-- PDF prikaz -->
    <section v-if="data.pdf_file" class="my-10">
      <h2 class="text-2xl font-semibold mb-4 text-blue-800">{{ $t('businessPreviewPro.pdf') }}</h2>
      <iframe
        :src="getImageUrl(data.pdf_file)"
        width="100%"
        height="600"
        style="border: 1px solid #ccc;"
      ></iframe>
    </section>

    <!-- Kontakt -->
    <section id="kontakt" class="my-10">
      <h2 class="text-2xl font-semibold mb-4 text-blue-800">{{ $t('businessPreviewPro.contact') }}</h2>
      <div class="text-sm space-y-2 text-gray-700">
        <p><strong>Adresa:</strong> {{ data.address || 'Nije uneta' }}</p>
        <p><strong>Telefon:</strong> {{ data.phone }}</p>
        <p v-if="data.phone2"><strong>Telefon 2:</strong> {{ data.phone2 }}</p>
        <p v-if="data.phone3"><strong>Telefon 3:</strong> {{ data.phone3 }}</p>
        <p><strong>Email:</strong> {{ data.email }}</p>
        <p v-if="data.email2"><strong>Email 2:</strong> {{ data.email2 }}</p>
        <p v-if="data.email3"><strong>Email 3:</strong> {{ data.email3 }}</p>
      </div>
      <div v-if="data.address" class="mt-4 w-full h-64 rounded overflow-hidden shadow">
        <iframe
          :src="googleMapUrl"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

    <!-- Društvene mreže -->
    <section class="mb-6 text-center">
      <p class="text-sm mb-2 text-gray-700">{{ $t('businessPreviewPro.social') }}</p>
      <div class="flex justify-center gap-6 text-2xl text-gray-600">
        <a :href="isValidUrl(data.facebook) ? data.facebook : fallbackFacebook" target="_blank" class="hover:text-blue-600 transition">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a :href="isValidUrl(data.instagram) ? data.instagram : fallbackInstagram" target="_blank" class="hover:text-pink-600 transition">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center text-sm text-gray-500 pt-4 border-t border-gray-300 mt-10">
      © {{ new Date().getFullYear() }} {{ data.name || 'Vaša firma' }} — 
      <a href="#hero" class="text-purple-600 hover:underline">{{ $t('businessPreviewPro.backToTop') }}</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BusinessPreviewPro',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    fallbackFacebook() {
      return 'https://facebook.com/gbsplatform'
    },
    fallbackInstagram() {
      return 'https://instagram.com/gbsplatform'
    },
    googleMapUrl() {
      const query = encodeURIComponent(this.data.address || '')
      return `https://maps.google.com/maps?q=${query}&output=embed`
    },
    embedVideoUrl() {
      if (!this.data.video_url) return null;
      try {
        const url = new URL(this.data.video_url);
        const videoId = url.searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
      } catch {
        return null;
      }
    }
  },
  methods: {
    getImageUrl(path) {
      return path ? `http://localhost:8080/storage/${path}` : ''
    },
    isValidUrl(url) {
      try {
        new URL(url)
        return true
      } catch (_) {
        return false
      }
    }
  }
}
</script>
