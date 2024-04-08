<template>
  <div>
    We are in the blog
  </div>
  <div>
    Post id is: {{ route.params.id }}
  </div>
</template>

<script setup>
const route = useRoute()
</script>