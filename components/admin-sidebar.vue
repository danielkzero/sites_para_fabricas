<template>
  <aside class="p-2 bg-gray-50 dark:bg-gray-800 shadow-md flex flex-col items-center py-4 space-y-1">
    <NuxtLink v-for="(item, index) in menuItems" :key="index" :to="item.to" :title="item.title"
      :class="[item.class, isActive(item.to) ? 'text-gray-800 bg-gray-200 inset-shadow-2xs border border-white' : 'text-gray-500']"
      class="hover:text-gray-800 p-3 rounded-xl text-shadow-2xs">
      <i :class="item.icon + ' text-2xl'"></i>
    </NuxtLink>
  </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = [
  { to: '/admin/dashboard', icon: 'bx bxs-dashboard', title: 'Dashboard' },
  { to: '/admin/pages', icon: 'bx bxs-file', title: 'Páginas' },
  { to: '/admin/config', icon: 'bx bxs-user', title: 'Conta', class: 'mt-auto' },
  { to: '/admin/config', icon: 'bx bxs-cog', title: 'Configurações' }
]

const isActive = (to) => {
  return route.path === to || route.path.startsWith(to)
}
</script>