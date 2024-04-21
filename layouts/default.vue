<template>
  <div class="container mx-auto max-w-4xl">
    <header class="pr-3 flex justify-between items-center bg-blue-400">
      <div>
        <NuxtLink to="/">
          <DevLogo />
        </NuxtLink>
      </div>
      <div class="flex items-center">
        <Menu />
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
      </div>
    </header>
    <main class="px-2 pb-5 bg-white min-h-screen dark:bg-gray-800 dark:text-gray-300">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s - Sean Cordill',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Tenor+Sans&family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style>
body {
  font-family: 'Tenor Sans';
  @apply bg-gray-100;
}

body {
  @apply bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>