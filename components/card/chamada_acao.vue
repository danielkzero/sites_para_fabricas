<template>
  <section :class="dados.classSection">
            <div :class="dados.classCard">
                <h2  :class="dados.classTitulo" v-if="dados.titulo">
                    {{ dados.titulo }}
                </h2>
                <p :class="dados.classDescricao" v-if="dados.descricao">
                    {{ dados.descricao }}
                </p>
                <NuxtLink to="#" v-if="dados.link.text">
                    <button :class="dados.classButton">
                        {{ dados.link?.text }}
                    </button>
                </NuxtLink>
            </div>
        </section>
</template>

<script setup lang="ts">
defineProps<{
    dados: {
        classSection?: string;
        classCard?: string;    
        classTitulo?: string;
        classDescricao?: string;
        classButton?: string;
        titulo?: string;
        descricao?: string;
        link: {
            text?: string;
            url?: string;
        }
    }
}>();

</script>
