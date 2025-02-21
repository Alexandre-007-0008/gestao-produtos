// export async function GET(req, res) {
//     try{
//         const resultado = await Produto.aggregate([
//             { $count: 'quantidade' }
//         ]);
        
//         console.log ('Resultado:', resultado);
//         res.status(200).send(resultado)
//     } catch (error) {
//         console.error('Erro na agregação:', error);
//         res.status(500).send(error)
//     }
// }


import Produto from '@/db/models/produto'

export async function GET() {
    const produtos = await Produto.aggregate([
        { $count: 'total' }
    ])

    return Response.json(produtos)
}
