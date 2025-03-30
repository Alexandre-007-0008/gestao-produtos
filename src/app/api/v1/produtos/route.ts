export const PRODUTOS = [
    {
      id: 1, qtde: 20, name: 'LED', slug: 'led'
    }, //o id deveria ser "_id"?
    {
      id: 2, qtde: 15, name: 'Multímetro', slug: 'multímetro',
    },
    {
      id: 3, qtde: 10, name: 'Osciloscópio ', slug: 'osciloscópio ',
    },
    {
      id: 4, qtde: 5, name: 'Micro:Bit', slug: 'micro:bit',
    },
    {
      id: 5, qtde: 25, name: 'Resistor', slug: 'resitor',
    },
    {
      id: 6, qtde: 10, name: 'Gerador de Funções', slug: 'gerador de funções'
    } 
  ]
   //aqui implementar as requisições http
  export async function GET() {
    return Response.json(PRODUTOS)
  }

  export async function POST() {
    return Response.json(PRODUTOS)
  }
  
  export async function DELETE() {
    return Response.json(PRODUTOS)
  }
  
  
  