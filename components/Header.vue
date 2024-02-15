<template>
  <header class="py-3">
    <UContainer>
      <UHorizontalNavigation :links="links">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative">{{ link.label }}</span>
        </template>
      </UHorizontalNavigation>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
  const links = [
    {
      label: 'Navigation',
      to: '#'
    },
    {
      label: 'Next',
      to: ''
    }
  ]
</script>
