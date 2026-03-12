<template>
  <div>
    <img :src="image" :alt="title" :title="image_attribution" />
    <div>
      <h2>{{ title }}</h2>

      <div>
        <span>{{ time }} min</span>
        <span>{{ difficulty }}</span>
      </div>

      <div>
        <button>View Recipe</button>
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