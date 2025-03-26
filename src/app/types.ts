
export type UserType = {
    login: string
    senha?: string
}

export type ProdutoType = {
    _id?: string
    nome: string
    valor?: number
    estoque?: number
}
//passar pra app(pra ficar numa pasta só)