<template>
  <div>
    <button @click="toggleColorMode" class="ml-5 py-2 px-3 w-36 text-xs bg-blue-100 text-gray-700 hover:bg-blue-300 dark:text-gray-700 rounded shadow-md ">Change to {{ nextMode }} {{ nextModeIcon }}</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const colorMode = useColorMode();

const modes = [
  'system',
  'light',
  'dark'
]

const nextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑'
}

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference);
  const nextModeIndex = currentModeIndex === 2 ? 0 : currentModeIndex + 1;
  return modes[nextModeIndex];
});

const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);

function toggleColorMode() {
  colorMode.preference = nextMode.value;
}
</script>