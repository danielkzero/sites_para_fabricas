<template>
  <component :is="tag" :to="to" :href="href" :type="type" :disabled="disabled || loading"
    class="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
    :class="classArray" @click="handleClick">
    <span class="material-symbols-outlined animate-spin mr-2" :class="iconSizeClass" v-if="loading"></span>
    <span v-else-if="icon && iconPosition === 'left'" :class="iconSizeClass" class="mr-2 material-symbols-outlined">{{
      icon }}</span>

    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <span class="ml-2" v-if="icon && iconPosition === 'right'" :class="iconSizeClass">
      {{ icon }}</span>
  </component>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  icon: {
    type: String,
    default: null
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  to: {
    type: [String, Object],
    default: null
  },
  href: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  }
})




const emit = defineEmits(['click'])

const tag = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return 'button'
})

const sizeClass = computed(() => {
  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-4 py-2 text-base',
    xl: 'px-6 py-3 text-base'
  }
  return sizes[props.size]
})

const iconSizeClass = computed(() => {
  const sizes = {
    xs: 'w-4',
    sm: 'w-5',
    md: 'w-6',
    lg: 'w-7',
    xl: 'w-8'
  }
  return sizes[props.size]
})

const variantClass = computed(() => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-sm focus:ring-gray-500',
    outline: 'border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 shadow-sm focus:ring-blue-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-sm focus:ring-red-500'
  }
  return variants[props.variant]
})

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}


const classArray = computed(() => {
  return [
    sizeClass.value,
    variantClass.value,
    { 'cursor-not-allowed opacity-50': props.disabled || props.loading }
  ]
})
</script>
