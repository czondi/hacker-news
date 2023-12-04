<template>
  <header
    class="flex items-center justify-between px-8 py-2 bg-zinc-100 dark:bg-zinc-700 shadow-md"
  >
    <NuxtLink to="/"><HNLogo /></NuxtLink>
    <nav class="flex items-center -my-2">
      <HNNavLink to="/">New</HNNavLink>
      <HNNavLink to="/top">Top</HNNavLink>
      <HNNavLink to="/best">Best</HNNavLink>
      <HNNavLink to="/ask">Ask</HNNavLink>
      <HNNavLink to="/show">Show</HNNavLink>
      <HNNavLink to="/jobs">Jobs</HNNavLink>
    </nav>
    <HNColorModeToggle />
  </header>
</template>
