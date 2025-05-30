export const menu = [
    {
        name: 'Produtos',
        icon: 'bx bx-box',
        tag: 'produtos',
        items: [
            {
                name: 'Construção civil',
                icon: 'bx bx-building',
                tag: 'construcao-civil',
                class: 'text-orange-700',
                items: [
                    { name: 'Torneiras', tag: 'torneiras' },
                    { name: 'Válvulas e Boias', tag: 'valvulas-boias' },
                    { name: 'Sifões e Tubos', tag: 'sifoes-tubos' },
                    { name: 'Ralos e Caixas', tag: 'ralos-caixas' },
                    { name: 'Banheiro e Lavanderia', tag: 'banheiro-lavanderia' },
                    { name: 'Duchas', tag: 'duchas' },
                    { name: 'Mangueiras', tag: 'mangueiras' },
                    { name: 'Tubo e Conexões', tag: 'tubo-conexoes' },
                    { name: 'Fixadores', tag: 'fixadores' },
                    { name: 'Organização e Pintura', tag: 'organizacao-pintura' }
                ],
                open: false
            },
            {
                name: 'Elétricos',
                icon: 'bx bx-cart',
                tag: 'eletricos',
                class: 'text-blue-700',
                items: [
                    { name: 'Quadros de disjuntores', tag: 'quadros-disjuntores' },
                    { name: 'Resistências', tag: 'resistencias' },
                    { name: 'Plafoniers e Spots', tag: 'plafoniers-spots' },
                    { name: 'Isoladores e Ponteiras', tag: 'isoladores-ponteiras' },
                    { name: 'Grade de ventilação', tag: 'grade-ventilacao' },
                    { name: 'Caixas de luz e passagem', tag: 'caixas-luz-passagem' },
                    { name: 'Corrugado', tag: 'corrugado' }
                ],
                open: false
            },
            {
                name: 'Epi\'s',
                icon: 'bx bx-shield',
                tag: 'equipamentos-protecao',
                class: 'text-green-700',
                items: [
                    { name: 'Óculos de proteção', tag: 'oculos-protecao' },
                    { name: 'Máscara de solda', tag: 'mascara-solda' },
                    { name: 'Protetor facial', tag: 'protetor-facial' },
                    { name: 'Protetor auricular', tag: 'protetor-auricular' }
                ],
                open: false
            }
        ],
        open: false,
        apresentacaohtml: `
            <p class="text-gray-600 text-1xl mb-4">
                Organização e resistência no seu banheiro.
            </p>
            <img src="/armario.jpg" alt="Armário" class="mb-4">
            <button
                class="border border-red-600 text-red-600 p-2 text-xl rounded-xl hover:bg-rose-50 w-full active:bg-rose-500 active:text-white transition-colors cursor-pointer">
                Saiba mais
            </button>
        `
    },
    {
        name: 'Seja um Revendedor',
        icon: 'bx bx-store',
        open: false
    },
    {
        name: 'Downloads',
        icon: 'bx bx-download',
        open: false
    },
    {
        name: 'Contato',
        icon: 'bx bx-envelope',
        open: false
    }
]
