<template>
  <section class="bg-slate-900 py-16 text-center">
    <h3 class="text-2xl text-white font-bold mb-4">{{ $t('support.cta_title') }}</h3>
    <p class="text-slate-400 mb-6">{{ $t('support.cta_subtitle') }}</p>
    <router-link
      to="/contact"
      class="btn text-white bg-purple-500 hover:bg-purple-600 transition px-6 py-2 rounded-lg"
    >
      {{ $t('support.cta_button') }}
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'SupportCTA',
}
</script>
