
import { PRODUTOS } from " /led/src/app/api/v1/produtos/[id]/route"

export async function GET(request, { params }) {
    const { id } = await params
    const esporte = PRODUTOS.find((e) => e.id == id)
    
    if (!produto) {
        return Response.error()
    }

    return Response.json(produto)
}
  