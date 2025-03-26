'use client'

import { useEffect } from "react"
import { useUser } from "../app/Contexts/UserContext"

export default function Nav() {
  const { user, logout } = useUser()

  useEffect(() => {
    console.log('nav user', user)
  }, [user])

  return (
    <nav>
      <a href='/'>Início</a>

      {user &&
        <>
          | <button onClick={logout}>Sair</button>
        </>
      }

      {user &&
          <p>Olá, usuário {user.id}</p>
      }
    </nav>
  )
}