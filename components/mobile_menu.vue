<template>
    <div>
        <!-- Ícone do menu mobile -->
        <button @click="menuAberto = true" class="md:hidden me-5">
            <i class="bx bx-menu text-3xl text-gray-800"></i>
        </button>

        <!-- Overlay e menu lateral -->
        <transition name="fade">
            <div v-if="menuAberto" class="fixed inset-0 bg-black/50 z-40" @click.self="fecharMenu"></div>
        </transition>

        <transition name="slide">
            <aside v-if="menuAberto"
                class="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-xl z-50 flex flex-col">
                <div class="flex items-center justify-between p-4 border-b border-gray-200">
                    <img src="/logo_global.svg" alt="Logo" class="h-8" />
                    <img src="/globalplastic.svg" alt="Logo" class="h-4 ms-2" />
                    <button @click="fecharMenu" class="text-2xl text-gray-700 ms-auto">
                        <i class="bx bx-x"></i>
                    </button>
                </div>

                <nav class="flex-1 overflow-y-auto p-4 space-y-4">
                    <div v-for="item in menu" :key="item.name">
                        <button class="w-full text-left text-gray-800 font-semibold flex justify-between items-center"
                            @click="toggleSubmenu(item)">
                            {{ item.name }}
                            <i class="bx" :class="item.open ? 'bx-chevron-up' : 'bx-chevron-down'"></i>
                        </button>
                        <div v-if="item.open" class="pl-4 py-2 space-y-2">
                            <div v-for="(subitem, idx) in item.items" :key="idx">
                                <p class="text-orange-700 font-medium">{{ subitem.name }}</p>
                                <ul class="pl-2">
                                    <li v-for="(submenu, i) in subitem.items" :key="i"
                                        class="text-gray-700 hover:underline hover:text-rose-600">
                                        <NuxtLink :to="`/categorias/${submenu.tag}`" @click="fecharMenu">{{ submenu.name
                                            }}</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { menu as menuData } from '~/data/menu';

const menuAberto = ref(false);
const menu = reactive(menuData.map(item => ({ ...item, open: false })));

function toggleSubmenu(item: any) {
    item.open = !item.open;
}

function fecharMenu() {
    menuAberto.value = false;
    menu.forEach(item => (item.open = false));
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from {
    transform: translateX(-100%);
}

.slide-leave-to {
    transform: translateX(-100%);
}
</style>
