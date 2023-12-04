<script setup lang="ts">
const { user } = defineProps<{
  user?: string;
}>();

const userName = computed(() => {
  if (!user) return "unknown";
  return user;
});
</script>

<template>
  <span class="text-sm text-zinc-500">
    by
    <span class="font-bold text-orange-500">{{ userName }}</span>
  </span>
</template>
