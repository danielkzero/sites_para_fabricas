<template>
    <section :class="[ classSection, 'py-12']">
        <div class="max-w-6xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-8">{{ titulo }}</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div v-for="item in produtos" :key="item.nome" 
                class="bg-white rounded shadow-md hover:shadow-2xl hover:scale-105 
                transition-all p-4 overflow-hidden cursor-pointer">
                    <img :src="item.img" :alt="item.nome" class="w-full h-40 object-cover">
                    <div class="p-4 text-center min-h-[150px] flex flex-col justify-between">
                        <div class="font-semibold text-xl text-gray-700 my-auto">{{ item.nome }}</div>
                        <button class="bg-rose-700 text-white px-4 py-1 text-xl rounded hover:bg-rose-900 mt-auto cursor-pointer">
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