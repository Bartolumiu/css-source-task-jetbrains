<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 font-sans">
    <header class="bg-white shadow-sm py-6 px-4 md:px-8 mb-8">
      <h1 class="text-3xl font-bold text-primary-600"><NuxtLink to="/">Recipes Explorer</NuxtLink></h1>
      <p class="text-gray-500 mt-2">I was feeling hungry :)</p>
    </header>

    <main class="max-w-6xl mx-auto px-4 md:px-8 pb-12">
      <NuxtPage />
    </main>
  </div>
</template>