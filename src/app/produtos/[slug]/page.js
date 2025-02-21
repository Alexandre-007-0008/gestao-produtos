export async function generateMetadata({ params, searchParams }, parent) {
    const { slug } = await params
    
    // Resgatar o conteúdo
  
    return {
      title: resistor,
      description: `Página sobre ${resistor}`
    }
  }
  
  export default async function Page({ params }) {
    const { resistor } = await params
  
    return (
      <>
        Produto: { resistor }
      </>
    )
  }
  