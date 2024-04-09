<template>
  <nav class="font-mono">
    <ul class="flex space-x-4">
      <li>
        <NuxtLink to="/" class="menu-item">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="menu-item">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="menu-item">Blog</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu-item {
  @apply p-2 hover:bg-blue-200
}
</style>