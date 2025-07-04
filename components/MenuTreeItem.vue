<template>
  <div class="menu-tree-item">
    <div 
      class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
      :style="{ marginLeft: `${level * 24}px` }"
    >
      <div class="flex items-center space-x-3 flex-1">
        <!-- Expand/Collapse Button -->
        <button
          v-if="item.children && item.children.length > 0"
          @click="toggleExpanded"
          class="p-1 text-gray-400 hover:text-gray-600"
        >
          <Icon 
            :name="isExpanded ? 'material-symbols:expand-less' : 'material-symbols:expand-more'" 
            class="w-4 h-4" 
          />
        </button>
        <div v-else class="w-6"></div>

        <!-- Menu Item Icon -->
        <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
          <Icon :name="getItemIcon(item.type)" class="w-4 h-4 text-purple-600" />
        </div>

        <!-- Menu Item Info -->
        <div class="flex-1 min-w-0">
          <div class="flex items-center space-x-2">
            <h4 class="text-sm font-medium text-gray-900">{{ item.title }}</h4>
            <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600">
              {{ item.type }}
            </span>
          </div>
          <p class="text-xs text-gray-500 mt-1">{{ item.url }}</p>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <AppButton 
          variant="ghost" 
          size="xs" 
          icon="material-symbols:add"
          title="Adicionar Subitem"
          @click="$emit('add-child', item)"
        />
        <AppButton 
          variant="ghost" 
          size="xs" 
          icon="material-symbols:edit"
          title="Editar"
          @click="$emit('edit', item)"
        />
        <AppButton 
          variant="ghost" 
          size="xs" 
          icon="material-symbols:delete"
          title="Excluir"
          @click="$emit('delete', item)"
        />
      </div>
    </div>

    <!-- Children -->
    <div v-if="isExpanded && item.children && item.children.length > 0" class="mt-1">
      <MenuTreeItem
        v-for="child in item.children"
        :key="child.id"
        :item="child"
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
  item: {
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

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const getItemIcon = (type) => {
  const icons = {
    page: 'material-symbols:description',
    category: 'material-symbols:category',
    custom: 'material-symbols:link',
    external: 'material-symbols:open-in-new'
  }
  return icons[type] || 'material-symbols:link'
}
</script>

<style scoped>
.menu-tree-item:hover .opacity-0 {
  opacity: 1;
}
</style>

