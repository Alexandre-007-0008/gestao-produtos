export async function GET(req, res) {
    try{
        const resultado = await Produto.aggregate([
            { $group: { _id: null, valorTotal: { $sum: "$valor"} } }
        ]);
        console.log ('Resultado:', resultado);
        res.status(200).send(resultado)
    } catch (error) {
        console.error('Erro na agregação:', error);
        res.status(500).send(error)
    }
}
