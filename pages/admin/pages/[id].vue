<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="hidden md:block md:col-span-4 lg:col-span-2">
      <!-- páginas -->
      <admin-lista-paginas />
    </div>
    <div class="col-span-12 md:col-span-8 lg:col-span-10">
      <!-- Nome da página que eu estou criando e opções da página, como salvar e excluir página ou voltar -->

      <section class="editor-pagina">
        <section class="editor-pagina-toolbar">
          <div class="flex items-center mb-3">
            <div
              class="p-2 rounded-xl items-center flex text-gray-400 hover:text-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none cursor-pointer transition-all scale-100 hover:scale-105">
              <span class="material-symbols-outlined">
                arrow_back
              </span>

              <h2 class="text-2xl ms-4">{{ page.display_name }}</h2>

            </div>
            <!-- Remover botão -->
            <button
              class="text-white bg-blue-600 hover:bg-blue-800 p-3 ms-auto flex items-center rounded-xl cursor-pointer transition-all scale-100 hover:scale-105">
              <span class="material-symbols-outlined me-1">save</span> Salvar
            </button>
            <!-- Remover botão -->
            <button
              class="text-white bg-red-600 hover:bg-red-800 p-3 flex items-center rounded-xl cursor-pointer ms-3 transition-all scale-100 hover:scale-105">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </div>
        </section>
        <section class="editor-pagina-constructor">
          <div class="grid grid-cols-1 gap-4">
            <div v-for="(section, sIndex) in pageSections" :key="sIndex" class="bg-white rounded-xl p-3 shadow-xs">
              <div class="flex items-center mb-3">
                <i class="bx bxs-layer me-2 text-xl"></i>
                <div class="p-2 bg-gray-100 rounded-xl inline-block max-w-3xl w-2/12 border border-gray-300">
                  {{ section.label }}
                </div>
              </div>

              <div v-if="section.type === 'body'"
                class="grid ms-6 gap-3 border border-dashed border-gray-300 bg-amber-50 rounded-xl p-3">
                <div class="grid gap-3" v-auto-animate>
                  <div v-for="(component, cIndex) in section.components" :key="component.name + '-' + component.id"
                    class="bg-white rounded-xl p-3 shadow-xs border border-gray-200">

                    <section :class="component.name + '-' + component.id">
                      <div class="flex items-center mb-3">
                        <i class="bx bx-layer-plus me-2 text-xl"></i>
                        <div class="p-2 bg-gray-100 rounded-xl inline-block w-full border border-gray-300">
                          {{ component.label }}
                        </div>
                        <div class="bg-amber-100 p-3 text-gray-700 text-xs rounded-3xl mx-2 whitespace-nowrap">{{
                          component.name + '-' + component.id }}</div>
                        <div class="flex items-center gap-1 ms-2">
                          <button @click="moveComponentUp(sIndex, cIndex)" :disabled="cIndex === 0"
                            class="p-1 rounded hover:bg-gray-200 disabled:opacity-30 cursor-pointer transition-all scale-100 hover:scale-110">
                            <span class="material-symbols-outlined">arrow_upward</span>
                          </button>
                          <button @click="moveComponentDown(sIndex, cIndex)"
                            :disabled="cIndex === section.components.length - 1"
                            class="p-1 rounded hover:bg-gray-200 disabled:opacity-30 cursor-pointer transition-all scale-100 hover:scale-110">
                            <span class="material-symbols-outlined">arrow_downward</span>
                          </button>
                        </div>
                        <!-- Remover botão -->
                        <button @click="removeComponent(sIndex, cIndex)"
                          class="text-red-600 hover:text-red-800 p-1 ms-10 cursor-pointer transition-all scale-100 hover:scale-110">
                          <span class="material-symbols-outlined">delete</span>
                        </button>
                      </div>

                      <div class="flex items-center gap-3">
                        <div v-for="(item, i) in component.items" :key="i"
                          @click="openEditor(section.label, component.label, item)"
                          class="p-2 rounded-xl items-center flex text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none cursor-pointer transition-all scale-100 hover:scale-105">
                          <span class="material-symbols-outlined me-2">
                            {{ item.icon }}
                          </span> {{ item.text }}
                        </div>
                      </div>
                    </section>

                  </div>
                </div>

                <div class="rounded-xl">
                  <div class="flex items-center gap-3">
                    <button type="button" @click="addComponentToBody()"
                      class="p-2 rounded-xl items-center flex text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none cursor-pointer transition-all scale-100 hover:scale-105">
                      <span class="material-symbols-outlined me-2">widgets</span> Adicionar componente
                    </button>
                  </div>
                </div>
              </div>

              <div v-else class="flex items-center gap-3">
                <div v-for="(item, i) in section.components" :key="i" @click="openEditor(null, section.label, item)"
                  class="items-center flex p-2 rounded-xl text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 focus:outline-none cursor-pointer transition-all scale-100 hover:scale-105">
                  <span class="material-symbols-outlined me-2">{{ item.icon }}</span> {{ item.text }}
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>
    </div>
  </div>

  <!-- Painel lateral -->
  <Transition name="fade">
    <div v-if="selectedComponent"
      class="fixed top-0 right-0 w-[45rem] h-full bg-white rounded-s-xl shadow-2xl z-50 flex flex-col">
      <button @click="closeEditor" class="text-gray-700 hover:text-gray-800 absolute top-1 -left-12 
        bg-white hover:scale-110 transition-all rounded-full p-2 m-0 flex items-center shadow
        cursor-pointer">
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="flex justify-between items-center p-4 border-b border-gray-200">
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

      </div>
      <div class="p-4 flex-1 overflow-y-auto">
        <!-- Aqui vai o conteúdo editável -->
        <component :is="componentMap[selectedComponent.item.componentName]" v-if="selectedComponent"
          v-model="selectedComponent.item.data" />
      </div>
      <div class="p-4 border-t border-gray-200 flex justify-end gap-2">
        <button @click="closeEditor" class="px-4 py-2 rounded-lg border">Cancelar</button>
        <button @click="closeEditor" class="px-4 py-2 rounded-lg bg-gray-600 text-white">Salvar</button>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { AdminDragDropImage, AdminInputText, AdminSeoHtmlAtrrsEditor, AdminSeoMetaDescricaoEditor, AdminSeoMetaLinkEditor, AdminSeoMetaTituloEditor } from '#components';

