<template>
  <div class="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
    <img :src="image" :alt="title" :title="image_attribution" class="w-full h-48 object-cover cursor-help" />
    <div class="p-5 flex-1 flex flex-col">
      <h2 class="text-xl font-bold mb-2">{{ title }}</h2>

      <div class="flex items-center text-sm text-gray-600 mb-4 gap-4">
        <span class="flex items-center gap-1">{{ time }} min</span>
        <span class="flex items-center gap-1">{{ difficulty }}</span>
      </div>

      <div class="mt-auto">
        <button class="btn-primary w-full">View Recipe</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  time: Number,
  difficulty: String,
  image: String,
  image_attribution: String,
})
</script>