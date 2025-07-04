<template>
  <div>
    <label class="block text-sm font-medium mb-1">{{ modelValue.label }}</label>
    <input v-model="modelValue.value" class="w-full border px-3 py-2 rounded" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: { value: string } }>()
defineEmits(['update:modelValue'])
</script>
