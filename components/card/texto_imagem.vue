<template>
    <!-- Qualidade -->
    <section class="py-16 bg-white">
        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-x-6">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <h2 class="text-3xl font-bold text-rose-800 mb-4">{{ dados.titulo }}</h2>
                <p class="text-gray-700 text-lg leading-relaxed">
                    {{ dados.descricao }}
                </p>
                <span class="mt-4 bg-rose-700 text-white px-6 py-2 text-lg rounded hover:bg-rose-900 inline-block">
                    <NuxtLink :to="dados.link.to">
                        {{ dados.link.text || '' }}
                    </NuxtLink>
                </span>
            </div>
            <div class="md:w-1/2 text-center">
                <img :src="dados.imagem" alt="Qualidade GlobalPlastic" class="mx-auto max-h-[300px]" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    dados: {
        titulo: string;
        descricao?: string;
        texto_botao?: string;
        imagem?: string;
        link: {
            to?: string;
            text?: string;
        }    
    }
}>();
</script>