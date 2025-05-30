<template>
    <div class="flex w-7xl mx-auto">
        <!-- Sidebar -->
        <aside class="w-64 bg-white hidden lg:block rounded-xl my-4 shadow-md">
            <ul>
                <li v-for="(cat, i) in categorias" :key="i"
                    :class="i === categorias.length - 1 ? 'border-b-0' : 'border-b'"
                    class="text-lg font-semibold text-gray-700 hover:text-rose-600 cursor-pointer border-gray-100"
                    @click="openCategoria(cat)">
                    <div class="p-3">
                        <i :class="cat.icon"></i> {{ cat.name }}
                        <i class="bx bx-chevron-right float-right text-2xl" :class="cat.open ? 'rotate-90' : ''"></i>
                    </div>
                    <ul v-if="cat.open">
                        <li v-for="(subcat, j) in cat.items" :key="j"
                            :class="j === cat.items?.length - 1 ? 'border-b-0' : 'border-b'"
                            class="pl-4 font-normal text-gray-600 hover:text-rose-500 hover:bg-rose-100 cursor-pointer border-gray-100 py-2"
                            @click.stop="$router.push(`/categorias/${subcat.tag}`)">
                            {{ subcat.name }}
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>

        <!-- Conteúdo -->
        <main class="flex-1 p-4">
            <!-- Busca -->
        </main>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const categoria = route.params.categoria as string

import { menu } from '~/data/menu';
const categorias = reactive(menu[0].items);


function openCategoria(cat) {
    const opened = !cat.open;
    closeCategorias(cat);
    cat.open = opened;
}

function closeCategorias(cat) {
    // Fecha outras categorias
    categorias.forEach(item => {
        if (item !== cat) item.open = false;
    });
}
</script>
