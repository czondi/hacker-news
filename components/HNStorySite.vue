<script setup lang="ts">
const { url } = defineProps<{
  url?: string;
}>();

const site = computed(() => {
  if (!url) return "unknown";
  const urlObject = new URL(url);
  return urlObject.hostname;
});
</script>

<template>
  <span class="text-sm text-zinc-500">{{ site }}</span>
</template>
