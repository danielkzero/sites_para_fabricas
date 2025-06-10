<template>
  <div class="grid grid-cols-10 gap-4">
    <div class="col-span-2">
      <!-- páginas -->
       <admin-lista-paginas />
    </div>
    <div class="col-span-8">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })

const pages = reactive(
  [
    {
      id: 1,
      name: 'pagina_principal',
      display_name: 'Página Principal',
      route: '/',
      date: '10/06/2025'
    },
    {
      id: 2,
      name: 'seja_um_revendedor',
      display_name: 'Seja um Revendedor',
      route: '/seja_um_revendedor',
      date: '10/06/2025'
    },
    {
      id: 3,
      name: 'downloads',
      display_name: 'Downloads',
      route: '/downloads',
      date: '10/06/2025'
    },
    {
      id: 4,
      name: 'contato',
      display_name: 'Contato',
      route: '/contato',
      date: '10/06/2025'
    },
  ]
)

</script>
