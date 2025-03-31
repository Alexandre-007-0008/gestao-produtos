
export type UserType = {
    login: string
    senha?: string
}

export type ProdutoType = {
    _id: string  //perguntar a Luciano o motivo disso(reclamou do number e aceitou undefined)
    name: string
    valor?: number
    qtde?: number
    img: string
    // description: string dá pra usar isso(descrição do produto)
}

// number |