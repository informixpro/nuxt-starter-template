<template>
  <h1 class="text-5xl font-bold mt-20">
    <span class="text-primary">{{ page.title }}</span>
  </h1>
  <p class="mt-20">{{ page.description }}</p>
</template>

<script setup lang="ts">
  const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>
