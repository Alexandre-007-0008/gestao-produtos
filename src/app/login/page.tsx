// 'use client'
// import { FormEvent } from 'react'
// import { useUser } from '../../app/Contexts/UserContext'

// import { signIn } from "next-auth/react"
// import Link from 'next/link'


 
// export default function Pagina() {

//   const { login } = useUser() || {}

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault() //previne o recarregamento da página 
//     const formData = new FormData(event.currentTarget)
//     const loginUsuario = formData.get('login')
//     const senhaUsuario = formData.get('password')
 
//     try {
//       await login(loginUsuario, senhaUsuario)
//     } catch(e) {
//       console.log("Erro de login", e)
//       alert("Usuário inválido")
//     }
//   }
 
//   return (
//     <>
//       <div className="top-bar">
//                 <div className="logo">Electronic's Place</div>
//                 <div className="user-area">
//                     <a  href="/carrinho">
//                         <img className="button-img button-img2"/>
//                     </a>
//                     <a href="/login">
//                         <img className="button-img button-img1"/>
//                     </a>
//                 </div>
//         </div>
//       <form onSubmit={handleSubmit}>
//           <div id="login-container">
//               <h2 className="h3 mb-3 fw-normal text-center">Please sign in</h2>
      
//               <div className="form-floating mb-2">
//                   <input type="login" className="form-control" id="floatingInput" name="login" placeholder="" required autoFocus/>
//                   <label htmlFor="floatingInput">Login</label>
//               </div>
      
//               <div className="form-floating mb-2">
//                   <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="" required/>
//                   <label htmlFor="floatingPassword">Password</label>
//               </div>
//               <div className="form-check text-start my-2">
//                 <Link href='/auth/recuperar_senha'>Recuperar senha</Link>
//               </div>
//           </div>    
//         <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
//         <button className="btn btn-primary w-100 py-2" type="button" onClick={() => signIn("google", { redirectTo: "/" })}>Faça login com o Google</button>
//       </form>
//     </>
//   )
// } 

//segunda versão

// 'use client'

// import { FormEvent } from 'react'
// import { useUser } from '../../app/Contexts/UserContext'
// import { signIn } from "next-auth/react"
// import Link from 'next/link'

// export default function Pagina() {
//   const { login } = useUser()

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault() // Evita reload da página
//     const formData = new FormData(event.currentTarget)
//     const loginUsuario = formData.get('login') as string
//     const senhaUsuario = formData.get('senha') as string

//     if (!loginUsuario || !senhaUsuario) {
//       alert("Preencha todos os campos")
//       return
//     }

//     try {
//       if (!login) {
//         console.error("Erro: função login não encontrada.")
//         return
//       }

//       await login(loginUsuario, senhaUsuario)

//       // Teste também com NextAuth:
//       const result = await signIn("credentials", {
//         redirect: false,
//         login: loginUsuario,
//         password: senhaUsuario
//       })

//       if (result?.error) {
//         console.log("Erro de login:", result.error)
//         alert("Usuário inválido")
//       }
//     } catch (e) {
//       console.log("Erro de login", e)
//       alert("Usuário inválido")
//     }
//   }

//   return (
//     <>
//       <div className="top-bar">
//         <div className="logo">Electronic's Place</div>
//         <div className="user-area">
//           <a href="/carrinho">
//             <img className="button-img button-img2" />
//           </a>
//           <a href="/login">
//             <img className="button-img button-img1" />
//           </a>
//         </div>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div id="login-container">
//           <h2 className="h3 mb-3 fw-normal text-center">Please sign in</h2>

//           <div className="form-floating mb-2">
//             <input type="text" className="form-control" id="floatingInput" name="login" placeholder='' required autoFocus />
//             <label htmlFor="floatingInput">Login</label>
//           </div>

//           <div className="form-floating mb-2">
//             <input type="password" className="form-control" id="floatingPassword" name="senha" placeholder='' required />
//             <label htmlFor="floatingPassword">Password</label>
//           </div>

//           <div className="form-check text-start my-2">
//             <Link href='/auth/recuperar_senha'>Recuperar senha</Link>
//           </div>
//         </div>

//         <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
//         <button className="btn btn-primary w-100 py-2" type="button" onClick={() => signIn("google", { redirectTo: "/" })}>
//           Faça login com o Google
//         </button>
//       </form>
//     </>
//   )
// }


'use client'
import { FormEvent } from 'react'
import { useUser } from '../Contexts/UserContext'
import "../globals.css"
import { signIn } from "next-auth/react"
import Link from 'next/link'
 
export default function Pagina() {

  const { login } = useUser() || {}

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault() // Evita reload da página
    const formData = new FormData(event.currentTarget)
    const loginUsuario = formData.get('login') as string
    const senhaUsuario = formData.get('senha') as string

    if (!loginUsuario || !senhaUsuario) {
      alert("Preencha todos os campos")
      return
    }

    try {
      if (!login) {
        console.error("Erro: função login não encontrada.")
        return
      }

      await login(loginUsuario, senhaUsuario)

      // Teste também com NextAuth:
      const result = await signIn("credentials", {
        redirect: false,
        login: loginUsuario,
        password: senhaUsuario
      })

      if (result?.error) {
        console.log("Erro de login:", result.error)
        alert("Usuário inválido")
      }
    } catch (e) {
      console.log("Erro de login", e)
      alert("Usuário inválido")
    }
  }
 
  return (
    <>
      
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Nova-senha</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"/>
        <div className="top-bar">
            <div className="logo">Electronic's Place</div> {/*Colocar como link pra início */}
            <div className="user-area">
                <a  href="/carrinho">
                    <img className="button-img button-img2"/>
                </a>
                <a href="/login">
                    <img className="button-img button-img1"/>
                </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} id="form">
              <div id="login-container">
                  <h2 className="h3 mb-3 fw-normal text-center">Please sign in</h2>
          
                  <div className="form-floating mb-2">
                      <input type="email" name="login" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                      <label htmlFor="floatingInput">Email address</label>
                  </div>
          
                  <div className="form-floating mb-2">
                      <input type="password"  name="senha" className="form-control" id="floatingPassword" placeholder="Password"/>
                      <label htmlFor="floatingPassword">Password</label>
                  </div>
                  
                  <Link href='/auth/recuperar_senha'>Recuperar senha</Link>
                  <hr/>
                  <p>Ou</p>

                  <button type="button" onClick={() => signIn("google", { redirectTo: "/" })}>Faça login com o Google</button>
                  <br/>
                  <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
              </div>  
         </form>
    </>
  )
}