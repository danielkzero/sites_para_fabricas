<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.bxs-listing-alt {
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M3 3h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 11h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z'/%3E%3C/svg%3E") no-repeat center;
  -webkit-mask-size: contain;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26'%3E%3Cpath d='M3 3h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm0 11h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z'/%3E%3C/svg%3E") no-repeat center;
  mask-size: contain;
}

.text-gray-600 .bxs-listing-alt {
  background-color: var(--color-gray-600) !important;
  /* Tailwind gray-600 */
}

.text-gray-600:hover .bxs-listing-alt {
  background-color: var(--color-rose-800) !important;
  /* Tailwind rose-600 */
}
</style>
<script lang="ts" setup>
useHead({
  title: 'GlobalPlastic - Indústria e Comércio de Plásticos',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  meta: [
    // SEO Básico
    {
      name: 'description',
      content:
        'Fábrica especializada em produtos para construção civil: sifões, torneiras, chuveiros, mecanismos de descarga, boilers, boias e equipamentos de proteção individual.'
    },
    {
      name: 'keywords',
      content:
        'GlobalPlastic, materiais de construção, sifão, torneira, ducha, chuveiro, mecanismo de descarga, boiler, boia, EPI, indústria plástica'
    },
    {
      name: 'author',
      content: 'HydraDigital - Daniel S. Ramos'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },

    // Open Graph (Facebook e redes sociais)
    {
      property: 'og:locale',
      content: 'pt_BR'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: 'GlobalPlastic - Indústria e Comércio de Plásticos'
    },
    {
      property: 'og:description',
      content:
        'Fábrica especializada em materiais para construção civil e utilidades: sifões, torneiras, chuveiros, EPIs e muito mais.'
    },
    {
      property: 'og:url',
      content: 'https://globalplastic.com.br/'
    },
    {
      property: 'og:site_name',
      content: 'GlobalPlastic - Indústria e Comércio'
    },
    {
      property: 'og:image',
      content: 'https://globalplastic.com.br/img/share-og.jpg' // substitua pela imagem OG real
    },
    {
      property: 'og:image:alt',
      content: 'Imagem institucional da GlobalPlastic'
    },
    {
      property: 'article:modified_time',
      content: '2025-06-02T12:00:00+00:00' // atualize conforme a publicação
    },

    // Twitter Cards
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'GlobalPlastic - Indústria e Comércio de Plásticos'
    },
    {
      name: 'twitter:description',
      content:
        'Soluções em plásticos para construção civil e utilidades: qualidade, inovação e compromisso com o cliente.'
    },
    {
      name: 'twitter:image',
      content: 'https://globalplastic.com.br/img/share-og.jpg'
    },

    // Extra
    {
      name: 'theme-color',
      content: '#004080'
    },
    {
      name: 'msapplication-TileColor',
      content: '#004080'
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo_global.svg'
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'canonical',
      href: 'https://globalplastic.com.br/'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    }
  ]
});
</script>
