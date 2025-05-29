<template>
    <div class="flex items-center justify-center bg-gray-200 text-gray-700 font-semibold p-3 align-middle text-xs">
        <!-- numero de atentimento da loja e icones de redes sociais -->
        Atendimento: <a href="tel:2433281000" class="px-1" target="_blank" rel="noopener noreferrer">24 3328-1000</a> /
        <a href="tel:24981520333" class="ps-1" target="_blank" rel="noopener noreferrer">98152-0333</a>
        <div class="flex space-x-4 ml-4">
            <a href="https://www.facebook.com">
                <i class="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <i class="bx bxl-twitter"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <i class="bx bxl-linkedin"></i>
            </a>
        </div>
    </div>
    <!-- menu de topo and sidebar menu quando for mobile -->
    <div>
        <header class="w-full">
            <div class="relative bg-white shadow">
                <template v-for="item in menu" :key="item.name">
                    <template v-if="item.items">
                        <div v-if="item.open" class="absolute top-full w-full bg-gray-100 shadow-lg z-50">
                            <div class="max-w-7xl mx-auto">
                                <div class="grid grid-cols-5 gap-6 p-6 text-sm">
                                    <div class="col-span-1" v-if="item.apresentacaohtml">
                                        <!-- Sidebar -->
                                        <div class="col-span-1 rounded p-4 shadow-sm bg-white">
                                            <div v-html="item.apresentacaohtml"></div>
                                        </div>
                                    </div>
                                    <div :class="item.apresentacaohtml ? 'col-span-4' : 'col-span-5'">
                                        <div class="grid grid-cols-4 gap-6 text-sm">
                                            <!-- Coluna 1 -->
                                            <div class="col-span-1" v-for="(subitem, index) in item.items" :key="index">
                                                <h4 class=" font-semibold flex items-center gap-1 mb-2"
                                                    :class="subitem.class ?? 'text-orange-700'">
                                                    <i :class="subitem.icon"></i> {{ subitem.name }}
                                                </h4>
                                                <ul class="space-y-1 text-gray-700 pb-2">
                                                    <li v-for="(submenu, subindex) in subitem.items" :key="subindex"
                                                        class="py-1 text-gray-700 hover:text-rose-800 cursor-pointer transition-colors hover:underline ">
                                                        {{ submenu }}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </template>

                <!-- Top bar -->
                <div class="max-w-7xl mx-auto flex items-center justify-between text-sm">
                    <div class="flex items-center py-4 px-4 md:px-0 md:py-0">
                        <div class="flex items-center animate__animated animate__rubberBand">
                            <img src="/logo_global.svg" alt="Logo" class="h-8 pe-2" />
                            <img src="/globalplastic.svg" alt="Logo" class="h-3 pe-2" />
                        </div>

                        <div v-for="item in menu" :key="item.name" class="hidden md:block">
                            <div class="relative group menu-principal-topo">
                                <button @click="toggleMenu(item)"
                                    class="flex items-center space-x-2 p-4 text-gray-700 hover:text-red-600 cursor-pointer"
                                    :class="{ 'bg-gray-100': item.open }">
                                    <span>{{ item.name }}</span>
                                    <i class="bx bx-chevron-right" :class="{ 'bx-rotate-90': item.open }"
                                        v-if="item.items"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Busca -->
                    <div class="flex items-center space-x-4">
                        <input type="text" placeholder="Buscar"
                            class="border rounded px-3 py-1 text-sm focus:outline-none border-gray-300 hidden md:inline-block" />
                    </div>
                </div>
            </div>
        </header>
        <main>
            <nuxtPage />
        </main>
        <div class="m-10 md:hidden items-center">
            <img src="/globinho.svg" alt="Logo" class="h-20 mb-2 flipH mx-auto" />
            <div>
                <p class="text-center">© 2025 <img src="/globalplastic.svg" alt="Logo" class="h-3 inline mb-1" />.
                    <br />
                    Todos os direitos reservados.</p>
                <a href="https://hydradigital.com.br"
                    class="flex items-center space-x-2 hover:text-rose-900 transition-colors mx-auto mt-6"
                    target="_blank">
                    <div class="flex items-center space-x-2 mx-auto">
                        <img src="/logo-hydra.png" alt="Hydra Digital" class="h-8" />
                        <span class="text-[0.6rem]">
                            Desenvolvido por <strong>Hydra Digital</strong><br />
                            <span>Daniel Ramos</span>
                        </span>
                    </div>
                </a>
            </div>
        </div>
        <div class="max-w-7xl mx-auto my-10 hidden md:block">
            <div class="flex justify-between gap-10">
                <aside>
                    <img src="/globinho.svg" alt="Logo" class="h-20 mb-2 flipH" />
                    <div>
                        <p>© 2025 <img src="/globalplastic.svg" alt="Logo" class="h-3 inline mb-1" />. <br />
                            Todos os direitos reservados.</p>
                        <a href="https://hydradigital.com.br"
                            class="flex items-center space-x-2 hover:text-rose-900 transition-colors  mt-6"
                            target="_blank">
                            <img src="/logo-hydra.png" alt="Hydra Digital" class="h-8" />
                            <span class="text-[0.6rem]">
                                Desenvolvido por <strong>Hydra Digital</strong><br />
                                <span>Daniel Ramos</span>
                            </span>
                        </a>
                    </div>
                </aside>
                <template v-for="item in menu" :key="item.name">
                    <template v-if="item.name === 'Produtos'">
                        <nav v-for="(subitem, index) in item.items" :key="index" class="space-y-1">
                            <a href="#"
                                class="inline-block mb-2 text-xl font-semibold text-rose-900 hover:text-rose-800 transition-colors">
                                {{ subitem.name }}
                            </a>
                            <ul class="space-y-1 text-gray-700">
                                <li v-for="(submenu, subindex) in subitem.items.slice(0, 4)" :key="subindex"
                                    class="py-1 text-gray-700 hover:text-rose-800 cursor-pointer transition-colors hover:underline">
                                    {{ submenu }}
                                </li>
                            </ul>
                        </nav>
                        <form>
                            <h6
                                class="footer-title inline-block mb-2 text-xl font-semibold text-rose-900 hover:text-rose-800 transition-colors">
                                Informativos</h6>
                            <fieldset class="w-80">
                                <label class="inline-block my-2 text-gray-700">Cadastre seu e-mail</label>
                                <div
                                    class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset- has-[input:focus-within]:outline-rose-500">
                                    <input type="text" placeholder="username@site.com"
                                        class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                    <button class="btn btn-primary join-item pe-3">Inscreve-se</button>
                                </div>
                            </fieldset>
                        </form>
                    </template>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import 'animate.css';
