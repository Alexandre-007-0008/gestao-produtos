
// import { PRODUTOS } from " /led/src/app2/api/v1/produtos/route"

// export async function GET(request, { params }) {
//     const { id } = await params
//     const produtos = PRODUTOS.find((e) => e.id == id)
    
//     if (!PRODUTOS) {
//         return Response.error()
//     }

//     return Response.json(PRODUTOS)
// }

//daqui pra baixo tá com cache  
// const redis = require ('redis')

// const client = redis.createClient({ username: 'default',
//          password: '8BDhEOLJqtseB0waMB9pYUycP371e5OC',
//          socket: {
//              host: 'redis-17778.c266.us-east-1-3.ec2.redns.redis-cloud.com',
//              port: 17778
// }});

// client.on('error', err => console.log('Redis Client Error', err));

// async function teste() {
//     await client.connect();

//     const produtos = [{id: 1, nome: "LED", qtde: 10}, {id: 2, nome: "Resistor", qtde: 5}]
//     // await client.del('produtos') seria pra deletar um cache, porém talvez não precise, pois, quando dá um .set ele já sobrescreve. 
//     await client.set('produtos', JSON.stringify(produtos), {EX: 300});
//     return JSON.parse(await client.get('produtos'));
// }

// teste().then ((res) => {
//     console.log('produtos: ', res)

//     setTimeout(async function(){
//         console.log("produtos depois de 3 segundos: ", JSON.parse(await client.get('produtos')))
//     }, 3000)
// })

// o get, push e post, já tem aqui 

import { NextApiRequest, NextApiResponse } from 'next';
import redis from 'redis';

// Criando o cliente Redis
const client = redis.createClient({
    username: 'default',
    password: '8BDhEOLJqtseB0waMB9pYUycP371e5OC',
    socket: {
        host: 'redis-17778.c266.us-east-1-3.ec2.redns.redis-cloud.com',
        port: 17778
    }
});

client.on('error', err => console.log('Redis Client Error', err));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await client.connect();

    if (req.method === 'POST') {
        try {
            const { nome, valor, estoque } = req.body;

            // Recuperando produtos existentes
            const produtosCache = await client.get('produtos');
            let produtos = produtosCache ? JSON.parse(produtosCache) : [];

            // Criando novo produto
            const novoProduto = {
                id: produtos.length + 1,
                nome,
                valor,
                estoque
            };

            // Adicionando ao array e salvando no Redis
            produtos.push(novoProduto);
            await client.set('produtos', JSON.stringify(produtos), { EX: 300 });

            res.status(201).json({ message: 'Produto cadastrado', produto: novoProduto });
        } catch (error) {
            const errMsg = error instanceof Error ? error.message : 'Erro desconhecido';
            res.status(500).json({ message: 'Erro ao salvar produto', error: errMsg });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: 'Método não permitido' });
    }

    await client.quit();
}
