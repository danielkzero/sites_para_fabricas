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

