<template>
  <aside class="w-16 bg-white dark:bg-gray-800 shadow-md flex flex-col items-center py-4 space-y-6">
    <NuxtLink to="/admin" class="hover:text-blue-500" title="Dashboard">
      <i class="bx bxs-dashboard text-2xl"></i>
    </NuxtLink>
    <NuxtLink to="/admin/pages" class="hover:text-blue-500" title="Páginas">
      <i class="bx bxs-file text-2xl"></i>
    </NuxtLink>
    <NuxtLink to="/admin/config" class="hover:text-blue-500" title="Configurações">
      <i class="bx bxs-cog text-2xl"></i>
    </NuxtLink>
  </aside>
</template>

<script setup>
</script>
