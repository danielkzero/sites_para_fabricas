<template>
    <!-- menu lateral com outras página a mostra -->
    <form class="max-w-md mx-auto mb-3">
        <label for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input type="search" id="default-search"
                class="p-2 block w-full ps-10 text-lg text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Componentes, páginas..." required />
        </div>
    </form>
    <section class="lista-paginas">
        <div class="grid gap-3" v-auto-animate>
            <div class="p-3 rounded-xl grid gap-3 bg-gray-100 hover:bg-white hover:scale-100 scale-95 transition-all" v-for="(item, index) in pages" :key="index"
                :class="[isActive(item.route) ? 'bg-white scale-100 shadow' : 'shadow bg-gray-100 hover:bg-white hover:scale-100 scale-95 transition-all']">

                <div class="flex">
                    <span class="material-symbols-outlined">
                        contextual_token
                    </span>
                    <span class="px-2">
                        {{ item.display_name }}
                    </span>
                    <span class="material-symbols-outlined ms-auto">
                        more_horiz
                    </span>
                </div>

                <div class="font-semibold flex items-center">
                    <span class="material-symbols-outlined me-2">
                        alt_route
                    </span> {{ item.route }}
                </div>

                <div class="flex">
                    <span class="material-symbols-outlined">
                        calendar_month
                    </span>
                    <span class="px-2">
                        {{ item.date }}
                    </span>
                    <NuxtLink :to="'/admin/pages' + item.route" class="ms-auto p-2 shadow flex items-center rounded-xl hover:bg-gray-100">
                        <span class="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const pages = reactive(
    [
        {
            id: 1,
            name: 'pagina_principal',
            display_name: 'Página Principal',
            route: '/index',
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

const isActive = (to) => {
    return route.path === to || route.path.endsWith(to)
}
</script>