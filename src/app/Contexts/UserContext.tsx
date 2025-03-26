'use client'
<<<<<<< HEAD
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

// Definindo o tipo do usuário
interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user"; // Ajuste conforme seu modelo
}

interface UserContextType {
  user: User | null; // O tipo do usuário, que pode ser `null` inicialmente
  login: (login: string, senha: string) => Promise<void>;
  logout: () => void;
}

// Valor padrão para o contexto
const defaultUserContext: UserContextType = {
  user: null,
  login: async () => {
    throw new Error("login não foi implementado");
  },
  logout: () => {
    throw new Error("logout não foi implementado");
  },
};

// Criando o contexto com valor padrão
const UserContext = createContext<UserContextType>(defaultUserContext);

// Definindo o provedor de contexto
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const router = useRouter();

  // Função de login
  const login = async (login: string, senha: string) => {
    console.log("UserContext login", login, senha);
    try {
      const response = await axios.post("http://localhost:27017/api/v1/auth/login", {
        login: login,
        senha: senha,
      });

      Cookies.set("session", response.data.token);
      setUser(obterUsuarioToken(response.data.token));
      router.push("/");
    } catch (e) {
      router.push("/login");
    }
  };

  // Função de logout
  const logout = () => {
    Cookies.remove("session");
    setUser(null);
    router.push("/");
  };

  // Função para obter o usuário a partir do token
  const obterUsuarioToken = (token: string): User => {
    const jwt: any = jwtDecode(token);
    return {
      id: jwt.id, // Ajuste conforme o formato do JWT
      name: jwt.name,
      email: jwt.email,
      role: jwt.role, // Ajuste conforme o formato do JWT
    };
  };

  // Efeito para carregar o usuário quando o token existir
  useEffect(() => {
    const token = Cookies.get("session");
    if (token) {
      setUser(obterUsuarioToken(token));
      setUpdatedAt(new Date());
    }
  }, []);

  // Efeito para log de atualizações
  useEffect(() => {
    console.debug("UserContext user", user);
    console.debug("UserContext updatedAt", updatedAt);
  }, [user, updatedAt]);

  // Retorno do provedor com o valor do contexto
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para acessar o contexto
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};
=======

import { createContext, useContext, useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { jwtDecode } from "jwt-decode"
const UserContext = createContext<any>(null)
export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState()
  const [updatedAt, setUpdatedAt] = useState<Date>()
  const router = useRouter()

  const login = async (login: string, senha: string) => {
    console.log('UserContext login', login, senha)

    try {
        const response = await axios.post('http://localhost:27017/api/v1/auth/login', {
            login: login,
            senha: senha
        })

        Cookies.set('session', response.data.token)
        router.push('/')

        setUser(obterUsuarioToken(response.data.token))
    } catch(e) {
      router.push('/login')
    }
  }

  const logout = () => {
    Cookies.remove('session')
    setUser(undefined)
    router.push('/')
  }

  const obterUsuarioToken = (token: string) => {
    Cookies.set('session', token)

    const jwt: any = jwtDecode(token)
    return jwt.user
  }

  useEffect(() => {
    const token = Cookies.get('session')
    if (!user && token) {
        setUser(obterUsuarioToken(token))
        setUpdatedAt(new Date())
    }
  }, [user])

  useEffect(() => {
    console.debug('UserContext user', user)
    console.debug('UserContext updatedAt', updatedAt)
  }, [user, updatedAt])

  return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	)
}
>>>>>>> 9ec52dba9bf82f30dbd1ecb27ba1e35d11e25b15
