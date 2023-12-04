<script setup lang="ts">
import {
  relativeDate,
  absoluteDate,
} from "@/composables/useDateHelpers.client";

const { time } = defineProps<{
  time?: number;
}>();

const timeElapsed = computed(() => {
  if (time) {
    return relativeDate(time * 1000);
  } else {
    return "some time ago";
  }
});

const timeAbsolute = computed(() => {
  if (time) {
    return absoluteDate(time * 1000);
  } else {
    return "unknown time";
  }
});
</script>

<template>
  <span class="text-sm text-zinc-500" :title="timeAbsolute">{{
    timeElapsed
  }}</span>
</template>
