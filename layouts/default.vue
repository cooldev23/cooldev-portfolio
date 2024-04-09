<template>
  <div class="container mx-auto max-w-4xl">
    <header class="flex justify-between items-center mt-4">
      <div>
        <NuxtLink to="/" class="text-2xl p-2 font-semibold hover:bg-blue-200">Sean Cordill</NuxtLink>
      </div>
      <Menu />
    </header>
    <main class="mt-10 p-2">
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
}
</style>