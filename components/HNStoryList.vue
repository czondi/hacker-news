<script setup lang="ts">
const { storyIds, error } = withDefaults(
  defineProps<{
    storyIds: number[];
    error: string;
  }>(),
  {
    storyIds: () => [],
    error: "",
  },
);

const firstTenStoryIds = computed(() => storyIds.slice(0, 10));
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
