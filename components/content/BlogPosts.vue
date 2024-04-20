<template>
  <section class="not-prose font-mono">
    <ul class="grid grid-cols-1 gap-4">
      <li v-for="post in posts" :key="post._id" class="p-4 border border-gray-200 rounded-md bg-blue-100 hover:bg-blue-300 hover:shadow-sm font-mono relative shadow-md dark:text-gray-700">
        <NuxtLink :to="post._path" class="mr-2 after:absolute after:inset-0">{{ post.title }}</NuxtLink>
        <p>
          {{ formatDate(post.publishedAt) }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-list', () => queryContent('/blog').where({ _path: { $ne: '/blog' } }).only(['title', '_path', '_id', 'publishedAt']).sort({ publishedAt: -1 }).find());

function formatDate(dateString) {
  const date = new Date(dateString);
  // Then specify how you want your dates to be formatted
  return new Intl.DateTimeFormat('default', {dateStyle: 'long'}).format(date);
}
</script>