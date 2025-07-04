<template>
  <div>
    <!-- crie um dropdown -->
    <div class="relative inline-block text-left mb-4">
      <div class="inline-flex">
        <button
          class="inline-flex items-center justify-between rounded-md border border-gray-300 shadow-sm ps-4 pr-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
          @click="dropdownAberto = !dropdownAberto">
          {{ empresa?.nome || 'Selecione uma empresa' }}
          <span class="material-symbols-outlined text-gray-500">
            {{ dropdownAberto ? 'arrow_drop_down' : 'arrow_right' }}
          </span>
        </button>

        <div class="text-gray-500 dark:text-gray-300 text-xs ms-2 flex justify-center items-center">
          Bem-vindo,&nbsp;<span class="capitalize">{{ dados?.nome }}</span>!
        </div>
      </div>

      <div ref="dropdownMenu"
        :class="['absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-sm ring-opacity-5 focus:outline-none z-10', { hidden: !dropdownAberto }]">
        <div class="py-1">
          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" @click="mudarEmpresa(item)"
            v-for="(item, i) in dados?.empresa_id" :key="i">{{ item.nome }}</a>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
    <!-- Painel de interfaces -->
    <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Painel de Interfaces</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow mb-4">
        <h3 class="text-md font-semibold text-gray-900 dark:text-white">Gerenciar Interface</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300">Crie, edite e exclua páginas do seu site.</p>
        <router-link to="/admin/paginas" class="text-blue-600 hover:underline mt-2 inline-block">Acessar</router-link>
      </div>

      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow mb-4">
        <h3 class="text-md font-semibold text-gray-900 dark:text-white">Gerenciar Usuários</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300">Adicione, edite ou remova usuários do sistema.</p>
        <router-link to="/admin/usuarios" class="text-blue-600 hover:underline mt-2 inline-block">Acessar</router-link>
      </div>

      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow mb-4">
        <h3 class="text-md font-semibold text-gray-900 dark:text-white">Configurações do Site</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300">Ajuste as configurações gerais do seu site.</p>
        <router-link to="/admin/configuracoes" class="text-blue-600 hover:underline mt-2 inline-block">Acessar</router-link>
      </div>

      <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow mb-4">
        <h3 class="text-md font-semibold text-gray-900 dark:text-white">Relatórios e Análises</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300">Visualize relatórios de desempenho e análises.</p>
        <router-link to="/admin/relatorios" class="text-blue-600 hover:underline mt-2 inline-block">Acessar</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'admin' });
const dados = ref({});
const empresa = ref(null);
const dropdownAberto = ref(false);

function getDados() {
  return JSON.parse(localStorage.getItem('modest_usuario') || '{}');
}
function mudarEmpresa(empresaSelecionada) {
  localStorage.setItem('modest_empresa', JSON.stringify(empresaSelecionada || {}));
  empresa.value = empresaSelecionada;
  dropdownAberto.value = false; // Fecha o dropdown após selecionar a empresa
}
onMounted(() => {
  dados.value = getDados();
  if (localStorage.getItem('modest_empresa')) {
    const empresaId = JSON.parse(localStorage.getItem('modest_empresa') || '{}');
    if (empresaId && dados.value.empresa_id) {
      empresa.value = dados.value.empresa_id.find(e => e.id === empresaId.id) || null;
    }
  } else {
    localStorage.setItem('modest_empresa', JSON.stringify(dados.value.empresa_id[0] || {}));
    empresa.value = dados.value.empresa_id[0] || null; // Seleciona a primeira empresa por padrão
  }
});
</script>
