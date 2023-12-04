<script setup lang="ts">
const error = ref("");
const storyIds = ref<number[]>([]);

try {
  storyIds.value = await $fetch("/api/stories/show");
} catch (e) {
  error.value = (e as Error).message;
}
</script>

<template>
  <HNStoryList :story-ids="storyIds" :error="error" />
</template>
