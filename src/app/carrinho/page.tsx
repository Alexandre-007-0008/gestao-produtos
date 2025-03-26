'use client'
import { FormEvent } from 'react'
import { useUser } from '../Contexts/UserContext'

import { signIn } from "next-auth/react"
import Link from 'next/link'
 
export default function Pagina() {

  const { login } = useUser() || {}

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault() //previne o recarregamento da página 
    const formData = new FormData(event.currentTarget)
    const loginUsuario = formData.get('login') as string || null
    const senhaUsuario = formData.get('senha') as string || null

    if (!loginUsuario || !senhaUsuario) {
      alert("Por favor, preencha os campos de login e senha.")
      return
    }
 
    try {
      await login(loginUsuario, senhaUsuario)
    } catch(e) {
      console.log("Erro de login", e)
      alert("Usuário inválido")
    }
  }
 
  return (
    <>
            <div className="top-bar">
                <div className="logo">Electronic's Place</div>
                <div className="user-area">
                    <a  href="/carrinho">
                        <img className="button-img button-img2"/>
                    </a>
                    <a href="/login">
                        <img className="button-img button-img1"/>
                    </a>
                </div>
            </div>
            <div className="center">
                <p>Você ainda não adicionou nenhum produto ao seu carrinho...</p>
                <a href="/produtos">Comece aqui</a>
            </div>
    </>
    )
}