<template>   
    <!-- layout padrão do site -->
    
    <!-- cabeçalho com os telefones da empresa -->
    <header-telefone />

    <!-- cabeçalho do site -->
    <header>        
        <!-- menu de topo and sidebar menu quando for mobile -->
        <header-site />
    </header>

    <!-- conteúdo do site -->
    <main>
        <nuxtPage />
    </main>

    <!-- rodapé padrão do site -->
    <footer>
        <footer-site />
    </footer>
</template>

<script lang="ts" setup>
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
</script>
