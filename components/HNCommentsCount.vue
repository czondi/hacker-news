<script setup lang="ts">
const { count } = defineProps<{
  count?: number;
}>();

const comments = computed(() => {
  if (typeof count === "number") {
    return count > 1 ? `${count} comments` : "1 comment";
  } else {
    return "no comments";
  }
});
</script>

<template>
  <span class="text-sm text-zinc-500"
    ><Icon
      class="text-orange-500 mr-1"
      name="material-symbols:chat-bubble-outline"
    />{{ comments }}</span
  >
</template>
