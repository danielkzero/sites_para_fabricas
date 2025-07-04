<template>
  <div>
    <label v-if="modelValue.label" class="block text-sm font-medium mb-1">
      {{ modelValue.label }}
    </label>

    <div
      v-bind="getRootProps()"
      class="border border-dashed p-4 rounded text-center cursor-pointer hover:bg-gray-50 transition"
    >
      <input v-bind="getInputProps()" />
      <p class="text-sm text-gray-500">
        Arraste uma imagem ou clique para selecionar
      </p>
    </div>

    <div v-if="preview" class="mt-4">
      <img
        :src="preview"
        alt="Preview"
        class="max-w-xs rounded shadow border"
        @error="preview = ''"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDropzone } from 'vue3-dropzone'
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: { value: string; label?: string }
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: { value: string; label?: string }): void
}>()

const preview = ref(props.modelValue.value ?? '')

// Convert file to base64 string
function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
  })
}

const { getRootProps, getInputProps } = useDropzone({
  accept: 'image/*',
  multiple: false,
  onDrop: async (files: File[]) => {
    const file = files[0]
    if (file) {
      const base64 = await toBase64(file)
      preview.value = base64
      emit('update:modelValue', {
        ...props.modelValue,
        value: base64
      })
    }
  }
})

watch(
  () => props.modelValue.value,
  (val) => {
    preview.value = val ?? ''
  }
)
</script>
