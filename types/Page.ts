// types/Page.ts
export interface Page {
  id: number
  titulo: string
  slug: string
  categoria: string
  status: 'Publicado' | 'Rascunho' | 'Arquivado' | string
  visualizacao: number
  atualizado_em: Date | string
}