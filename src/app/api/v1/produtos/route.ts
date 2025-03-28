export const PRODUTOS = [
    {
      id: 1, qtde: 10, name: 'LED', slug: 'led'
    },
    {
      id: 2, qtde: 5, name: 'Multímetro', slug: 'multímetro',
    }
  ]
   //aqui implementar as requisições http
  export async function GET() {
    return Response.json(PRODUTOS)
  }

  export async function POST() {
    return Response.json(PRODUTOS)
  }  
  
  