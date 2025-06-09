<template>
  <section class="p-6 bg-gray-100 min-h-screen dark:bg-gray-900">
    <h1 class="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Criar nova página</h1>

    <form @submit.prevent="handleSubmit" class=" mx-auto space-y-6 bg-white p-6 rounded-lg shadow dark:bg-gray-800">
      <div>
        <label for="title" class="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Título da página</label>
        <input
          id="title"
          v-model="title"
          type="text"
          class="w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>

      <div>
        <label class="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Conteúdo</label>
      </div>

      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded focus:ring-4 focus:ring-blue-300 focus:outline-none"
      >
        Salvar
      </button>

      <p v-if="message" :class="{'text-green-600': success, 'text-red-600': !success}" class="mt-2">{{ message }}</p>
    </form>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })

import { ref } from 'vue';

const title = ref('')
const editor = ref(null)
const message = ref('')
const success = ref(false)

function handleSubmit() {
  const contentHtml = editor.value?.editor.getHTML()
  if (!title.value || !contentHtml) {
    message.value = 'Título e conteúdo são obrigatórios.'
    success.value = false
    return
  }

  // Simular envio para API (substitua por fetch/axios)
  console.log('Salvando página:', { title: title.value, content: contentHtml })

  message.value = 'Página salva com sucesso!'
  success.value = true

  // Limpar formulário
  title.value = ''
  editor.value.editor.commands.clearContent()
}
</script>
