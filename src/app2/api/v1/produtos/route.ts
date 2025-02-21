export const ESPORTES = [
    {
      id: 1, qtde: 10, name: 'Futebol', slug: 'futebol'
    },
    {
      id: 2, qtde: 5, name: 'Vôlei', slug: 'volei',
    }
  ]
  
  export async function GET() {
    return Response.json(ESPORTES)
  }
  