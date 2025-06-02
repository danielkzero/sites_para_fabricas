<template>
    <div class="bg-[url('/assets/fundo-generico-site.png')] bg-cover bg-center py-6">
        <div class="max-w-7xl mx-auto px-4 text-2xl md:text-3xl font-bold mb-2 text-rose-800 capitalize">
            {{ categoria }}
        </div>
    </div>
    <div class="bg-gray-100">
        <div class="flex w-7xl mx-auto py-10">
            <!-- Sidebar -->
            <aside class="w-64 bg-white hidden lg:block rounded-xl shadow-md me-6">
                <ul>
                    <li v-for="(cat, i) in categorias" :key="i"
                        :class="i === categorias.length - 1 ? 'border-b-0' : 'border-b'"
                        class="text-lg font-semibold text-gray-700 hover:text-rose-600 cursor-pointer border-gray-100"
                        @click="openCategoria(cat)">
                        <div class="p-3">
                            <i :class="cat.icon"></i> {{ cat.name }}
                            <i class="bx bx-chevron-right float-right text-2xl"
                                :class="cat.open ? 'rotate-90' : ''"></i>
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
            <div class="w-6xl">
                <!-- Busca -->
                <div class="justify-between items-center mb-6 flex">
                    <h2 class="text-2xl font-bold text-gray-600">Nossos produtos</h2>
                </div>
                <div class="justify-between items-center flex mb-6 gap-6">
                    <div class="flex relative w-full">
                        <input type="text" placeholder="Buscar produtos..."
                            class="w-full bg-white p-3 border border-gray-300 rounded-lg focus:text-rose-800 focus:outline-none focus:ring-2 text-gray-600 focus:ring-rose-800" />
                        <button class="absolute right-4 top-4 text-gray-500 hover:text-rose-800 cursor-pointer transition-all">
                            <i class="bx bx-search text-xl"></i>
                        </button>
                    </div>
                    <div class="flex">
                        <button
                            @click="toggleFormatGrid('grid')"
                            class="text-gray-600 ring ring-gray-100 hover:ring-rose-800 hover:text-rose-800 font-semibold text-3xl my-auto w-12 h-12 rounded-s-lg transition-all cursor-pointer">
                            <i class='bx bxs-grid-alt'></i>
                        </button>
                        <button
                            @click="toggleFormatGrid('list')"
                            class="text-gray-600 ring ring-gray-100 hover:ring-rose-800 hover:text-rose-800 font-semibold text-3xl my-auto w-12 h-12 rounded-e-lg transition-all cursor-pointer">
                            <i class="w-8 h-8 p-4 bxs-listing-alt">
                            </i>
                        </button>

                    </div>
                </div>

                <!-- Produtos em destaque -->
                <card-nossos-produtos :produtos="lancamentos"
                    :class-card="classCard"
                    :class-imagem="classImagem"
                    :class-titulo="classTitulo"
                    :class-button="classButton"
                    :class-grid="classGrid"
                    button-text="Ver mais" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const categoria = route.params.categoria as string

const classButton = ref('w-full p-2 text-center bg-rose-100 text-rose-800 ring ring-rose-800 px-4 py-1 text-xl rounded hover:bg-rose-900 hover:text-white mt-auto cursor-pointer');
const classTitulo = ref('text-center mb-3 font-semibold text-xl text-gray-700 my-auto');
const classImagem = ref('w-full h-48 object-cover rounded-t-lg mb-4');
const classGrid = ref('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6');
const classCard = ref('bg-white rounded-xl shadow-md transition-all p-4 overflow-hidden cursor-pointer');

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

const lancamentos = [
    { nome: 'Caixa de Gordura', linha: 'Linha Predial', img: '/produtos/caixa de gordura.jpg' },
    { nome: 'Caixa Sifonada', linha: 'Infraestrutura', img: '/produtos/Caixa Sifonada 150.jpg' },
    { nome: 'Assento Sanitário', linha: 'Acessórios', img: '/produtos/Assento Sanitario Branco.jpg' },
    { nome: 'Caixa de Luz', linha: 'Elétrica', img: '/produtos/Caixa de Luz 4x2 AMA.jpg' },
    { nome: 'Óculos Evolution', linha: 'Predial', img: '/produtos/Oculos Evolution Incolor.jpg' },
];

function toggleFormatGrid(format: 'grid' | 'list') {
    // Lógica para alternar entre grid e lista
    // Pode ser implementada conforme a necessidade
    if (format === 'list') {
        classGrid.value = 'grid grid-cols-1 gap-4 w-full';
        classImagem.value = 'w-24 h-24 object-cover rounded-lg';
        classCard.value = 'flex gap-6 bg-white rounded-xl shadow-md transition-all p-4 overflow-hidden cursor-pointer';
        classButton.value = 'ms-auto my-auto p-2 text-center flex flex-col justify-between bg-rose-100 text-rose-800 ring ring-rose-800 px-4 py-1 text-xl rounded hover:bg-rose-900 hover:text-white mt-auto cursor-pointer';
        classTitulo.value = 'font-semibold text-xl text-gray-700 my-auto';

    } else {
        classGrid.value = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6';
        classImagem.value = 'w-full h-48 object-cover rounded-t-lg mb-4 mx-auto';
        classCard.value = 'bg-white rounded-xl shadow-md transition-all p-4 overflow-hidden cursor-pointer';
        classButton.value = 'w-full p-2 text-center bg-rose-100 text-rose-800 ring ring-rose-800 px-4 py-1 text-xl rounded hover:bg-rose-900 hover:text-white mt-auto cursor-pointer';
        classTitulo.value = 'text-center mb-3 font-semibold text-xl text-gray-700 my-auto';
    }
}
</script>