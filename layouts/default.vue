<template>
  <div class="container mx-auto max-w-4xl">
    <header class="flex justify-between items-center mt-4">
      <div>
        <NuxtLink to="/" class="text-2xl p-2 font-semibold hover:bg-blue-200">Sean Cordill</NuxtLink>
      </div>
      <Menu />
    </header>
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>