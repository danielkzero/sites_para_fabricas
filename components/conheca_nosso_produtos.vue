<template>
    <section :class="[ classSection, 'py-12']">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-2xl font-bold text-center mb-8">{{ titulo }}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div v-for="item in produtos" :key="item.nome" class="bg-white rounded shadow-md hover:shadow-2xl hover:scale-105 transition-all p-4 overflow-hidden cursor-pointer">
                    <img :src="item.img" :alt="item.nome" class="w-full h-40 object-cover">
                    <div class="p-4 text-center">
                        <h3 class="font-semibold text-sm text-gray-700">{{ item.nome }}</h3>
                        <p class="text-2xl text-rose-700">{{ item.linha }}</p>
                        <button class="mt-2 bg-rose-700 text-white px-4 py-1 text-sm rounded hover:bg-rose-900">
                            Saiba mais
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
defineProps<{
    classSection?: string;
    titulo: string;
    produtos: Array<{
        nome: string;
        img: string;
        linha: string;
    }>;
}>();
</script>