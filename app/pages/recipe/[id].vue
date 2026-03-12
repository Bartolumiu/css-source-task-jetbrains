<template>
  <div v-if="recipe">
    <div>
      <img
          :src="recipe.image"
          :alt="recipe.title"
          :title="recipe.image_attribution"
      />
    </div>
    <div>
      <h1>{{ recipe.title }}</h1>

      <div>
        <span>{{ recipe.time }} min</span>
        <span>{{ recipe.difficulty}}</span>
      </div>

      <p>I ate the description (I recommend trying out the recipes though!)</p>

      <NuxtLink to="/">Back to Recipes</NuxtLink>
    </div>
  </div>
  <div v-else>
    <h2>Recipe not found!</h2>
    <NuxtLink to="/">Back to Recipes</NuxtLink>
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