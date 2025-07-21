<template>
  <div class="bg-slate-800 rounded-lg shadow-md p-6 flex flex-col justify-between">
    <div>
      <h2 class="text-xl font-bold mb-2 text-white">{{ title }}</h2>
      <p class="text-slate-400 text-sm mb-4">{{ description }}</p>
    </div>
    <a
      :href="link"
      target="_blank"
      class="mt-auto inline-block text-center bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded text-sm transition"
    >
      🌐 Pogledaj prezentaciju
    </a>
  </div>
</template>

<script>
export default {
  name: 'DemoBox',
  props: {
    title: String,
    description: String,
    link: String
  }
}
</script>
