<template>
  <div>
    <label>Língua</label>
    <input v-model="modelValue.lang" rows="5" class="w-full border px-3 py-2 rounded" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: { lang: string } }>()
defineEmits(['update:modelValue'])
</script>
