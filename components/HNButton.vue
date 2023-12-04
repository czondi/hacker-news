<script setup lang="ts">
withDefaults(
  defineProps<{
    flavor?: "default" | "primary" | "secondary";
  }>(),
  {
    flavor: "default",
  },
);
</script>

<template>
  <button :class="[flavor]">
    <slot />
  </button>
</template>

<style scoped>
button {
  @apply px-3 py-1 flex items-center rounded-full animate-colors;
}

.default,
.secondary {
  @apply bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 text-black dark:text-white;
}

.primary {
  @apply bg-orange-500 hover:bg-orange-600 dark:bg-zinc-100 dark:hover:bg-zinc-300 text-white dark:text-black;
}

.secondary {
  @apply bg-white hover:bg-zinc-200 border-orange-500 border-[1px] -m-[1px];
}
</style>
