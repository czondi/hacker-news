<template>
  <div role="alert">
    <div class="bg-red-500 text-white px-4 py-3 rounded-md">
      <div class="flex">
        <Icon class="w-8 h-8" name="material-symbols:error-outline" />
        <div class="ml-4 flex-grow">
          <p class="font-bold text-lg">Error</p>
          <p class="text-sm">
            <slot />
          </p>
          <div class="flex justify-end">
            <HNButton class="mt-4" @click="reloadNuxtApp">Reload</HNButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
