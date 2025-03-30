// export async function generateMetadata({ params, searchParams }, parent) {
//     const { slug } = await params
    
//     // Resgatar o conteúdo
  
//     return {
//       title: `Produto: ${slug}`,
//       description: `Página sobre ${slug}`
//     }
//   }
//     // const { cadastro } = useUser()
  
//     async function handleSubmit(event) {
//       event.preventDefault() //previne o recarregamento da página 
//       const formData = new FormData(event.currentTarget)
//       const cadastroUsuario = formData.get('cadastro')
   
//       try {
//         await login(loginUsuario, senhaUsuario)
//       } catch(e) {
//         console.log("Erro de cadastro", e)
//         alert("Cadastro inválido")
//       }}


//   export default async function Page({ params }) {
//     const { slug } = await params
  
//     return (
//       <>
//         <div class="top-bar">
//         <div class="logo">Electronic's Place</div>
//         <div class="user-area">
//             <a  href="sigin.html">
//                 <img class="button-img button-img2"/>
//             </a>
//             <a href="sigin.html">
//                 <img class="button-img button-img1"/>
//             </a> 
//         </div>
//     </div>
//     <div class="search-container">
//         <input type="text" placeholder="Pesquisar..."/>
//     </div>

//     <div>
//         <a href="produto1.html">
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTYASyjkobHJGukdlKZLM-GJQTlng--ZDVg&s"/>
//         </a>

//         <a href="produto2.html">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTYASyjkobHJGukdlKZLM-GJQTlng--ZDVg&s"/>

//         </a>

//         <a href="produto3.html">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWlLOhT0N6SzVEF0nHB83pwnHYwwM-kaUjqQ&s"/>
//         </a>

//         <a href="produto4.html">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8I0nJE4JpaIo4xuxhfl76a7ZJKhdGrb48w&s"/>
//         </a>

//         <a href="produto5.html">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTYASyjkobHJGukdlKZLM-GJQTlng--ZDVg&s"/>
        
//         </a>

//         <a href="produto6.html">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTYASyjkobHJGukdlKZLM-GJQTlng--ZDVg&s"/>
//         </a>
//     </div>
//         Produto: { slug }
//         <form>
//           <input type="novo produto" name="login" placeholder="novo produto" required autoFocus />
//           <button type="submit">Cadastrar produto</button>
//         </form>  
//       </>
//     )
//   }
  
import Produto from '@/app/db/models/produto'
import { ReactNode } from 'react'
import mongoose from 'mongoose'
// interface Params {
//   slug: string;
// }

// ({ params, searchParams }: any, parent: any)
export async function generateMetadata({ params }: { params: { id: string } }) {
      const { id } = await params
      const produto = await Produto.findById(id)

      if (!produto) {
        return {
          title: "Produto não encontrado",
          description: "Este produto não existe.",
        };
      }
    
      return {
        title: produto.name,
        description: `Página do produto ${produto.name}`
      }
    }
  
  export default async function Page({ params }: any) : Promise<ReactNode> {
    const { id } = await params
    const produto = await Produto.findById( id ) 

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return <div>ID inválido</div>; // Retorna um erro amigável caso o ID seja inválido
  }

    if (!produto) { // Verifique se o produto é null antes de renderizar
      return <div>Carregando produto...</div>; // Mostra uma mensagem de carregamento ou outro indicador
    }
    return (
      <>
          <div className="top-bar">
              <div className="logo"><a href="/">Electronic's Place</a></div>
              <div className="user-area">
                  <a  href="/carrinho">
                      <img className="button-img button-img2"/>
                  </a>
                  <a href="/login">
                      <img className="button-img button-img1"/>
                  </a>
              </div>
          </div>
        <h1>{ produto.name }</h1>
        <p>Valor: R$ {produto.valor}</p>
        <p>Estoque: {produto.qtde}</p>
      </>
    )
  }