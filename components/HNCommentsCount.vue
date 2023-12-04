<script setup lang="ts">
const { count } = defineProps<{
  count?: number;
}>();

const points = computed(() => {
  if (typeof count === "number") {
    return count > 1 ? `${count} comments` : "1 comment";
  } else {
    return "no comments";
  }
});
</script>

<template>
  <span class="text-sm text-zinc-500">{{ points }}</span>
</template>
