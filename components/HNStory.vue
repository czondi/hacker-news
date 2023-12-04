<script setup lang="ts">
import type { Item } from "@/types";

const { id, index } = defineProps<{
  id: number;
  index: number;
}>();

const error = ref("");
const story = ref<Item | null>(null);

try {
  story.value = await $fetch(`/api/items/${id}`);
} catch (e) {
  error.value = (e as Error).message;
}
</script>

<template>
  <div
    class="flex bg-zinc-100 dark:bg-zinc-700 dark:text-white rounded-md py-2 px-4 animate-colors border-zinc-300 dark:border-zinc-700 border-[1px]"
  >
    <div
      class="flex shrink-0 justify-center items-center text-sm text-white w-8 h-8 mr-2 bg-orange-500 rounded-md"
    >
      #{{ index + 1 }}
    </div>
    <div>
      <h2 class="text-xl font-bold">
        <a :href="story?.url" class="hover:underline decoration-orange-500">{{
          story?.title
        }}</a>
      </h2>
      <div>
        <HNStorySite :url="story?.url" />
      </div>
      <HNStoryText :text="story?.text" />
      <div class="flex gap-2">
        <HNTimeElapsed :time="story?.time" />
        <HNUser :user="story?.by" />
        <HNStoryPoints :score="story?.score" />
        <HNCommentsCount :count="story?.kids?.length" />
      </div>
    </div>
  </div>
</template>
