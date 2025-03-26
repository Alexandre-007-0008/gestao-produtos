
'use client'

import axios, { AxiosResponse } from 'axios'
import { ProdutoType } from '../../types'
// import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import '../../globals.css' //dando erro aqui

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

  const [count, setCount] = useState(0)

  // Função para aumentar o número
  const increase = () => {
    setCount(count + 1) // Incrementa 1 ao número
  }

  // Função para diminuir o número
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1) // Decrementa 1 ao número, mas não permite valores negativos
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
        <img src="https://m.media-amazon.com/images/I/61OeEf3jq+L._AC_UL320_.jpg"/>
        <p>R$ 322,60</p>
        <p>Freenove Placa de desenvolvimento BBC Micro:bit V2, blocos e código MicroPython, tutorial detalhado, projetos de exemplo, microbit</p>
        <p><strong>Quantidade:</strong>{qtde}</p>

        <div className="counter-container">
            {/* Botão de decremento */}
            <button onClick={decrease} className="counter-button">-</button>

            {/* Display do número */}
            <div className="counter-display">
              {count}
            </div>

            {/* Botão de incremento */}
            <button onClick={increase} className="counter-button">+</button>
          </div>
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



{/* <div className="top-bar">
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
<img src="https://m.media-amazon.com/images/I/61OeEf3jq+L._AC_UL320_.jpg"/>
<p>R$ 322,60</p>
<p>Freenove Placa de desenvolvimento BBC Micro:bit V2, blocos e código MicroPython, tutorial detalhado, projetos de exemplo, microbit</p>
<p><strong>Qauntidade:</strong>{qtde}</p>
</div> */}