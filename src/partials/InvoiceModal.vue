<template>
  <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div class="bg-slate-800 text-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
      <h2 class="text-2xl font-bold mb-4 text-center">🧾 Zatraži profakturu</h2>

      <!-- Forma -->
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

        <div>
          <label class="block text-sm mb-1">Opis / predmet profakture (opciono)</label>
          <textarea v-model="form.description" rows="3" class="w-full rounded px-3 py-2 text-black" placeholder="Npr: Express PRO paket + Logo dizajn"></textarea>
        </div>

        <!-- Pregled stavki -->
        <div v-if="items && items.length" class="bg-slate-900 border border-slate-700 rounded p-3">
          <div class="text-sm font-semibold mb-2">Stavke</div>
          <ul class="space-y-1 text-sm">
            <li v-for="(it, idx) in items" :key="idx" class="flex justify-between">
              <span>{{ it.name }} — {{ it.quantity }} × {{ formatPrice(it.price, currencyForDisplay) }}</span>
              <span class="text-slate-300">{{ formatPrice(it.price * it.quantity, currencyForDisplay) }}</span>
            </li>
          </ul>
          <div class="mt-3 text-right text-green-400 font-semibold">
            Ukupno: {{ prettyTotal }}
          </div>
        </div>

        <div v-else class="text-sm text-slate-400">
          Iznos za plaćanje:
          <span class="text-green-400 font-semibold">{{ formatPrice(amount, form.currency) }}</span>
        </div>

        <div class="flex justify-end gap-2 mt-6">
          <button type="button" @click="close" class="px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded text-sm">Otkaži</button>
          <button :disabled="loading" type="submit" class="px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm">
            {{ loading ? '⏳ Slanje...' : '✅ Pošalji zahtev' }}
          </button>
        </div>
      </form>

      <div v-if="createdInvoiceId" class="mt-4 text-center">
        <a
          :href="`http://localhost:8080/api/invoice-request/${createdInvoiceId}/pdf`"
          target="_blank"
          class="text-sm text-purple-400 hover:underline inline-block"
        >
          📄 Preuzmi profakturu (PDF)
        </a>
      </div>

      <hr class="my-4 border-slate-700" />
      <div class="text-xs text-slate-400">
        <p><strong>Fakturiše:</strong> Radoje Božić pr Računarsko programiranje EXPRESS WEB Beograd-Palilula</p>
        <p>Adresa: VITEZOVA KARAĐORĐEVE ZVEZDE 50, 11050 Beograd</p>
        <p>MB: 68170168 | PIB: 115191597</p>
        <p>Račun: 160-XXX-XXXXX-XX</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const props = defineProps({
  visible: { type: Boolean, default: false },
  amount: { type: Number, default: 0 },
  items: { type: Array, default: () => [] },
})

const emit = defineEmits(['close', 'clear-cart'])

const form = ref({
  name: '',
  email: '',
  currency: 'rsd',
  description: ''
})

const loading = ref(false)
const createdInvoiceId = ref(null)

const currencyForDisplay = computed(() => form.value.currency)

const totalCents = computed(() => {
  if (props.items && props.items.length) {
    return props.items.reduce((sum, it) => sum + (it.price * it.quantity), 0)
  }
  return props.amount || 0
})

const prettyTotal = computed(() => formatPrice(totalCents.value, currencyForDisplay.value))

function formatPrice(amountCents, currency) {
  const rate = 117.5
  const value = currency === 'rsd' ? amountCents * rate : amountCents
  return new Intl.NumberFormat('sr-RS', {
    style: 'currency',
    currency: currency === 'rsd' ? 'RSD' : 'EUR'
  }).format(value / 100)
}

function close() {
  createdInvoiceId.value = null
  emit('close')
}

async function submitForm() {
  try {
    loading.value = true
    createdInvoiceId.value = null

    const hasItems = props.items && props.items.length > 0

    const payload = {
      name: form.value.name,
      email: form.value.email,
      currency: form.value.currency,
      description: form.value.description || null,
      ...(hasItems
        ? {
            items: props.items.map(i => ({
              name: i.name,
              qty: i.quantity,
              unit_price_cents: i.price
            }))
          }
        : {
            items: [
              {
                name: 'Poručene usluge',
                qty: 1,
                unit_price_cents: props.amount || 0
              }
            ]
          }
      )
    }

    const res = await axios.post('http://localhost:8080/api/invoice-request', payload)
    const id = res?.data?.invoice?.id
    if (id) createdInvoiceId.value = id

    alert('✅ Zahtev za profakturu je uspešno poslat.')

    // ⬅ Praznimo korpu preko event-a
    emit('clear-cart')

  } catch (err) {
    console.error('❌ Greška prilikom slanja:', err)
    alert('❌ Greška prilikom slanja zahteva.')
  } finally {
    loading.value = false
  }
}
</script>
