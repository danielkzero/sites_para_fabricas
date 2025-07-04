<template>
  <div class="category-tree-item">
    <div 
      class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
      :class="{ 'bg-blue-50': isSelected }"
      :style="{ marginLeft: `${level * 24}px` }"
    >
      <div class="flex items-center space-x-3 flex-1">
        <!-- Expand/Collapse Button -->
        <button
          v-if="category.children && category.children.length > 0"
          @click="toggleExpanded"
          class="p-1 text-gray-400 hover:text-gray-600"
        >
          <Icon 
            :name="isExpanded ? 'material-symbols:expand-less' : 'material-symbols:expand-more'" 
            class="w-4 h-4" 
          />
        </button>
        <div v-else class="w-6"></div>

        <!-- Category Icon -->
        <div 
          class="w-8 h-8 rounded-lg flex items-center justify-center"
          :style="{ backgroundColor: category.color + '20' }"
        >
          <Icon name="material-symbols:category" class="w-4 h-4" :style="{ color: category.color }" />
        </div>

        <!-- Category Info -->
        <div class="flex-1 min-w-0">
          <div class="flex items-center space-x-2">
            <h4 class="text-sm font-medium text-gray-900">{{ category.name }}</h4>
            <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600">
              {{ category.pages_count }} páginas
            </span>
          </div>
          <p v-if="category.description" class="text-xs text-gray-500 mt-1">{{ category.description }}</p>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <AppButton 
          variant="ghost" 
          size="xs" 
          icon="material-symbols:add"
          title="Adicionar Subcategoria"
          @click="$emit('add-child', category)"
        />
        <AppButton 
          variant="ghost" 
          size="xs" 
          icon="material-symbols:edit"
          title="Editar"
          @click="$emit('edit', category)"
        />
        <AppButton 
          variant="ghost" 
          size="xs" 
          icon="material-symbols:delete"
          title="Excluir"
          @click="$emit('delete', category)"
        />
      </div>
    </div>

    <!-- Children -->
    <div v-if="isExpanded && category.children && category.children.length > 0" class="mt-1">
      <CategoryTreeItem
        v-for="child in category.children"
        :key="child.id"
        :category="child"
        :level="level + 1"
        @edit="$emit('edit', $event)"
        @delete="$emit('delete', $event)"
        @add-child="$emit('add-child', $event)"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  category: {
    type: Object,
    required: true
  },
  level: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['edit', 'delete', 'add-child'])

const isExpanded = ref(true)
const isSelected = ref(false)

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.category-tree-item:hover .opacity-0 {
  opacity: 1;
}
</style>

