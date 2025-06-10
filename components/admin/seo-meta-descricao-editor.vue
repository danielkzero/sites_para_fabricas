<template>
    <div>
        <div class="flex justify-between items-center mb-3">
            <h3 class="text-lg font-semibold">Meta Descrições</h3>
            <button @click="addEntry" class="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                + Adicionar
            </button>
        </div>

        <div v-for="(entry, index) in modelValue" :key="index" class="grid grid-cols-4 gap-3 mb-3 items-center">
            <div>
                <label class="block text-sm mb-1">Tipo</label>
                <select :value="entry.name !== undefined ? 'name' : 'property'"
                    @change="onTypeChange(entry, $event.target.value)" class="w-full border rounded px-3 py-2">
                    <option value="name">name</option>
                    <option value="property">property</option>
                </select>

            </div>

            <div>
                <label class="block text-sm mb-1">Nome/Propriedade</label>
                <input v-model="entry.name" v-if="entry.name !== undefined" class="w-full border rounded px-3 py-2"
                    placeholder="ex: description" />
                <input v-model="entry.property" v-else class="w-full border rounded px-3 py-2"
                    placeholder="ex: og:title" />
            </div>

            <div>
                <label class="block text-sm mb-1">Conteúdo</label>
                <input v-model="entry.content" class="w-full border rounded px-3 py-2"
                    placeholder="Conteúdo da meta tag" />
            </div>

            <button @click="removeEntry(index)" class="text-red-600 hover:text-red-800 mt-6" title="Remover entrada">
                <span class="material-symbols-outlined">delete</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: Array<{ name?: string; property?: string; content: string }> }>()
const emit = defineEmits(['update:modelValue'])

function addEntry() {
    emit('update:modelValue', [...props.modelValue, { name: '', content: '' }])
}

function removeEntry(index: number) {
    const updated = [...props.modelValue]
    updated.splice(index, 1)
    emit('update:modelValue', updated)
}

function entryType(entry: { name?: string; property?: string }) {
    return entry.name !== undefined ? 'name' : 'property'
}

function onTypeChange(entry: any, type: string) {
    if (type === 'name') {
        entry.name = ''
        delete entry.property
    } else {
        entry.property = ''
        delete entry.name
    }
}
</script>
