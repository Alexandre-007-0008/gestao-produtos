
export type UserType = {
    login: string
    senha?: string
}

export type ProdutoType = {
    id?: number | string
    nome: string
    valor?: number
    estoque?: number
}