export async function generateMetadata({ params, searchParams }, parent) {
    const { slug } = await params
    
    // Resgatar o conteúdo
  
    return {
      title: `Produto: ${slug}`,
      description: `Página sobre ${slug}`
    }
  }
    // const { cadastro } = useUser()
  
    async function handleSubmit(event) {
      event.preventDefault() //previne o recarregamento da página 
      const formData = new FormData(event.currentTarget)
      const cadastroUsuario = formData.get('cadastro')
   
      try {
        await login(loginUsuario, senhaUsuario)
      } catch(e) {
        console.log("Erro de cadastro", e)
        alert("Cadastro inválido")
      }}


  export default async function Page({ params }) {
    const { slug } = await params
  
    return (
      <>
        Produto: { slug }
        <form>
          <input type="novo produto" name="login" placeholder="novo produto" required autoFocus />
          <button type="submit">Cadastrar produto</button>
        </form>  
      </>
    )
  }
  