definePageMeta({
  layout: 'admin',
})

const page = reactive(
  {
    name: 'pagina_principal',
    display_name: 'Página Principal',
    route: '/',
    date: '10/06/2025'
  }
)

const componentMap = {
  'meta-title': AdminSeoMetaTituloEditor,
  'meta-link': AdminSeoMetaLinkEditor,
  'meta-description': AdminSeoMetaDescricaoEditor,
  'html-attrs': AdminSeoHtmlAtrrsEditor,
  'input-text': AdminInputText,
  'drag-drop-image': AdminDragDropImage
}


const pageSections = ref([
  {
    label: 'SEO',
    type: 'seo',
    components: [
      { icon: 'page_header', text: 'Meta Título', componentName: 'meta-title',
        data: {
          "titulo": "Título SEO da Página de Teste"
        }
       },
      {
        icon: 'add_link', text: 'Meta Link', componentName: 'meta-link', data:
          [
            { "rel": "canonical", "href": "https://globalplastic.com.br/pagina-publica-teste" },
            { "rel": "icon", "type": "image/png", "href": "/logo_global.svg" }
          ]
      },
      {
        icon: 'edit_note', text: 'Meta Descrição', componentName: 'meta-description', data:
          [
            { "name": "description", "content": "Descrição SEO desta página." },
            { "name": "keywords", "content": "teste, página, SEO" },
            { "property": "og:title", "content": "Título OG da Página" },
            { "property": "og:description", "content": "Descrição OG para redes sociais" },
            { "property": "og:image", "content": "https://globalplastic.com.br/imagens/og-image.jpg" },
            { "property": "og:url", "content": "https://globalplastic.com.br/pagina-publica-teste" },
            { "property": "og:locale", "content": "pt_BR" },
            { "name": "twitter:title", "content": "Título Twitter" },
            { "name": "twitter:description", "content": "Descrição Twitter" },
            { "name": "twitter:image", "content": "https://globalplastic.com.br/imagens/twitter-image.jpg" },
            { "name": "twitter:card", "content": "summary_large_image" },
            { "name": "theme-color", "content": "#004080" }
          ]
      },
      {
        icon: 'html', text: 'Atributo HTML', componentName: 'html-attrs',
        data: {"lang": "pt-BR"}
      }
    ]
  },
  {
    label: 'Body',
    type: 'body',
    components: [
      {
        id: 1,
        label: 'Hero',
        name: 'hero',
        items: [
          { icon: 'page_header', text: 'Título', componentName: 'input-text', data: {
              label: 'Título',
              value: 'Título de teste'
            } 
          },
          { icon: 'subheader', text: 'Subtítulo', componentName: 'input-text', data: {
              label: 'Subtítulo',
              value: 'Subtítulo de teste'
            }
          },
          { icon: 'image', text: 'Imagem', componentName: 'drag-drop-image', data: {
              label: 'Imagem',
              value: null
            }
          },
          { icon: 'link', text: 'URL do botão', componentName: 'input-text', data: {
              label: 'Url do botão',
              value: '/produtos/construcao-civil/teste'
            }
          }
        ]
      },
      {
        id: 2,
        label: 'Galeria de imagens',
        name: 'galeria_de_imagens',
        items: [
          { icon: 'slideshow', text: 'Slides' }
        ]
      },
      {
        id: 3,
        label: 'Galeria de imagens',
        name: 'galeria_de_imagens',
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


function addComponentToBody() {
  pageSections.value.find(s => s.type === 'body')?.components.push({
    id: Date.now(),
    label: 'Novo Componente',
    name: 'novo_componente',
    items: []
  })
}

</script>