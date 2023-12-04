<script setup lang="ts">
import type { Item } from "@/types";

const hasError = ref(false);
const errorMsg = ref("");
const stories = ref<Item[]>([]);

try {
  stories.value = await $fetch("/api/stories/items");
} catch (error) {
  hasError.value = true;
  errorMsg.value = (error as Error).message;
}
</script>

<template>
  <div class="h-full">
    <HNErrorAlert v-if="hasError">
      {{ errorMsg }}
    </HNErrorAlert>
  </div>
</template>