import { ref, onMounted, onBeforeUnmount } from 'vue';
const open = ref(false);
useHead({
    title: 'GlobalPlastic',
    meta: [
        {
            name: 'description',
            content: 'Bem-vindo à minha loja online, onde você encontra os melhores produtos com qualidade e preço justo.'
        },
        {
            name: 'keywords',
            content: 'loja online, produtos, qualidade, preço justo, compras'
        },
        {
            name: 'author',
            content: 'Daniel S. Ramos'
        }
    ],
    link: [
        { rel: 'icon', type: 'image/png', href: '/logo_global.svg' }
    ]
});
let menu = ref([
    {
        name: 'Produtos',
        icon: 'bx bx-box',
        items: [
            {
                name: 'Construção civil',
                icon: 'bx bx-building',
                class: 'text-orange-700',
                items: [
                    'Torneiras',
                    'Válvulas e Boias',
                    'Sifões e Tubos',
                    'Ralos e Caixas',
                    'Banheiro e Lavanderia',
                    'Duchas',
                    'Mangueiras',
                    'Tubo e Conexões',
                    'Fixadores',
                    'Organização e Pintura'
                ]
            },
            {
                name: 'Elétricos',
                icon: 'bx bx-cart',
                class: 'text-blue-700',
                items: [
                    'Quadros de disjuntores',
                    'Resistências',
                    'Plafoniers e Spots',
                    'Isoladores e Ponteiras',
                    'Grade de ventilação',
                    'Caixas de luz e passagem',
                    'Corrugado'
                ]
            },
            {
                name: 'Equipamentos de proteção',
                icon: 'bx bx-shield',
                class: 'text-green-700',
                items: [
                    'Óculos de proteção',
                    'Máscara de solda',
                    'Protetor facial',
                    'Protetor auricular'
                ]
            }
        ],
        open: false,
        apresentacaohtml: `
            <p class="text-gray-600 text-1xl mb-4">
                Organização e resistência no seu banheiro.
            </p>
            <img src="/armario.jpg" alt="Armário" class="mb-4">
            <button
                class="border border-red-600 text-red-600 px-3 py-1 text-xs rounded hover:bg-rose-50 w-full active:bg-rose-500 active:text-white transition-colors cursor-pointer">
                VER MAIS
            </button>
        `
    },
    {
        name: 'Seja um Revendedor',
        icon: 'bx bx-store',
        open: false
    },
    {
        name: 'Downloads',
        icon: 'bx bx-download',
        open: false
    },
    {
        name: 'Contato',
        icon: 'bx bx-envelope',
        open: false
    }
]);

function toggleMenu(vmenu: any) {
    let isOpen = vmenu.open;
    closeMenu(); // Fecha outros menus
    vmenu.open = !isOpen; // Alterna o estado do menu clicado
}

function closeMenu() {
    menu.value.forEach((item: any) => {
        item.open = false;
    });
}

function handleClickOutside(event: MouseEvent) {
    const header = document.querySelector('header');
    if (header && !header.contains(event.target as Node)) {
        console.log('Click outside header');
        closeMenu();
    }
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

</script>
<style scoped>
.flipH {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
}
</style>