<template>
  <div class="recipe-grid -mx-6">
    <RecipeCard
        v-for="recipe in recipes"
        :key="recipe.id"
        :id="recipe.id"
        :title="recipe.title"
        :time="recipe.time"
        :difficulty="recipe.difficulty"
        :image="recipe.image"
        :image_attribution="recipe.image_attribution"
    />
  </div>
</template>

<script setup lang="ts">
import { useRecipes } from "~/composables/useRecipes";

const { recipes } = useRecipes();
</script>