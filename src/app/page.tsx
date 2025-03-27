
'use client'

import axios, { AxiosResponse } from 'axios'
import { ProdutoType } from './types'
// import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import "./globals.css"


export default function Home() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [qtde, setQtde] = useState<number>(0)
  

  const carregarDados = async () => {
    axios.get('http://localhost:27017/api/v1/produtos').then((resp: AxiosResponse) => setProdutos(resp.data))
    axios.get('http://localhost:27017/api/v1/relatorios/quantidade').then((resp: AxiosResponse) => {
      setQtde(resp.data[0] ? resp.data[0].total : 0)
    })

  }

  useEffect(() => {
    carregarDados()
  }, [])

  const removerProduto = async (id: string) => {
    await axios.delete(`http://localhost:27017/api/v1/produtos/${id}`)
    carregarDados()
  }

  return (
    <>
      <head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Electronic's Place</title>
      </head>
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
          <div className="search-container">
              <input type="text" placeholder="Pesquisar..."/>
              <p><strong>Quantidade:</strong>{qtde}</p>
          </div>  
      <table>
        <tbody>
          { produtos.map((p: ProdutoType) =>
            <tr key={p._id}>
              <td><a href={`/produtos/${p._id}`}>{p.nome}</a></td>
              <td>{p.valor}</td>
              <td>{p.estoque}</td>
              <td>
                <a href={`/produtos/${p._id}/editar`}>Editar</a>
                | 
                <button onClick={() => removerProduto(p._id!)}>Remover</button>
              </td>
            </tr>
          ) }
        </tbody>
      </table>
    </>
  )
}

