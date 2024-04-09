<template>
  <div>
    <h3>Projects</h3>
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again</section>
    <section v-else>Here is the list of repos</section>
  </div>
</template>

<script setup>
const { error, pending, data } = await useFetch('https://api.github.com/users/cooldev23/repos');
</script>