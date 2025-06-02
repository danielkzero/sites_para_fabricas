<template>
    <!-- menu de topo and sidebar menu quando for mobile -->
    <div class="relative bg-white shadow">
        <!-- Top bar -->
        <div class="max-w-7xl mx-auto flex items-center justify-between text-xl">
            <div class="flex items-center py-4 px-4 md:px-0 md:py-0">
                <NuxtLink to="/" class="flex items-center animate__animated animate__rubberBand" @click="closeMenu">
                    <img src="/logo_global.svg" alt="Logo" class="h-8 pe-2" />
                    <img src="/globalplastic.svg" alt="Logo" class="h-4 pe-2" />
                </NuxtLink>

                <div v-for="item in headerMenu" :key="item.name" class="hidden md:block">
                    <div class="relative group menu-principal-topo">
                        <button @click="toggleMenu(item)"
                            class="flex items-center space-x-2 p-4 text-gray-700 hover:text-red-600 cursor-pointer"
                            :class="{ 'bg-gray-100': item.open }">
                            <span>{{ item.name }}</span>
                            <i class="bx bx-chevron-right" :class="{ 'bx-rotate-90': item.open }" v-if="item.items"></i>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Busca -->
            <div class="flex items-center space-x-4">
                <input type="text" placeholder="Buscar"
                    class="border rounded px-3 py-1 text-xl focus:outline-none border-gray-300 hidden md:inline-block" />
            </div>
        </div>
        <template v-for="item in headerMenu" :key="item.name">
            <div v-if="item.items" class="w-full" v-auto-animate>
                <div v-if="item.open" class="absolute top-full w-full bg-gray-100 shadow-lg inset-shadow-sm z-50">
                    <div class="max-w-7xl mx-auto">
                        <div class="grid grid-cols-5 gap-6 p-6 text-sm">
                            <div class="col-span-1" v-if="item.apresentacaohtml">
                                <!-- Sidebar -->
                                <div class="col-span-1 rounded-xl p-4 shadow-sm bg-white">
                                    <div v-html="item.apresentacaohtml"></div>
                                </div>
                            </div>
                            <div :class="item.apresentacaohtml ? 'col-span-4' : 'col-span-5'">
                                <div class="grid grid-cols-4 gap-6 text-lg">
                                    <!-- Coluna 1 -->
                                    <div class="col-span-1" v-for="(subitem, index) in item.items" :key="index">
                                        <h4 class=" font-semibold flex items-center gap-1 mb-2"
                                            :class="subitem.class ?? 'text-orange-700'">
                                            <NuxtLink to="#" class="flex items">
                                                {{ subitem.name }}
                                            </NuxtLink>
                                        </h4>
                                        <ul class="space-y-1 text-gray-700 pb-2">
                                            <li v-for="(submenu, subindex) in subitem.items" :key="subindex"
                                                class="py-1 text-gray-700 hover:text-rose-800 cursor-pointer transition-colors hover:underline ">
                                                <NuxtLink :to="`/categorias/${submenu.tag}`" @click="closeMenu">
                                                    {{ submenu.name }}
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { menu } from '~/data/menu';
const headerMenu = reactive(menu);

function toggleMenu(vmenu: any) {
    const isOpen = vmenu.open;
    closeMenu(); // Fecha todos
    vmenu.open = !isOpen;
}

function closeMenu() {
    headerMenu.forEach((item: any) => {
        item.open = false;
    });
}

function handleClickOutside(event: MouseEvent) {
    const header = document.querySelector('header');
    if (header && !header.contains(event.target as Node)) {
        closeMenu();
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

</script>