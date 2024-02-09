<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    title: 'Nuxt 3 + NuxtUI',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  })
</script>
