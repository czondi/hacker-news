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

const scrollElement = ref<HTMLElement | null>(null);
const stories = ref<number[]>([]);
const lastStoryIndex = ref(0);
const threshold = 5;

useInfiniteScroll(
  scrollElement,
  () => {
    if (lastStoryIndex.value < storyIds.length) {
      const newStories = storyIds.slice(
        lastStoryIndex.value,
        lastStoryIndex.value + threshold,
      );
      stories.value.push(...newStories);
      lastStoryIndex.value += threshold;
    }
  },
  { distance: 10 },
);
</script>

<template>
  <div ref="scrollElement" class="h-full overflow-y-auto">
    <div class="max-w-5xl p-4 mx-auto">
      <HNErrorAlert v-if="error">
        {{ error }}
      </HNErrorAlert>
      <div v-else v-auto-animate class="flex flex-col gap-4">
        <div v-for="(id, index) in stories" :key="id">
          <HNStory :id="id" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>
