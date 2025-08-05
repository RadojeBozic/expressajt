<template>
  <div class="min-h-screen bg-slate-900 text-white py-12 px-4">
    <Header />

    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold mb-6 text-center mt-[6rem]">🛒 {{ $t('checkout.title') }}</h1>

      <div v-if="cartItems.length === 0" class="text-center text-slate-400">
        {{ $t('checkout.empty') }}
      </div>

      <div v-else class="space-y-4">
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex justify-between items-center bg-slate-800 p-4 rounded"
        >
          <div>
            <h3 class="text-lg font-semibold">{{ item.name }}</h3>
            <p class="text-sm text-slate-400">
              {{ item.quantity }} x {{ formatPrice(item.price) }}
            </p>
            <button
              @click="removeItem(item.id)"
              class="text-xs text-red-400 hover:text-red-200 mt-1"
            >
              ❌ {{ $t('checkout.remove') }}
            </button>
          </div>
          <p class="text-purple-400 font-bold">
            {{ formatPrice(item.price * item.quantity) }}
          </p>
        </div>

        <div class="text-right text-lg mt-6 font-semibold text-green-400">
          {{ $t('checkout.total') }}: {{ formatPrice(totalAmount) }}
        </div>

        <button
          @click="handleStripeCheckout"
          class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded mt-6"
        >
          💳 {{ $t('checkout.payNow') }}
        </button>
      </div>
    </div>
  </div>
    <Footer />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import Header from '@/partials/Header.vue'
import Footer from '@/partials/Footer.vue'
import { useCart } from '@/utils/CartService'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const { cart, removeFromCart, clearCart } = useCart()
const cartItems = ref([])

onMounted(() => {
  cartItems.value = [...cart.value]
})

const totalAmount = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

function formatPrice(value) {
  return new Intl.NumberFormat('sr-RS', {
    style: 'currency',
    currency: 'EUR'
  }).format(value / 100)
}

function removeItem(id) {
  removeFromCart(id)
  cartItems.value = [...cart.value] // osvežavanje iz hook-a
}

async function handleStripeCheckout() {
  try {
    const token = 'tok_visa' // Test token
    const res = await axios.post('http://localhost:8080/api/stripe/checkout', {
      amount: totalAmount.value,
      currency: 'eur',
      description: 'ExpressWeb Checkout',
      token
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    alert('✅ Plaćanje uspešno: ' + res.data.charge.id)
    clearCart()
    cartItems.value = []

  } catch (err) {
    console.error('❌ Stripe greška:', err)
    alert('❌ Plaćanje nije uspelo.')
  }
}
</script>
