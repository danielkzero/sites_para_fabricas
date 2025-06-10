<template>
  <div>
    <label class="block text-sm font-medium mb-1">Título da página</label>
    <input v-model="modelValue.text" class="w-full border px-3 py-2 rounded" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: any }>()
defineEmits(['update:modelValue'])
</script>
