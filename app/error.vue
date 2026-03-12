<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4 font-sans">
    <h1 class="text-9xl font-extrabold text-primary-500 mb-4">{{ error.statusCode }}</h1>

    <h2 class="text-3xl font-bold text-gray-800 mb-6">
      {{ error.statusCode === 404 ? 'Recipe Not Found' : 'Something went wrong' }}
    </h2>

    <p class="text-gray-600 mb-8 max-w-md text-lg">
      Looks like you wandered a bit too far off the trail looking for that perfect pintxo. Let's get you back to the kitchen.
    </p>

    <button @click="handleError" class="btn-primary">
      Back to Recipes
    </button>
  </div>
</template>

<script setup lang="ts">
import {clearError} from "#app";

defineProps({
  error: Object
});

const handleError = () => clearError({ redirect: '/' });
</script>