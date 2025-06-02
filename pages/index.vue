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

        <!-- Lançamentos -->
        <card-nossos-produtos 
            :produtos="lancamentos" 
            titulo="Conheça nossos Produtos" 
            class-section="bg-gray-100 py-12" 
            class-card="bg-white rounded shadow-md hover:shadow-2xl hover:scale-105 transition-all p-4 overflow-hidden cursor-pointer"
            class-titulo="font-semibold text-xl text-gray-700 my-auto"
            class-button="bg-rose-700 text-white px-4 py-1 text-xl rounded hover:bg-rose-900 mt-auto cursor-pointer"
            class-grid="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            button-text="Saiba mais"
            />

        <!-- Qualidade -->
        <card-texto-imagem :dados="dados" />

        <!-- CTA Cliente e Revendedor -->
        <card-cta :dados="cta" />

        <!-- Destaques -->
        <card-destaques class-section="bg-white py-16" />

        <!-- Chamada para ação -->
        <card-chamada-acao :dados="chamadaAcao" />
    </div>
</template>

<script setup lang="ts">
import imgLapTop from '~/assets/laptop_12.jpg';
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

const dados = {
    titulo: 'Qualidade é o nosso alicerce!',
    imagem: imgLapTop,
    descricao: 'A GlobalPlastic realiza testes frequentes que atestam a excelência de nossos produtos: análise dimensional, densidade, comportamento ao calor, pressão hidrostática interna, resistência ao impacto, junta soldável, esmagamento e outros.',
    link: {
        to: '#',
        text: 'Conheça todos os testes de qualidade'
    }
}

const cta = [
    {
        titulo: "Portal do cliente",
        descricao: "Clique aqui e confira todas as facilidades",
        link: {
            text: "Acessar Portal",
            url: "/portal-cliente"
        },
        classCard: "bg-white text-rose-800 scale-100 hover:scale-105 transition-transform duration-300",
        classButton: "bg-rose-700 text-white hover:bg-rose-900 cursor-pointer"
    },
    {
        titulo: "Quero revender",
        descricao: "Clique aqui e saiba como revender nossos produtos",
        link: {
            text: "Quero revender",
            url: "/revenda"
        },
        classCard: "bg-orange-200 text-rose-800 scale-100 hover:scale-105 transition-transform duration-300",
        classButton: "bg-rose-700 text-white hover:bg-rose-900 cursor-pointer"
    },    
]

const chamadaAcao = 
    {
        titulo: 'Conheça nossos produtos',
        descricao: 'Explore nossa ampla gama de soluções em plásticos, projetadas para atender às suas necessidades com qualidade e inovação.',
        link: {
            text: 'Ver Catálogo',
            url: '#'
        },
        classSection: 'bg-rose-800 text-white text-center py-20',
        classCard: 'max-w-4xl mx-auto px-4',
        classTitulo: 'text-2xl md:text-3xl font-bold mb-4',
        classDescricao: 'text-lg mb-6',
        classButton: 'bg-white text-rose-800 px-6 py-2 rounded hover:bg-gray-300 font-semibold text-lg transition-colors duration-300 cursor-pointer'
    }
;
</script>