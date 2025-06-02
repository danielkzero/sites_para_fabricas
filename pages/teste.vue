<template>
  <div v-html="content[0].content" class="w-full max-w-7xl mx-auto px-4 py-8">
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app';
import axios from 'axios';

const { data: content } = await useAsyncData('pagina', async () => {
  const { data } = await axios.get('http://localhost:8083/api/v1/paginas_publicas');
  return data;
});

// useHead depois do await para garantir que o conteúdo já foi carregado
useHead({
  title: content.value?.meta_title || 'Página de Teste',
  htmlAttrs: { lang: 'pt-BR' },
  meta: [
    { name: 'description', content: content.value?.meta_description || 'Descrição padrão da página de teste.' },
    { name: 'keywords', content: content.value?.meta_keywords || 'teste, página, SEO' },
    { property: 'og:title', content: content.value?.og_title || 'Título para OpenGraph' },
    { property: 'og:description', content: content.value?.og_description || 'Descrição para redes sociais' },
    { property: 'og:image', content: content.value?.og_image || 'https://www.exemplo.com/imagens/og-image.jpg' },
    { property: 'og:url', content: 'https://globalplastic.com.br/' }, // ou dinâmico se for por slug
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: content.value?.twitter_title || 'Título para Twitter' },
    { name: 'twitter:description', content: content.value?.twitter_description || 'Descrição para Twitter' },
    { name: 'twitter:image', content: content.value?.twitter_image || 'https://www.exemplo.com/imagens/twitter-image.jpg' },
    { name: 'twitter:card', content: content.value?.twitter_card || 'summary_large_image' },
    { name: 'theme-color', content: '#004080' }
  ],
  link: [
    { rel: 'canonical', href: 'https://globalplastic.com.br/' },
    { rel: 'icon', type: 'image/png', href: '/logo_global.svg' }
  ]
});
</script>

<style></style>