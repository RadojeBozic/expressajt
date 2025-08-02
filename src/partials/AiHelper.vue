<template>
  <div class="bg-slate-800 text-white p-4 rounded-lg shadow-md">
    <h3 class="text-lg font-semibold mb-2">🤖 {{ $t('aihelper.title') }}</h3>
    <button
      class="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white text-sm"
      @click="generateSuggestion"
      :disabled="loading"
    >
      {{ loading ? $t('aihelper.generating') : $t('aihelper.request') }}
    </button>

    <div v-if="suggestion" class="mt-4 bg-slate-700 p-3 rounded">
      <p class="text-sm whitespace-pre-line">{{ suggestion }}</p>
    </div>

    <div v-if="error" class="mt-2 text-red-400 text-sm">⚠️ {{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AiHelper',
  props: {
    prompt: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      suggestion: '',
      loading: false,
      error: ''
    }
  },
  methods: {
    async generateSuggestion() {
      this.loading = true
      this.suggestion = ''
      this.error = ''

      try {
        const response = await axios.post('http://localhost:8080/api/ai/suggest', {
          prompt: this.prompt
        })

        this.suggestion = response.data.suggestion || ''
      } catch (err) {
        if (err.response?.status === 429) {
          this.error = this.$t('aihelper.limit')
        } else {
          this.error = this.$t('aihelper.error')
        }
        console.error('❌ AI error:', err)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
