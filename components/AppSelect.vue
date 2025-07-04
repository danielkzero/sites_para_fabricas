<template>
  <div class="space-y-1">
    <label v-if="label" :for="inputId" class="block text-sm font-medium text-gray-700">
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>

    <div class="relative">
      <div v-if="icon" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span class="material-symbols-outlined text-gray-400 w-5 h-5">{{ icon }}</span>
      </div>

      <select :id="inputId" :value="modelValue" @change="handleChange" :disabled="disabled"
        class="block w-full rounded-lg border border-gray-300 bg-gray-100 focus:border-gray-500 focus:ring-gray-500 transition-colors duration-200"
        :class="[
          icon ? 'pl-10' : 'pl-3',
          error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : '',
          sizeClass
        ]">
        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>

    <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
    <p v-else-if="help" class="text-sm text-gray-500">{{ help }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: String,
  icon: String,
  required: Boolean,
  disabled: Boolean,
  error: String,
  help: String,
  size: {
    type: String,
    default: 'md',
    validator: val => ['sm', 'md', 'lg'].includes(val),
  },
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue'])


const inputId = computed(() => {
  if (props.id) return props.id

  // Evita gerar em SSR
  if (process.client) {
    return `input-${Math.random().toString(36).substr(2, 9)}`
  }

  // SSR: placeholder seguro
  return undefined
})

const sizeClass = computed(() => {
  const sizes = {
    sm: 'py-2 text-sm',
    md: 'py-2.5 text-sm',
    lg: 'py-3 text-base',
  }
  return sizes[props.size]
})

const handleChange = (event) => {
  const target = event.target
  emit('update:modelValue', target.value)
}
</script>
