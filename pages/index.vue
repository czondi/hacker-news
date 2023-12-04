<script setup lang="ts">
const error = ref("");
const storyIds = ref<number[]>([]);

try {
  storyIds.value = await $fetch("/api/stories/new");
} catch (e) {
  error.value = (e as Error).message;
}

const firstTenStoryIds = computed(() => storyIds.value.slice(0, 10));
</script>

<template>
  <div class="h-full">
    <HNErrorAlert v-if="error">
      {{ error }}
    </HNErrorAlert>
    <div v-else v-auto-animate class="flex flex-col gap-4">
      <div v-for="(id, index) in firstTenStoryIds" :key="id">
        <HNStory :id="id" :index="index" />
      </div>
    </div>
  </div>
</template>
