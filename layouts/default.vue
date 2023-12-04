<template>
  <div class="bg-zinc-200 dark:bg-zinc-800 animate-colors overflow-hidden">
    <HNHeader />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
main {
  height: calc(100vh - 52px);
}
</style>
