<template>
  <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
    <div class="flex items-center justify-between">
      <div class="flex-1">
        <p class="text-sm font-medium text-gray-600 mb-1">{{ title }}</p>
        <p class="text-3xl font-bold text-gray-900">{{ formattedValue }}</p>
        <div v-if="change" class="flex items-center mt-2">
          <Icon 
            :name="change.type === 'increase' ? 'material-symbols:trending-up' : 'material-symbols:trending-down'" 
            class="w-4 h-4 mr-1"
            :class="change.type === 'increase' ? 'text-green-500' : 'text-red-500'"
          />
          <span 
            class="text-sm font-medium"
            :class="change.type === 'increase' ? 'text-green-600' : 'text-red-600'"
          >
            {{ change.value }}
          </span>
          <span class="text-sm text-gray-500 ml-1">{{ change.period }}</span>
        </div>
      </div>
      
      <div class="flex-shrink-0">
        <div 
          class="w-12 h-12 rounded-lg flex items-center justify-center"
          :class="iconBgClass"
        >
          <Icon :name="icon" class="w-6 h-6" :class="iconClass" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number],
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'blue'
  },
  change: {
    type: Object,
    default: null
  },
  format: {
    type: String,
    default: 'number'
  }
})

const formattedValue = computed(() => {
  if (props.format === 'currency') {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(props.value)
  } else if (props.format === 'number') {
    return new Intl.NumberFormat('pt-BR').format(props.value)
  }
  return props.value
})

const iconBgClass = computed(() => {
  const colors = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    yellow: 'bg-yellow-100',
    red: 'bg-red-100',
    purple: 'bg-purple-100',
    indigo: 'bg-indigo-100'
  }
  return colors[props.color] || colors.blue
})

const iconClass = computed(() => {
  const colors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    red: 'text-red-600',
    purple: 'text-purple-600',
    indigo: 'text-indigo-600'
  }
  return colors[props.color] || colors.blue
})
</script>

