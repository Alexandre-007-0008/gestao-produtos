// import { enviarEmail } from '@/app/lib/email' // falta ajeitar isso aqui
// import Usuario from '@/app/db/models/usuario'
// import bcrypt from 'bcrypt'

// export async function POST(req: any) {
//     try {
//         const { token, senha } = await req.json()

//         const user = await Usuario.findOne({ token_nova_senha: token })

//         if (!user) {
//             throw 'Usuário não encontrado'
//         }

//         user.senha = await bcrypt.hash(senha, 10)
//         user.save()

//         // Enviar e-mail
//         await enviarEmail(
//             "xande@teste.com.br",
//             "Você gerou uma nova senha!",
//             `Opa, você gerou uma nova senha!`,
//             `
//                 <h1>Pediu nova senha?</h1>
//                 <p>Deu bom!</p>
//             `
//         )

//         return Response.json({
//             mensagem: "Senha alterada com sucesso"
//         })
//     } catch (error: any) {
//         console.log("Erro", error)
//         return Response.json({
//                 error: error
//             },
//             { status: 400 }
//         )
//     }
// }
'use client'
import { FormEvent } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Pagina() {

  const router = useRouter()

  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const senha = formData.get('senha')
    const confirmacao_senha = formData.get('confirmacao_senha')

    if(senha != confirmacao_senha) {
      alert("As senhas não conferem")
      return
    }
 
    try {
      const response = await axios.post("/api/v1/auth/nova_senha", {
        token: token,
        senha: senha
      })
      console.log('response', response)

      alert("Você alterou sua senha!")
      router.push('/login')
    } catch(e) {
      console.log("Erro de login", e)
      alert("Ocorreu um erro ao gerar sua nova senha")
    }
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="password" name="senha" placeholder="Sua nova senha" required autoFocus />
      <input type="password" name="confirmacao_senha" placeholder="Confirme sua senha" required/>
      <button type="submit">Alterar senha</button>
    </form>
  )
}