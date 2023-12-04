<script setup lang="ts">
defineProps<{
  to: string;
}>();
</script>

<template>
  <NuxtLink
    class="inline-block h-full dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-600 pt-4 pb-2 px-4 border-b-transparent border-b-4 animate-colors"
    :to="to"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>
.router-link-active {
  @apply border-b-orange-500;
}
</style>
