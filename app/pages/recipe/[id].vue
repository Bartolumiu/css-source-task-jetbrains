<template>
  <div v-if="recipe" class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col md:flex-row">
    <div class="md:w-1/2">
      <img
          :src="recipe.image"
          :alt="recipe.title"
          :title="recipe.image_attribution"
          class="w-full h-64 md:h-96 object-cover cursor-help"
      />
    </div>
    <div class="p-8 md:w-1/2 flex flex-col justify-center">
      <h1 class="text-3xl font-bold mb-4">{{ recipe.title }}</h1>

      <div class="flex gap-6 text-gray-600 mb-6 border-b border-gray-100 pb-6">
        <span class="flex items-center gap-2">{{ recipe.time }} min</span>
        <span class="flex items-center gap-2">{{ recipe.difficulty}}</span>
      </div>

      <p class="text-gray-700 leading-relaxed mb-8">I ate the description (I recommend trying out the recipes though!)</p>

      <NuxtLink to="/" class="btn-primary text-center inline-block w-fit">Back to Recipes</NuxtLink>
    </div>
  </div>
  <div v-else class="text-center py-12">
    <h2 class="text-2xl font-bold text-gray-700">Recipe not found!</h2>
    <NuxtLink to="/" class="text-primary-600 hover:underline mt-4 inline-block">Back to Recipes</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useRecipes } from "~/composables/useRecipes";

const route = useRoute();
const { getRecipeById } = useRecipes();

const recipeId = Number(route.params.id);
const recipe = (!Number.isNaN(recipeId))
  ? getRecipeById(recipeId)
  : null;

</script>