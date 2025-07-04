<template>
    <div class="space-y-6">
        <!-- Page Header -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold text-gray-900">Páginas</h1>
                <p class="text-gray-600 mt-1">Gerencie todas as páginas do seu site</p>
            </div>

            <div class="flex items-center space-x-3">
                <AppButton variant="outline" icon="upload">
                    Importar
                </AppButton>
                <AppButton variant="primary" icon="add" to="/admin/pages/create">
                    Nova Página
                </AppButton>
            </div>
        </div>

        <!-- Filters -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <AppInput v-model="filters.search" placeholder="Buscar páginas..." :id="generateRandomId()"
                    icon="search" />

                <AppSelect v-model="filters.category" icon="filter_alt" :options="optionsCategory" :id="generateRandomId()" />

                <AppSelect v-model="filters.status" icon="filter_alt" :options="optionsStatus" :id="generateRandomId()" />              

                <AppButton variant="primary" icon="filter_alt" @click="applyFilters">
                    Filtrar
                </AppButton>
            </div>
        </div>

        <!-- Pages Table -->
        <DataTable title="Todas as Páginas" :subtitle="`${filteredPages.length} páginas encontradas`" :columns="columns"
            :data="paginatedPages" :selectable="true" :pagination="pagination" @selection-change="handleSelection"
            @page-change="handlePageChange">
            <template #actions>
                <AppButton v-if="selectedPages.length > 0" variant="outline" size="sm" icon="delete"
                    @click="deleteSelected">
                    Excluir Selecionados ({{ selectedPages.length }})
                </AppButton>
                <AppButton variant="outline" size="sm" icon="download">
                    Exportar
                </AppButton>
            </template>

            <template #cell-titulo="{ item }">
                <div class="flex items-center space-x-3">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                            <span class="material-symbols-outlined text-gray-600 w-5 h-5">
                                description
                            </span>
                        </div>
                    </div>
                    <div>
                        <div class="text-sm font-medium text-gray-900">{{ item.titulo }}</div>
                        <div class="text-sm text-gray-500">{{ item.slug }}</div>
                    </div>
                </div>
            </template>

            <template #cell-categoria="{ value }">
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {{ value }}
                </span>
            </template>

            <template #cell-status="{ value }">
                <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full" :class="getStatusClass(value)">
                    {{ value }}
                </span>
            </template>

            <template #cell-visualizacao="{ value }">
                <div class="flex items-center">
                    <span class="material-symbols-outlined text-gray-400 w-4 h-4 mr-4">visibility</span>
                    <span class="text-sm font-medium text-gray-900">{{ formatNumber(value) }}</span>
                </div>
            </template>

            <template #row-actions="{ item }">
                <div class="flex items-center space-x-1">
                    <AppButton variant="ghost" size="xs" icon="visibility" title="Visualizar"
                        @click="previewPage(item)" />
                    <AppButton variant="ghost" size="xs" icon="edit" title="Editar"
                        :to="`/admin/pages/${item.id}`" />
                    <AppButton variant="ghost" size="xs" icon="content_copy" title="Duplicar"
                        @click="duplicatePage(item)" />
                    <AppButton variant="ghost" size="xs" icon="delete" title="Excluir" @click="deletePage(item)" />
                </div>
            </template>

            <template #empty>
                <span class="material-symbols text-gray-400 w-12 h-12 mx-auto mb-4">description</span>
                <h3 class="text-lg font-medium text-gray-900 mb-2">Nenhuma página encontrada</h3>
                <p class="text-gray-500 mb-6">Comece criando sua primeira página.</p>
                <AppButton variant="primary" icon="add" to="/admin/pages/create">
                    Criar Primeira Página
                </AppButton>
            </template>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import type { Page } from '@/types/Page'

definePageMeta({
    layout: 'admin'
})


// Filters
const filters = ref({
    search: '',
    category: '',
    status: ''
})

// Table columns
const columns = ref([
    { key: 'titulo', label: 'Título', class: 'w-2/5' },
    { key: 'categoria', label: 'Categoria', class: 'w-1/6' },
    { key: 'status', label: 'Status', class: 'w-1/6', type: 'badge' },
    { key: 'visualizacao', label: 'Visualizações', class: 'w-1/6' },
    { key: 'atualizado_em', label: 'Atualizado', class: 'w-1/6', type: 'date' }
])

