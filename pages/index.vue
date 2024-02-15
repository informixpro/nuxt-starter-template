<template>
  <main class="flex flex-col items-center justify-center h-full">
    <UContainer>
      <section class="flex flex-col gap-y-10">
        <h1 class="text-5xl font-bold text-center">
          <span class="text-primary">{{ page.title }}</span>
        </h1>
        <p class="text-center">{{ page.description }}</p>
        <UButton
          class="mx-auto"
          color="primary"
          :label="page.hero.link.label"
          :to="page.hero.link.to"
          :size="page.hero.link.size"
          :icon="page.hero.link.icon"
        />
      </section>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
  const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
</script>
