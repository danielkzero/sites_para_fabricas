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

      <component :is="tag" :id="inputId" :type="type" :placeholder="placeholder" :disabled="disabled"
        :readonly="readonly" :rows="rows" :value="modelValue" @input="handleInput" @blur="handleBlur"
        @focus="handleFocus"
        class="block w-full rounded-lg border border-gray-300 transition-colors duration-200 bg-gray-50 focus:border focus:ring-gray-500 focus:border-gray-500 disabled:bg-gray-50 disabled:text-gray-500"
        :class="[
          icon ? 'pl-10' : 'pl-3',
          error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : '',
          sizeClass
        ]" />

      <div v-if="suffix" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <span class="text-gray-500 text-sm">{{ suffix }}</span>
      </div>
    </div>

    <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
    <p v-else-if="help" class="text-sm text-gray-500">{{ help }}</p>
  </div>
</template>

<script  setup>
const props = defineProps({
  id: {
    type: String,
    default: null
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: null
  },
  icon: {
    type: String,
    default: null
  },
  suffix: {
    type: String,
    default: null
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: null
  },
  help: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  multiline: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 3
  }
})

const emit = defineEmits(['update:modelValue', 'blur', 'focus'])

/*const id = computed(() => `input-${Math.random().toString(36).substr(2, 9)}`)*/

const inputId = computed(() => {
  if (props.id) return props.id

  // Evita gerar em SSR
  if (process.client) {
    return `input-${Math.random().toString(36).substr(2, 9)}`
  }

  // SSR: placeholder seguro
  return undefined
})

const tag = computed(() => props.multiline ? 'textarea' : 'input')

const sizeClass = computed(() => {
  const sizes = {
    sm: 'py-2 text-sm',
    md: 'py-2.5 text-sm',
    lg: 'py-3 text-base'
  }
  return sizes[props.size]
})

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const handleBlur = (event) => {
  emit('blur', event)
}

const handleFocus = (event) => {
  emit('focus', event)
}
</script>