// Options for category and status filters
const optionsCategory = ref([
    { value: '', label: 'Todas as categorias' },
    { value: 'institucional', label: 'Institucional' },
    { value: 'servicos', label: 'Serviços' },
    { value: 'blog', label: 'Blog' },
    { value: 'legal', label: 'Legal' }
]);
const optionsStatus = ref([
      { value: '', label: 'Todos os status' },
      { value: 'publicado', label: 'Publicado' },
      { value: 'rascunho', label: 'Rascunho' },
      { value: 'arquivado', label: 'Arquivado' }
    ]);

// Mock data
const pages = ref<Page[]>([])


function generateRandomId() {
    // client-side unique ID generator
    return 'input-' + useId()
}

// Selection
const selectedPages = ref<number[]>([])


// Pagination
const currentPage = ref(1)
const itemsPerPage = ref(10)

// Computed
const filteredPages = computed(() => {
    let result = pages.value

    if (filters.value.search) {
        result = result.filter((page: Page) =>
            page.titulo.toLowerCase().includes(filters.value.search.toLowerCase()) ||
            page.slug.toLowerCase().includes(filters.value.search.toLowerCase())
        )
    }

    if (filters.value.category) {
        result = result.filter((page: Page) =>
            page.categoria.toLowerCase() === filters.value.category.toLowerCase()
        )
    }

    if (filters.value.status) {
        result = result.filter((page: Page) =>
            page.status.toLowerCase() === filters.value.status.toLowerCase()
        )
    }

    return result
})

const paginatedPages = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    return filteredPages.value.slice(start, end)
})

const pagination = computed(() => {
    const total = filteredPages.value.length
    const totalPages = Math.ceil(total / itemsPerPage.value)
    const from = (currentPage.value - 1) * itemsPerPage.value + 1
    const to = Math.min(currentPage.value * itemsPerPage.value, total)

    return {
        currentPage: currentPage.value,
        totalPages,
        total,
        from,
        to
    }
})

// Methods
const getStatusClass = (status: string) => {
    const classes: any = {
        'Publicado': 'bg-green-100 text-green-800',
        'Rascunho': 'bg-yellow-100 text-yellow-800',
        'Arquivado': 'bg-red-100 text-red-800'
    }
    return classes[status] || 'bg-gray-100 text-gray-800'
}

const formatNumber = (number: number) => {
    return new Intl.NumberFormat('pt-BR').format(number)
}

const handleSelection = (selectedIds: number[]) => {
    selectedPages.value = selectedIds
}

const handlePageChange = (page: number) => {
    currentPage.value = page
}

const applyFilters = () => {
    currentPage.value = 1
}

const previewPage = (page: Page) => {
    window.open(`/preview/${page.slug}`, '_blank')
}

const duplicatePage = (page: Page) => {
    console.log('Duplicating page:', page.title)
}

const deletePage = (page: Page) => {
    if (confirm(`Tem certeza que deseja excluir a página "${page.title}"?`)) {
        const index = pages.value.findIndex((p: Page) => p.id === page.id)
        if (index > -1) {
            pages.value.splice(index, 1)
        }
    }
}

const deleteSelected = () => {
    if (confirm(`Tem certeza que deseja excluir ${selectedPages.value.length} páginas selecionadas?`)) {
        pages.value = pages.value.filter((page: Page) => !selectedPages.value.includes(page.id))
        selectedPages.value = []
    }
}

const fetchPages = async () => {
  try {
    const { $axios } = useNuxtApp()
    const response = await $axios.get('/paginas_publicas')

    pages.value = response.data.map((p: any) => ({
      id: p.id,
      titulo: p.titulo,
      slug: p.slug,
      categoria: p.categoria ?? 'Sem Categoria',
      status: p.status,
      visualizacao: p.visualizacao ?? 0,
      atualizado_em: new Date(p.atualizado_em),
    }))
  } catch (error) {
    console.error('Erro ao buscar páginas:', error)
  }
}
onMounted(() => {
  fetchPages()
})

</script>
