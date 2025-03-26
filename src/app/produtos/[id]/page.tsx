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

export async function generateMetadata({ params, searchParams }: any, parent: any) {
    const { slug } = await params

    const produto = await Produto.findOne({ slug })
  
    return {
      title: produto.nome,
      description: `Página do produto ${produto.nome}`
    }
  }
  
  export default async function Page({ params }: any) : Promise<ReactNode> {
    const { slug } = await params
  
    const produto = await Produto.findOne({ slug })

    return (
      <>
        <h1>{ produto.nome }</h1>
        <p>Valor: R$ {produto.valor}</p>
        <p>Estoque: {produto.estoque}</p>
      </>
    )
  }