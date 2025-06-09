<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
    <AdminSidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- Content -->
      <small class="p-3 pb-0 text-gray-400 text-[0.6rem]">Modest CMS 1.0.0.0</small>
      <main class="flex-1 overflow-y-auto p-3">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
</script>
