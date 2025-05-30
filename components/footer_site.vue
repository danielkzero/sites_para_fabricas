<template>
  <div class="m-10 md:hidden items-center">
        <img src="/globinho.svg" alt="Logo" class="h-20 mb-2 flipH mx-auto" />
        <div>
            <p class="text-center">© 2025 <img src="/globalplastic.svg" alt="Logo" class="h-3 inline mb-1" />.
                <br />
                Todos os direitos reservados.
            </p>
            <a href="https://hydradigital.com.br"
                class="flex items-center space-x-2 hover:text-rose-900 transition-colors mx-auto mt-6" target="_blank">
                <div class="flex items-center space-x-2 mx-auto">
                    <img src="/logo-hydra.png" alt="Hydra Digital" class="h-8" />
                    <span class="text-[0.6rem]">
                        Desenvolvido por <strong>Hydra Digital</strong><br />
                        <span>Daniel Ramos</span>
                    </span>
                </div>
            </a>
        </div>
    </div>
    <div class="max-w-7xl mx-auto my-10 hidden md:block">
        <div class="flex justify-between gap-10">
            <aside>
                <img src="/globinho.svg" alt="Logo" class="h-20 mb-2 flipH" />
                <div>
                    <p>© 2025 <img src="/globalplastic.svg" alt="Logo" class="h-3 inline mb-1" />. <br />
                        Todos os direitos reservados.</p>
                    <a href="https://hydradigital.com.br"
                        class="flex items-center space-x-2 hover:text-rose-900 transition-colors  mt-6" target="_blank">
                        <img src="/logo-hydra.png" alt="Hydra Digital" class="h-8" />
                        <span class="text-[0.6rem]">
                            Desenvolvido por <strong>Hydra Digital</strong><br />
                            <span>Daniel Ramos</span>
                        </span>
                    </a>
                </div>
            </aside>
            <template v-for="item in footerMenu" :key="item.name">
                <template v-if="item.name === 'Produtos'">
                    <nav v-for="(subitem, index) in item.items" :key="index" class="space-y-1">
                        <a href="#"
                            class="inline-block mb-2 text-xl font-semibold text-rose-900 hover:text-rose-800 transition-colors">
                            {{ subitem.name }}
                        </a>
                        <ul class="space-y-1 text-gray-700">
                            <li v-for="(submenu, subindex) in subitem.items.slice(0, 4)" :key="subindex"
                                class="py-1 text-gray-700 hover:text-rose-800 cursor-pointer transition-colors hover:underline">
                                <NuxtLink :to="`/categorias/${submenu.tag}`">{{ submenu.name }}</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                    <form>
                        <h6
                            class="footer-title inline-block mb-2 text-xl font-semibold text-rose-900 hover:text-rose-800 transition-colors">
                            Informativos</h6>
                        <fieldset class="w-80">
                            <label class="inline-block my-2 text-gray-700">Cadastre seu e-mail</label>
                            <div
                                class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset- has-[input:focus-within]:outline-rose-500">
                                <input type="text" placeholder="username@site.com"
                                    class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                <button class="btn btn-primary join-item pe-3">Inscreve-se</button>
                            </div>
                        </fieldset>
                    </form>
                </template>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { menu } from '~/data/menu'
const footerMenu = menu
</script>

<style scoped>
.flipH {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";
}
</style>