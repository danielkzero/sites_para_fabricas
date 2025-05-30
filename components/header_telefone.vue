<template>
  <div class="flex items-center justify-center bg-gray-200 text-gray-700 font-semibold p-3 align-middle text-xs">
        <!-- numero de atentimento da loja e icones de redes sociais -->
        <template v-if="telefones.length > 0">
            Atendimento: <a v-for="(tel, index) in telefones" :key="index" 
            :href="tel.href" class="px-1" target="_blank" rel="noopener noreferrer">{{ tel.numero }}</a>
        </template>
        <div class="flex space-x-4 ml-4">
            <a v-for="(social, index) in redesSociais" :key="index" :href="social.href" :title="social.nome" target="_blank" rel="noopener noreferrer">
                <i :class="social.icone"></i>
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
const telefones = [
  { numero: '24 3328-1000', href: 'tel:2433281000' },
  { numero: '98152-0333', href: 'tel:24981520333' }
];

const redesSociais = [
  { nome: 'Facebook', href: 'https://www.facebook.com', icone: 'bx bxl-facebook' },
  { nome: 'Instagram', href: 'https://www.instagram.com', icone: 'bx bxl-instagram' },
  { nome: 'Twitter', href: 'https://www.twitter.com', icone: 'bx bxl-twitter' },
  { nome: 'LinkedIn', href: 'https://www.linkedin.com', icone: 'bx bxl-linkedin' }
];
</script>