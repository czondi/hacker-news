<script setup lang="ts">
defineProps<{
  to: string;
}>();

defineEmits(["click"]);
</script>

<template>
  <NuxtLink
    class="inline-block h-full dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-600 pt-4 pb-2 px-4 border-b-transparent border-b-4 w-full animate-colors"
    :to="to"
    @click="$emit('click')"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>
.router-link-active {
  @apply border-b-orange-500;
}
</style>
