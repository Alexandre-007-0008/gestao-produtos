
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
const redis = require ('redis')

const client = redis.createClient({ username: 'default',
         password: '8BDhEOLJqtseB0waMB9pYUycP371e5OC',
         socket: {
             host: 'redis-17778.c266.us-east-1-3.ec2.redns.redis-cloud.com',
             port: 17778
}});

client.on('error', err => console.log('Redis Client Error', err));

async function teste() {
    await client.connect();

    const produtos = [{id: 1, nome: "LED", qtde: 20}, {id: 2, nome: "resistor", qtde: 5}]
    // await client.del('produtos') seria pra deletar um cache, porém talvez não precise, pois, quando dá um .set ele já sobrescreve. 
    await client.set('produtos', JSON.stringify(produtos), {EX: 300});
    return JSON.parse(await client.get('produtos'));
}

teste().then ((res) => {
    console.log('produtos: ', res)

    setTimeout(async function(){
        console.log("produtos depois de 300 segundos: ", JSON.parse(await client.get('produtos')))
    }, 3000)
})

// o get, push e post, já tem aqui 