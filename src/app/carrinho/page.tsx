// 'use client'
// import { FormEvent } from 'react'
// import { useUser } from '../Contexts/UserContext'
 
// export default function Pagina() {

//   const { login } = useUser()

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
 
//     const formData = new FormData(event.currentTarget)
//     const loginUsuario = formData.get('login')
//     const senhaUsuario = formData.get('senha')
 
//     await login(loginUsuario, senhaUsuario)
//   }
 
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="login" name="login" placeholder="login" required autoFocus />
//       <input type="senha" name="senha" placeholder="senha" required />
//       <button type="submit">Login</button>
//     </form>
//   )
// }

// import { useUser } from '../Contexts/UserContext'

// import { signIn } from "next-auth/react"
// import Link from 'next/link'

// const handleSubmit = ()
// export default function Pagina() {
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="login" name="login" placeholder="login" required autoFocus />
//       <input type="password" name="senha" placeholder="senha" required />
//       <button type="submit">Login</button>

//       <br/>

//       <Link href='/auth/recuperar_senha'>Recuperar senha</Link>
//       <hr/>
//       <p>Ou</p>
//       <button type="button" onClick={() => signIn("google", { redirectTo: "/" })}>Faça login com o Google</button>
//     </form>
//   )
// }


'use client'
import { FormEvent } from 'react'
import { useUser } from '../Contexts/UserContext'
import '../globals.css';
import { signIn } from "next-auth/react"
import Link from 'next/link'
 
export default function Pagina() {

  const { login } = useUser() || {}


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault() //previne o recarregamento da página 
    const formData = new FormData(event.currentTarget)
    const loginUsuario = formData.get('login')
    const senhaUsuario = formData.get('senha')
 
    try {
      await login(loginUsuario, senhaUsuario)
    } catch(e) {
      console.log("Erro de login", e)
      alert("Usuário inválido")
    }
  }
 
  return (
    <>
      <html lang="pt-br"/>
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Electronic's Place</title>
      </head>
      <body>
          <div className="top-bar">
              <div className="logo">Electronic's Place</div>
              <div className="user-area">
                  <a href="/login">
                    <img className="button-img button-img1"/>
                  </a>
              </div>
          </div>
          <div className="search-container">
            <input type="text" placeholder="Pesquisar..."/>
          </div>

          <div className="test-car">
            <p>Você ainda não adicionou nenhum produto ao seu carrinho...</p>
            <a href="/produtos">Comece aqui</a>
          </div>
      </body>
    </>
  )
}