<template>
    <div>
        <div class="flex justify-between items-center mb-3">
            <h3 class="text-lg font-semibold">Meta Links</h3>
            <button @click="addEntry" class="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                + Adicionar
            </button>
        </div>

        <div v-for="(entry, index) in modelValue" :key="index"
            class="grid grid-cols-1 md:grid-cols-3 gap-3 items-end mb-4 border p-3 rounded-lg">
            <div>
                <label class="block mb-1 text-sm font-medium">Rel</label>
                <select v-model="entry.rel" class="w-full border rounded px-3 py-2">
                    <option value="icon">icon</option>
                    <option value="canonical">canonical</option>
                    <option value="alternate">alternate</option>
                </select>
            </div>

            <div v-if="entry.rel === 'icon'">
                <label class="block mb-1 text-sm font-medium">Type</label>
                <select v-model="entry.type" class="w-full border rounded px-3 py-2">
                    <option value="image/png">image/png</option>
                    <option value="image/svg+xml">image/svg+xml</option>
                </select>
            </div>

            <div>
                <label class="block mb-1 text-sm font-medium">Href</label>
                <input type="text" v-model="entry.href" placeholder="https://..."
                    class="w-full border rounded px-3 py-2" />
            </div>

            <button @click="removeEntry(index)"
                class="text-red-600 hover:text-red-800 col-span-full md:col-auto mt-2 md:mt-0 ml-auto">
                <span class="material-symbols-outlined">delete</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: Array<{ rel: string; href: string; type?: string }> }>()
const emit = defineEmits(['update:modelValue'])

function addEntry() {
    emit('update:modelValue', [...props.modelValue, { rel: 'canonical', href: '' }])
}

function removeEntry(index: number) {
    const updated = [...props.modelValue]
    updated.splice(index, 1)
    emit('update:modelValue', updated)
}
</script>
