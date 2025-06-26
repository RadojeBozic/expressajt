<template>
  <section class="bg-slate-800 text-slate-300 py-16">
    <div class="max-w-4xl mx-auto px-4">
      <h3 class="text-2xl font-bold text-white mb-8">{{ $t('contact.info.address_title') }}</h3>
      <ul class="space-y-4">
        <li><strong>{{ $t('contact.info.address_title') }}:</strong> {{ $t('contact.info.address_line1') }}, {{ $t('contact.info.address_line2') }}</li>
        <li><strong>{{ $t('contact.info.email_title') }}:</strong> <a class="text-purple-400 hover:underline" href="mailto:{{ $t('contact.info.email_value') }}">{{ $t('contact.info.email_value') }}</a></li>
        <li><strong>{{ $t('contact.info.phone_title') }}:</strong> <a class="text-purple-400 hover:underline" href="tel:+381641234567">{{ $t('contact.info.phone_value') }}</a></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactInfo',
}
</script>