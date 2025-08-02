<template>
  <div class="fixed bottom-6 right-6 z-50">
    <button @click="visible = !visible" class="bg-purple-600 text-white p-3 rounded-full shadow-lg">
      💬
    </button>

    <div v-if="visible" class="bg-white w-80 h-[400px] rounded shadow-lg overflow-hidden flex flex-col">
      <div class="bg-purple-700 text-white px-4 py-2 font-semibold">
        🤖 Express Web Pomoćnik
      </div>
      <div class="flex-1 p-3 overflow-y-auto text-sm text-gray-800">
        <div v-for="(msg, index) in messages" :key="index" class="mb-2">
          <strong>{{ msg.role === 'user' ? 'Vi' : 'Bot' }}:</strong> {{ msg.content }}
        </div>
      </div>
      <form @submit.prevent="sendMessage" class="p-2 border-t border-gray-200 flex gap-2">
        <input v-model="input" class="flex-1 border rounded px-2 py-1 text-sm text-black" placeholder="Postavi pitanje..." />
        <button type="submit" class="bg-purple-600 text-white px-3 py-1 text-sm rounded">➤</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ChatWidget',
  data() {
    return {
      visible: false,
      input: '',
      messages: [
        { role: 'assistant', content: 'Zdravo! Kako mogu da vam pomognem?' }
      ]
    }
  },
  methods: {
    async sendMessage() {
  const userMsg = this.input.trim()
  if (!userMsg) return

  this.messages.push({ role: 'user', content: userMsg })
  this.input = ''

  try {
    const res = await axios.post('http://localhost:8080/api/ai/chat', {
      message: userMsg
    })
    const reply = res.data.reply || 'Nešto je pošlo po zlu.'
    this.messages.push({ role: 'assistant', content: reply })
  } catch (error) {
    this.messages.push({ role: 'assistant', content: '⚠️ Došlo je do greške. Pokušajte ponovo.' })
    console.error('AI error:', error)
  }
}
  }
}
</script>
