<template>
  <div>
    <header>
      <h1>Recipes Explorer</h1>
      <p>I was feeling hungry :)</p>
    </header>

    <main>
      <div>
        <!-- Placeholder for cards -->
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const recipes = ref([
  {
    id: 1,
    title: 'Marmitako (Tuna Stew)',
    time: '45 mins',
    difficulty: 'Medium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Marmitako.JPG',
    image_attribution: 'Núria Pueyo, CC BY-SA 2.5 <https://creativecommons.org/licenses/by-sa/2.5>, via Wikimedia Commons'
  },
  {
    id: 2,
    title: 'Cocotxas de bacalao al pilpil (Cod cheeks in pilpil sauce)',
    time: '45 mins',
    difficulty: 'Hard',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/CocotxasPilPil.jpg',
    image_attribution: 'BocaDorada, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons'
  },
  {
    id: 3,
    title: 'Basque Cheesecake',
    time: '60 mins',
    difficulty: 'Medium',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Basque-cheesecake.jpg',
    image_attribution: 'The-Wuje, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons'
  }
]);
</script>