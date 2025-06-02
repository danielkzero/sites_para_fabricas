<template>
    <section class="bg-rose-800 py-10">
        <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 rounded shadow-md text-center"
            v-for="(item, index) in dados" :key="index" :class="item.classCard">
                <h3 class="font-bold text-2xl mb-2">{{ item.titulo }}</h3>
                <p class="text-lg mb-4">{{ item.descricao }}</p>
                <NuxtLink :to="item.link.url">
                    <button class="px-5 py-2 rounded" :class="item.classButton">
                        {{ item.link.text }}
                    </button>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
defineProps<{
    dados: Array<{
        classSection?: string;
        classCard?: string;
        classButton?: string;
        titulo?: string;
        descricao?: string;
        link: {
            text: string;
            url: string;
        }
    }>;
}>();

</script>