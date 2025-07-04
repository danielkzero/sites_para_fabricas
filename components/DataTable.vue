<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <!-- Table Header -->
    <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
          <p v-if="subtitle" class="text-sm text-gray-500 mt-1">{{ subtitle }}</p>
        </div>
        <div class="flex items-center space-x-3">
          <slot name="actions" />
        </div>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-gray-50 border-b border-gray-200">
          <tr>
            <th v-if="selectable" class="w-12 px-6 py-3 text-left">
              <input
                type="checkbox"
                :checked="allSelected"
                @change="toggleAll"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </th>
            <th
              v-for="column in columns"
              :key="column.key"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              :class="column.class"
            >
              {{ column.label }}
            </th>
            <th v-if="hasActions" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="(item, index) in data"
            :key="item.id || index"
            class="hover:bg-gray-50 transition-colors"
            :class="{ 'bg-blue-50': selectedItems.includes(item.id) }"
          >
            <td v-if="selectable" class="w-12 px-6 py-4">
              <input
                type="checkbox"
                :checked="selectedItems.includes(item.id)"
                @change="toggleItem(item.id)"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
            </td>
            <td
              v-for="column in columns"
              :key="column.key"
              class="px-6 py-4 whitespace-nowrap"
              :class="column.cellClass"
            >
              <slot :name="`cell-${column.key}`" :item="item" :value="item[column.key]">
                <span v-if="column.type === 'badge'" class="inline-flex px-2 py-1 text-xs font-semibold rounded-full" :class="getBadgeClass(item[column.key])">
                  {{ item[column.key] }}
                </span>
                <span v-else-if="column.type === 'date'" class="text-sm text-gray-900">
                  {{ formatDate(item[column.key]) }}
                </span>
                <span v-else-if="column.type === 'number'" class="text-sm font-medium text-gray-900">
                  {{ formatNumber(item[column.key]) }}
                </span>
                <span v-else class="text-sm text-gray-900">
                  {{ item[column.key] }}
                </span>
              </slot>
            </td>
            <td v-if="hasActions" class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <slot name="row-actions" :item="item" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Empty State -->
    <div v-if="data.length === 0" class="text-center py-12">
      <slot name="empty">
        <span class="material-symbols text-gray-400 text-6xl mb-4">inbox</span>
        <h3 class="text-lg font-medium text-gray-900 mb-2">Nenhum item encontrado</h3>
        <p class="text-gray-500">Comece criando um novo item.</p>
      </slot>
    </div>

    <!-- Pagination -->
    <div v-if="pagination && data.length > 0" class="px-6 py-4 border-t border-gray-200 bg-gray-50">
      <div class="flex items-center justify-between">
        <div class="text-sm text-gray-700">
          Mostrando {{ pagination.from }} a {{ pagination.to }} de {{ pagination.total }} resultados
        </div>
        <div class="flex items-center space-x-2">
          <button
            :disabled="pagination.currentPage === 1"
            @click="$emit('page-change', pagination.currentPage - 1)"
            class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <span class="px-3 py-1 text-sm">
            Página {{ pagination.currentPage }} de {{ pagination.totalPages }}
          </span>
          <button
            :disabled="pagination.currentPage === pagination.totalPages"
            @click="$emit('page-change', pagination.currentPage + 1)"
            class="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próxima
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  columns: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    default: () => []
  },
  selectable: {
    type: Boolean,
    default: false
  },
  hasActions: {
    type: Boolean,
    default: true
  },
  pagination: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['selection-change', 'page-change'])

const selectedItems = ref([])

const allSelected = computed(() => {
  return props.data.length > 0 && selectedItems.value.length === props.data.length
})

const toggleAll = () => {
  if (allSelected.value) {
    selectedItems.value = []
  } else {
    selectedItems.value = props.data.map(item => item.id)
  }
  emit('selection-change', selectedItems.value)
}

const toggleItem = (id) => {
  const index = selectedItems.value.indexOf(id)
  if (index > -1) {
    selectedItems.value.splice(index, 1)
  } else {
    selectedItems.value.push(id)
  }
  emit('selection-change', selectedItems.value)
}

const getBadgeClass = (value) => {
  const classes = {
    'ativo': 'bg-green-100 text-green-800',
    'inativo': 'bg-gray-100 text-gray-800',
    'rascunho': 'bg-yellow-100 text-yellow-800',
    'publicado': 'bg-green-100 text-green-800',
    'arquivado': 'bg-red-100 text-red-800'
  }
  return classes[value?.toLowerCase()] || 'bg-gray-100 text-gray-800'
}

const formatDate = (date) => {
  if (!date) return '-'
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date(date))
}

const formatNumber = (number) => {
  if (number === null || number === undefined) return '-'
  return new Intl.NumberFormat('pt-BR').format(number)
}
</script>

