<script setup lang="ts">
const { score } = defineProps<{
  score?: number;
}>();

const points = computed(() => {
  if (typeof score === "number") {
    return score === 1 ? "1 point" : `${score} points`;
  } else {
    return "unknown points";
  }
});
</script>

<template>
  <span class="text-sm text-zinc-500">{{ points }}</span>
</template>
