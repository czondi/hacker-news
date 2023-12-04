<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.value = colorMode.value === "light" ? "dark" : "light";
};
</script>

<template>
  <HNButton class="absolute top-2 right-2" @click="toggleColorMode">
    <Icon
      v-if="$colorMode.value === 'dark'"
      name="material-symbols:dark-mode-outline"
    />
    <Icon v-else name="material-symbols:light-mode-outline" />
    <span class="ml-2">Toggle theme</span>
  </HNButton>
</template>
