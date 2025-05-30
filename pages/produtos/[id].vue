<template>
    <div class="bg-white">
        <div class="bg-[url('/assets/fundo-generico-site.png')] bg-cover bg-center py-6">
            <div class="max-w-7xl mx-auto px-4 text-2xl md:text-3xl font-bold mb-2 text-rose-800">
                {{ produto.categoria }}
            </div>
        </div>
        <!-- Cabeçalho do Produto -->
        <section class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6 items-start">
            <!-- Imagem principal -->
            <div class="flex flex-col items-center">
                <img :src="produto.imagemPrincipal" alt="Imagem Produto" class="w-auto h-100 object-contain" />
                <!-- Miniaturas -->
                <div class="flex gap-2 mt-4">
                    <div v-for="(img, i) in produto.miniaturas" :key="i" class="p-2 border-rose-50 hover:border-rose-700 transition-colors border rounded cursor-pointer" @click="changeImagemPrincipal(img)">
                        <img :src="img" class="w-12 h-12" />
                    </div>

                </div>
            </div>

            <!-- Informações do Produto -->
            <div>
                <p class="text-orange-600 text-2xl font-semibold uppercase tracking-wide">{{ produto.categoria }}</p>
                <h1 class="text-2xl font-bold text-gray-800 mb-2">{{ produto.nome }}</h1>
                <p class="text-sm text-gray-600 mb-4">{{ produto.descricao }}</p>
            </div>
        </section>

        <!-- Detalhes Técnicos -->
        <section class="bg-gray-50 py-8">
            <div class="max-w-7xl mx-auto px-4">
                <h2 class="text-center text-gray-800 font-semibold text-lg mb-6">Conheça os detalhes desse produto</h2>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left">
                        <thead>
                            <tr class="bg-white text-gray-700">
                                <th v-for="col in produto.colunasTabela" :key="col" class="px-4 py-2 font-medium">
                                    {{ col }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="linha in produto.linhasTabela" :key="linha.id" class="border-b border-gray-300">
                                <td class="px-4 py-2" v-for="(valor, i) in linha.valores" :key="i">{{ valor }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Itens relacionados -->
        <conheca-nosso-produtos :produtos="produtos" titulo="Quem viu esse, também viu" class-section="bg-gray-100" />

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const route = useRoute()

const produto = reactive({
    id: route.params.id,
    nome: 'União Soldável',
    categoria: 'Construção Civil',
    descricao: 'Conexão de PVC para solda.',
    imagemPrincipal: '/produtos/Assento Sanitario Branco.jpg',
    miniaturas: [
        '/produtos/Assento Sanitario Branco.jpg',
        '/produtos/caixa de gordura.jpg',
        '/produtos/Caixa Sifonada 150.jpg',
    ],
    detalheImagem: '/produtos/Assento Sanitario Branco.jpg',
    colunasTabela: ['Código', 'Embalagem', 'Caixa A', 'Caixa B', 'Grau Ø'],
    linhasTabela: [
        { id: 1, valores: ['300001', '10', '14', '25', '20mm'] },
        { id: 2, valores: ['300002', '10', '18', '30', '25mm'] },
    ],
})

const produtos = [
    { nome: 'Caixa de Gordura', linha: 'Linha Predial', img: '/produtos/caixa de gordura.jpg' },
    { nome: 'Caixa Sifonada', linha: 'Infraestrutura', img: '/produtos/Caixa Sifonada 150.jpg' },
    { nome: 'Assento Sanitário', linha: 'Acessórios', img: '/produtos/Assento Sanitario Branco.jpg' },
    { nome: 'Caixa de Luz', linha: 'Elétrica', img: '/produtos/Caixa de Luz 4x2 AMA.jpg' },
    { nome: 'Óculos Evolution', linha: 'Predial', img: '/produtos/Oculos Evolution Incolor.jpg' },
];

function changeImagemPrincipal(img: string) {
    produto.imagemPrincipal = img
}

</script>
