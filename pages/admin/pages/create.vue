<template>
  <!-- Nome da página que eu estou criando e opções da página, como salvar e excluir página ou voltar -->
  <div class="flex items-center mb-3">
    <div
      class="p-2 rounded-xl items-center flex text-gray-400 hover:text-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none cursor-pointer">
      <span class="material-symbols-outlined">
        arrow_back
      </span>

      <h2 class="text-2xl ms-4">{{ page.name }}</h2>

    </div>
    <!-- Remover botão -->
    <button
      class="text-white bg-blue-600 hover:bg-blue-800 transition p-3 ms-auto flex items-center rounded-xl cursor-pointer">
      <span class="material-symbols-outlined me-1">save</span> Salvar
    </button>
    <!-- Remover botão -->
    <button
      class="text-white bg-red-600 hover:bg-red-800 transition p-3 flex items-center rounded-xl cursor-pointer ms-3">
      <span class="material-symbols-outlined">delete</span>
    </button>
  </div>

  <div class="grid grid-cols-12 min-h-screen gap-4">
    <div class="col-span-12">
      <div class="grid grid-cols-1 gap-4">
        <div v-for="(section, sIndex) in pageSections" :key="sIndex" class="bg-white rounded-2xl p-3 shadow-xs">
          <div class="flex items-center mb-3">
            <i class="bx bxs-layer me-2 text-xl"></i>
            <div class="p-2 bg-gray-100 rounded-xl inline-block max-w-3xl w-2/12 border border-gray-300">
              {{ section.label }}
            </div>
          </div>

          <div v-if="section.type === 'body'"
            class="grid ms-6 gap-3 border border-dashed border-gray-300 bg-amber-50 rounded-2xl p-3">
            <div class="grid gap-3" v-auto-animate>
              <div v-for="(component, cIndex) in section.components" :key="component.label + '-' + cIndex"
                class="bg-white rounded-2xl p-3 shadow-xs border border-gray-200">
                <div class="flex items-center mb-3">
                  <i class="bx bx-layer-plus me-2 text-xl"></i>
                  <div class="p-2 bg-gray-100 rounded-xl inline-block max-w-3xl w-2/12 border border-gray-300">
                    {{ component.label }}
                  </div>
                  <div class="flex items-center gap-1 ms-2">
                    <button @click="moveComponentUp(sIndex, cIndex)" :disabled="cIndex === 0"
                      class="p-1 rounded hover:bg-gray-200 disabled:opacity-30 cursor-pointer">
                      <span class="material-symbols-outlined">arrow_upward</span>
                    </button>
                    <button @click="moveComponentDown(sIndex, cIndex)"
                      :disabled="cIndex === section.components.length - 1"
                      class="p-1 rounded hover:bg-gray-200 disabled:opacity-30 cursor-pointer">
                      <span class="material-symbols-outlined">arrow_downward</span>
                    </button>
                  </div>
                  <!-- Remover botão -->
                  <button @click="removeComponent(sIndex, cIndex)"
                    class="text-red-600 hover:text-red-800 transition p-1 ms-auto cursor-pointer">
                    <span class="material-symbols-outlined">delete</span>
                  </button>
                </div>

                <div class="flex items-center gap-3">
                  <div v-for="(item, i) in component.items" :key="i"
                    @click="openEditor(section.label, component.label, item)"
                    class="p-2 rounded-xl items-center flex text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none cursor-pointer">
                    <span class="material-symbols-outlined me-2">
                      {{ item.icon }}
                    </span> {{ item.text }}
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded-2xl">
              <div class="flex items-center gap-3">
                <button type="button"
                  class="p-2 rounded-xl items-center flex text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none cursor-pointer">
                  <span class="material-symbols-outlined me-2">widgets</span> Adicionar componente
                </button>
              </div>
            </div>
          </div>

          <div v-else class="flex items-center gap-3">
            <div v-for="(item, i) in section.components" :key="i" @click="openEditor(null, section.label, item)"
              class="items-center flex p-2 rounded-xl text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none cursor-pointer">
              <span class="material-symbols-outlined me-2">{{ item.icon }}</span> {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Painel lateral -->
  <Transition name="fade">
    <div v-if="selectedComponent" class="fixed top-0 right-0 w-96 h-full bg-white shadow-2xl z-50 flex flex-col">
      <div class="flex justify-between items-center p-4 border-b">
        <div>
          <div class="text-sm text-gray-500 flex items-center">
            {{ selectedComponent.sectionLabel }}
            <span class="material-symbols-outlined" v-if="selectedComponent.sectionLabel">
              chevron_right
            </span>
            {{ selectedComponent.componentLabel }}
          </div>
          <div class="text-lg font-semibold">{{ selectedComponent.item.text }}</div>
        </div>
        <button @click="closeEditor" class="text-gray-600 hover:text-black">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>
      <div class="p-4 flex-1">
        <!-- Aqui vai o conteúdo editável -->
        <label class="block text-sm font-medium text-gray-700 mb-1">Valor</label>
        <input type="text" v-model="selectedComponent.item.text" class="w-full border rounded-lg px-3 py-2" />
      </div>
      <div class="p-4 border-t flex justify-end gap-2">
        <button @click="closeEditor" class="px-4 py-2 rounded-lg border">Cancelar</button>
        <button @click="closeEditor" class="px-4 py-2 rounded-lg bg-blue-600 text-white">Salvar</button>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>


definePageMeta({
  layout: 'admin',
})

const page = reactive(
  {
    name: 'Principal'
  }
)

const pageSections = ref([
  {
    label: 'SEO',
    type: 'seo',
    components: [
      { icon: 'page_header', text: 'Meta Título' },
      { icon: 'add_link', text: 'Meta Link' },
      { icon: 'edit_note', text: 'Meta Descrição' },
      { icon: 'html', text: 'Atributo HTML' }
    ]
  },
  {
    label: 'Body',
    type: 'body',
    components: [
      {
        label: 'Hero',
        items: [
          { icon: 'page_header', text: 'Título' },
          { icon: 'subheader', text: 'Subtítulo' },
          { icon: 'image', text: 'Imagem' },
          { icon: 'link', text: 'URL do botão' }
        ]
      },
      {
        label: 'Galeria de imagens',
        items: [
          { icon: 'slideshow', text: 'Slides' }
        ]
      },
      {
        label: 'Galeria de imagens2',
        items: [
          { icon: 'slideshow', text: 'Slides' }
        ]
      }
    ]
  }
])

function moveComponentUp(sectionIndex: number, componentIndex: number) {
  const components = pageSections.value[sectionIndex].components;
  if (componentIndex > 0) {
    const temp = components[componentIndex];
    components[componentIndex] = components[componentIndex - 1];
    components[componentIndex - 1] = temp;
  }
}

function moveComponentDown(sectionIndex: number, componentIndex: number) {
  const components = pageSections.value[sectionIndex].components;
  if (componentIndex < components.length - 1) {
    const temp = components[componentIndex];
    components[componentIndex] = components[componentIndex + 1];
    components[componentIndex + 1] = temp;
  }
}

function removeComponent(sectionIndex: number, componentIndex: number) {
  const components = pageSections.value[sectionIndex].components;
  components.splice(componentIndex, 1);
}


const selectedComponent = ref<null | {
  sectionLabel: string
  componentLabel: string
  item: { icon: string, text: string }
}>(null)

function openEditor(sectionLabel: string, componentLabel: string, item: any) {
  selectedComponent.value = { sectionLabel, componentLabel, item }
}

function closeEditor() {
  selectedComponent.value = null
}


</script>
<style lang="css" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>