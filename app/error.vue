<template>
  <div>
    <h1>{{ error.statusCode }}</h1>

    <h2>
      {{ error.statusCode === 404 ? 'Recipe Not Found' : 'Something went wrong' }}
    </h2>

    <p>
      Looks like you wandered a bit too far off the trail looking for that perfect pintxo. Let\'s get you back to the kitchen.
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