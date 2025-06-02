<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.bxs-listing-alt {
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M3 3h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 11h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z'/%3E%3C/svg%3E") no-repeat center;
  -webkit-mask-size: contain;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M3 3h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 11h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z'/%3E%3C/svg%3E") no-repeat center;
  mask-size: contain;
}

.text-gray-600 .bxs-listing-alt {
  background-color: var(--color-gray-600) !important;
  /* Tailwind gray-600 */
}
.text-gray-600:hover .bxs-listing-alt {
  background-color: var(--color-rose-800) !important;
  /* Tailwind rose-600 */
}
</style>
