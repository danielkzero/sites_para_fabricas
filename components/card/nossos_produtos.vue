<template>
    <div :class="classSection">
        <div :class="classContainer">
            <span class="text-3xl font-bold text-center mb-8 block" v-if="titulo">{{ titulo }}</span>
                <div :class="classGrid">
                <div v-for="item in produtos" :key="item.nome" :class="classCard">
                    <img :src="item.img" :alt="item.nome" :class="classImagem" />
                    <div :class="classTitulo">{{ item.nome }}</div>                    
                    <button :class="classButton">
                        {{ buttonText }}
                    </button>
                </div>
            </div>
        </div>        
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    classImagem?: string;
    classGrid?: string;
    classSection?: string;
    classCard?: string;
    classTitulo?: string;
    classDescricao?: string;
    classButton?: string;
    classContainer?: string;
    buttonText?: string;
    titulo: string;
    produtos: Array<{
        nome: string;
        img: string;
    }>;
}>();
</script>