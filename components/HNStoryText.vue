<script setup lang="ts">
const { text, length } = withDefaults(
  defineProps<{
    text?: string;
    length?: number;
  }>(),
  {
    text: "",
    length: 100,
  },
);

const trimmedText = computed(() => {
  return text.length > length ? text.substring(0, length) + "..." : text;
});
</script>

<template>
  <p class="whitespace-pre-line">{{ trimmedText }}</p>
</template>
