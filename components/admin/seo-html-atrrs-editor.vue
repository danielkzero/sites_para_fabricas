<template>
  <div>
    <label>Atributos HTML (JSON)</label>
    <textarea v-model="modelValue.attrs" rows="5" class="w-full border px-3 py-2 rounded font-mono" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: any }>()
defineEmits(['update:modelValue'])
</script>
