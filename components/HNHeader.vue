<script setup lang="ts">
const isMenuOpen = ref(false);
const menuElement = ref<HTMLElement | null>(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onClickOutside(menuElement, () => {
  isMenuOpen.value = false;
});
</script>

<template>
  <header
    ref="menuElement"
    class="flex items-center justify-between px-8 py-2 bg-zinc-100 dark:bg-zinc-700 shadow-md relative z-10 animate-colors"
  >
    <NuxtLink to="/"><HNLogo /></NuxtLink>
    <HNButton class="lg:!hidden" @click="toggleMenu">
      <Icon v-if="isMenuOpen" class="w-6 h-6" name="material-symbols:close" />
      <Icon v-else class="w-6 h-6" name="material-symbols:menu" />
    </HNButton>
    <Transition>
      <div
        v-show="isMenuOpen"
        class="flex flex-col absolute top-[100%] left-0 w-full gap-4 bg-zinc-100 dark:bg-zinc-700 p-4 shadow-md lg:!flex lg:flex-row lg:relative lg:w-fit lg:shadow-none lg:p-0"
      >
        <nav class="flex flex-col lg:flex-row justify-stretch">
          <HNNavLink to="/" @click="toggleMenu">New</HNNavLink>
          <HNNavLink to="/top" @click="toggleMenu">Top</HNNavLink>
          <HNNavLink to="/best" @click="toggleMenu">Best</HNNavLink>
          <HNNavLink to="/ask" @click="toggleMenu">Ask</HNNavLink>
          <HNNavLink to="/show" @click="toggleMenu">Show</HNNavLink>
          <HNNavLink to="/jobs" @click="toggleMenu">Jobs</HNNavLink>
        </nav>
        <HNColorModeToggle />
      </div>
    </Transition>
  </header>
</template>

<style scoped>
nav {
  @apply flex items-center -my-2;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.4s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translate(0, -10px);
}
</style>
