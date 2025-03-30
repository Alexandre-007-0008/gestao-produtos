
'use client'

import axios from 'axios'
import { ProdutoType } from './types'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

import "./globals.css"


export default function Home() {
  const [produtos, setProdutos] = useState<ProdutoType[]>([])
  const [qtde, setQtde] = useState<number>(0)
  

  const carregarDados = async () => {
    axios.get<ProdutoType[]>('http://localhost:3000/api/v1/produtos').then((resp) => setProdutos(resp.data))
    axios.get<{ total: number }[]>('http://localhost:3000/api/v1/relatorios/quantidade').then((resp) => {
      setQtde(resp.data[0] ? resp.data[0].total : 0)
    })
  }

  useEffect(() => {
    carregarDados()
  }, [])

  const removerProduto = async (_id: number | string) => {
    await axios.delete(`http://localhost:3000/api/v1/produtos/${_id}`);
    carregarDados();
    redirect('/produtos'); // Redireciona para a página de produtos após a remoção
  };

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
          <div className="search-container">
              <input type="text" placeholder="Pesquisar..."/>
              {/* <p><strong>Quantidade:</strong>{qtde}</p> */}
          </div>  
      <table>
        <tbody className="lista">
          {produtos.map((p: ProdutoType, index) =>
            <tr key={p._id  || index}>
      
              <td><a href={`/api/v1/produtos/${p._id}`}>{p.name}</a></td>
              <td>{p.valor}</td>
              <td><p>Quantidade: {p.qtde}</p></td>
              <td className="editar-remover">
                <p><a className="editar-remover as" href={`/produtos/${p._id}/editar`}>Editar</a></p>
                |
                <button className="editar-remover button" onClick={() => removerProduto(p._id!)}>Remover</button>
              </td>
            </tr>
            ) 
          }
        </tbody>
      </table>
    </>
  )
}
