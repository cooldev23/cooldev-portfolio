<template>
  <div>
    <h3 class="text-xl">Take a look at my GitHub projects!</h3>
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li v-for="repository in reposWithDescription" :key="repository.id" class="p-4 border border-gray-200 rounded-md bg-blue-100 hover:bg-blue-300 hover:shadow-sm font-mono relative shadow-md dark:text-gray-700">
          <div class="flex justify-between items-center">
            <div>
              <a :href="repository.html_url" target="_blank" class="after:absolute after:inset-0">{{ repository.name }}</a>
              <p class="mt-1 text-sm">{{ repository.description }}</p>
            </div>
            <p>{{ repository.stargazers_count }} *</p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const { error, pending, data } = await useFetch('https://api.github.com/users/cooldev23/repos');

const reposWithDescription = computed(() => data.value.filter(repo => repo.description));
// the below code sorts by stargazers count, but none of my repos are starred, so...I left that part out above
// const reposWithDescription = computed(() => data.value.filter(repo => repo.description).sort(a, b => b.stargazers_count - a.stargazers_count));
</script>