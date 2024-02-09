<template>
  <div class="grid grid-rows-[auto_1fr_auto] min-h-screen h-screen">
    <header class="py-3">
      <UContainer>
        <Header />
      </UContainer>
    </header>
    <main>
      <UContainer>
        <slot name="default" />
      </UContainer>
    </main>
    <footer>
      <UContainer>
        <Footer />
      </UContainer>
    </footer>
  </div>
</template>
