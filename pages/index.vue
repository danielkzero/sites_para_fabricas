<template>
    <!-- Banner -->
    <div>
        <!-- Banner Rotativo / Hero Section -->
        <div class="relative w-full overflow-hidden">
            <img src="~/assets/laptop_12.jpg" alt="Banner GlobalPlastic"
                class="w-full object-cover h-[400px] md:h-[500px]">
        </div>
    </div>
    
    <div>
        <!-- Hero Section -->
        <section class="bg-gradient-to-b from-rose-800 to-rose-700 text-white py-16 text-center">
            <div class="max-w-5xl mx-auto px-4">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Bem-vindo à GlobalPlastic</h1>
                <p class="text-lg md:text-xl">
                    Inovação, qualidade e soluções em artefatos plásticos para o seu dia a dia.
                </p>
            </div>
        </section>
    </div>

    <div>
        <!-- Lançamentos -->
        <section class="bg-gray-100 py-12">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-2xl font-bold text-center mb-8">Conheça nossos Produtos</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <div v-for="item in lancamentos" :key="item.nome"
                        class="bg-white rounded shadow-md overflow-hidden">
                        <img :src="item.img" :alt="item.nome" class="w-full h-40 object-cover">
                        <div class="p-4 text-center">
                            <h3 class="font-semibold text-sm text-gray-700">{{ item.nome }}</h3>
                            <p class="text-xs text-rose-700">{{ item.linha }}</p>
                            <button
                                class="mt-2 bg-rose-700 text-white px-4 py-1 text-sm rounded hover:bg-rose-900">Saiba
                                mais</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Qualidade -->
        <section class="py-16 bg-white">
            <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
                <div class="md:w-1/2 mb-8 md:mb-0">
                    <h2 class="text-3xl font-bold text-rose-800 mb-4">Qualidade é o nosso alicerce!</h2>
                    <p class="text-gray-700 text-sm leading-relaxed">
                        A GlobalPlastic realiza testes frequentes que atestam a excelência de nossos produtos:
                        análise dimensional, densidade, comportamento ao calor, pressão hidrostática interna,
                        resistência ao impacto, junta soldável, esmagamento e outros.
                    </p>
                    <button class="mt-4 bg-rose-700 text-white px-6 py-2 text-sm rounded hover:bg-rose-900">
                        Conheça todos os testes de qualidade
                    </button>
                </div>
                <div class="md:w-1/2 text-center">
                    <img src="~/assets/laptop_12.jpg" alt="Qualidade GlobalPlastic" class="mx-auto max-h-[300px]">
                </div>
            </div>
        </section>

        <!-- CTA Cliente e Revendedor -->
        <section class="bg-rose-800 py-10 text-white">
            <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white text-rose-800 p-6 rounded shadow-md text-center">
                    <h3 class="font-bold text-lg mb-2">PORTAL DO CLIENTE</h3>
                    <p class="text-sm">Clique aqui e confira todas as facilidades</p>
                    <button class="mt-4 bg-rose-800 text-white px-5 py-2 rounded hover:bg-rose-900">Acessar
                        Portal</button>
                </div>
                <div class="bg-yellow-500 text-rose-900 p-6 rounded shadow-md text-center">
                    <h3 class="font-bold text-lg mb-2">Quer revender produtos GlobalPlastic?</h3>
                    <p class="text-sm">Clique aqui</p>
                    <button class="mt-4 bg-rose-800 text-white px-5 py-2 rounded hover:bg-rose-900">Quero
                        revender</button>
                </div>
            </div>
        </section>

        <!-- Destaques -->
        <section class="py-16">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-2xl font-bold text-center mb-12">Por que escolher a GlobalPlastic?</h2>
                <div class="grid md:grid-cols-3 gap-10">
                    <div class="text-center">
                        <i class="bx bx-bulb text-rose-800 text-5xl mb-4"></i>
                        <h4 class="font-semibold text-lg">Inovação Constante</h4>
                        <p class="text-sm text-gray-600">Estamos sempre criando novas soluções para facilitar sua vida.
                        </p>
                    </div>
                    <div class="text-center">
                        <i class="bx bx-shield-quarter text-rose-800 text-5xl mb-4"></i>
                        <h4 class="font-semibold text-lg">Qualidade Garantida</h4>
                        <p class="text-sm text-gray-600">Produtos duráveis, práticos e com alto padrão de produção.</p>
                    </div>
                    <div class="text-center">
                        <i class="bx bx-heart text-rose-800 text-5xl mb-4"></i>
                        <h4 class="font-semibold text-lg">Compromisso com Você</h4>
                        <p class="text-sm text-gray-600">Atendimento focado em garantir sua satisfação total.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Chamada para ação -->
        <section class="bg-rose-800 text-white text-center py-20">
            <div class="max-w-4xl mx-auto px-4">
                <h2 class="text-2xl md:text-3xl font-bold mb-4">Conheça todos os nossos produtos!</h2>
                <NuxtLink to="/produtos">
                    <button class="bg-white text-rose-800 px-6 py-2 rounded hover:bg-gray-100 font-semibold">
                        Ver Catálogo
                    </button>
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup>
const linhas = [
    { nome: 'Linha Predial', icone: '/icones/predial.svg' },
    { nome: 'Linha Infraestrutura', icone: '/icones/infraestrutura.svg' },
    { nome: 'Linha Acessórios', icone: '/icones/acessorios.svg' },
    { nome: 'Linha Torneiras', icone: '/icones/torneiras.svg' },
    { nome: 'Linha Elétrica', icone: '/icones/eletrica.svg' },
    { nome: 'Linha Forros/Portas', icone: '/icones/forros.svg' },
];

const lancamentos = [
    { nome: 'Caixa de Gordura', linha: 'Linha Predial', img: '/produtos/caixa de gordura.jpg' },
    { nome: 'Caixa Sifonada', linha: 'Infraestrutura', img: '/produtos/Caixa Sifonada 150.jpg' },
    { nome: 'Assento Sanitário', linha: 'Acessórios', img: '/produtos/Assento Sanitario Branco.jpg' },
    { nome: 'Caixa de Luz', linha: 'Elétrica', img: '/produtos/Caixa de Luz 4x2 AMA.jpg' },
    { nome: 'Óculos Evolution', linha: 'Predial', img: '/produtos/Oculos Evolution Incolor.jpg' },
];
</script>