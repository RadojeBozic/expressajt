<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-slate-800 text-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
      <h2 class="text-2xl font-bold mb-4 text-center">🧾 Zatraži profakturu</h2>

      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label class="block text-sm mb-1">Ime firme / Kupca</label>
          <input v-model="form.name" required class="w-full rounded px-3 py-2 text-black" />
        </div>
        <div>
          <label class="block text-sm mb-1">Email</label>
          <input v-model="form.email" required type="email" class="w-full rounded px-3 py-2 text-black" />
        </div>
        <div>
          <label class="block text-sm mb-1">Valuta</label>
          <select v-model="form.currency" class="w-full rounded px-3 py-2 text-black">
            <option value="rsd">RSD (dinar)</option>
            <option value="eur">EUR (devizno)</option>
          </select>
        </div>

        <div class="text-sm text-slate-400">
          Iznos za plaćanje: <span class="text-green-400 font-semibold">{{ formatPrice(amount, form.currency) }}</span>
        </div>

        <div class="flex justify-end gap-2 mt-6">
          <button type="button" @click="$emit('close')" class="px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded text-sm">Otkaži</button>
          <button type="submit" class="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm">✅ Pošalji zahtev</button>
        </div>
      </form>
      <hr class="my-4 border-slate-700" />

        <div class="text-xs text-slate-400">
            <p><strong>Fakturiše:</strong> Radoje Božić pr Računarsko programiranje EXPRESS WEB Beograd-Palilula</p>
            <p>Adresa: VITEZOVA KARAĐORĐEVE ZVEZDE 50, 11050 Beograd</p>
            <p>MB: 68170168 | PIB: 115191597</p>
            <p>Račun: 160-XXX-XXXXX-XX</p>
            <!-- <a
                :href="`http://localhost:8080/api/invoice-request/${invoiceId}/pdf`"
                target="_blank"
                class="text-sm text-purple-400 hover:underline mt-4 inline-block"
                >
                📄 Preuzmi profakturu (PDF)
            </a> -->
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'

const props = defineProps({
  visible: Boolean,
  amount: Number
})

const emit = defineEmits(['close'])

const form = ref({
  name: '',
  email: '',
  currency: 'rsd'
})

function formatPrice(amount, currency) {
  const value = currency === 'rsd' ? amount * 117.5 : amount
  return new Intl.NumberFormat('sr-RS', {
    style: 'currency',
    currency: currency === 'rsd' ? 'RSD' : 'EUR'
  }).format(value / 100)
}

async function submitForm() {
  try {
    const payload = {
      name: form.value.name,
      email: form.value.email,
      currency: form.value.currency,
      amount: props.amount
    }

    await axios.post('http://localhost:8080/api/invoice-request', payload)
    alert('✅ Zahtev za profakturu je uspešno poslat.')
    emit('close')
  } catch (err) {
    console.error('❌ Greška prilikom slanja:', err)
    alert('❌ Greška prilikom slanja zahteva.')
  }
}

</script>