const { toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

return function render(_ctx, _cache) {
  const _component_NuxtLink = _resolveComponent("NuxtLink")

  return (_openBlock(), _createElementBlock("section", { class: "py-16 bg-white" }, [
    _createElementVNode("div", { class: "max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-x-6" }, [
      _createElementVNode("div", { class: "md:w-1/2 mb-8 md:mb-0" }, [
        _createElementVNode("h2", { class: "text-3xl font-bold text-rose-800 mb-4" }, _toDisplayString(_ctx.dados.titulo), 1 /* TEXT */),
        _createElementVNode("p", { class: "text-gray-700 text-lg leading-relaxed" }, _toDisplayString(_ctx.dados.descricao), 1 /* TEXT */),
        _createElementVNode("span", { class: "mt-4 bg-rose-700 text-white px-6 py-2 text-lg rounded hover:bg-rose-900 inline-block" }, [
          _createVNode(_component_NuxtLink, {
            to: _ctx.dados.link.to
          }, {
            default: _withCtx(() => [
              _createTextVNode(_toDisplayString(_ctx.dados.link.text || ''), 1 /* TEXT */)
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["to"])
        ])
      ]),
      _createElementVNode("div", { class: "md:w-1/2 text-center" }, [
        _createElementVNode("img", {
          src: _ctx.dados.imagem,
          class: "mx-auto max-h-[300px]"
        }, null, 8 /* PROPS */, ["src"])
      ])
    ])
  ]))
}