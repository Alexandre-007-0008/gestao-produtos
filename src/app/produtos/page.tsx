// 'use client'
// import axios, { AxiosResponse } from 'axios'
// import {useState, useEffect} from 'react'
// import Link from "next/link"

// interface Produto {
//   name: string
//   slug: string
// }

// // const PRODUTOS = [
// //   {
// //     name: 'Resistor',
// //     slug: 'resistor'
// //   },
// //   {
// //     name: 'Multímetro', 
// //     slug: 'multímetro'
// //   }
// // ]

// export default function Dashboard() {
//   const [qtde, setQtde] = useState<number>(0)
//   const [produtos, setProdutos] = useState<Produto[]>(PRODUTOS) // Inicializando com os dados default

//   const carregarDados = async () => {
//     axios.get('http://localhost:27017/api/v1/produtos').then((resp: AxiosResponse) => {setProdutos(resp.data)})
//     axios.get('http://localhost:27017/api/v1/relatorios/quantidade').then((resp: AxiosResponse) => {
//       setQtde(resp.data[0] ? resp.data[0].total : 0)
//     })

//     useEffect(() => {
//       carregarDados() // Carregar os dados quando o componente for montado
//     }, [])
  

//   return (
//     <>
//       <h1>Produtos</h1>

//       <hr/>
//       <p><strong>Qauntidade</strong> {qtde}</p>

//       <ul>
//         {
//           produto.map((produto, index) => (
            
//               <li key={index}>
//                 <Link href={`/produtos/${produto.slug}`}>{produto.name}</Link>
//               </li> 
//            ) )
//       }
//       </ul>
//     </>
//   )
// }


// // Dados iniciais como fallback
// const PRODUTOS: Produto[] = [
//   {
//     name: 'Resistor',
//     slug: 'resistor'
//   },
//   {
//     name: 'Multímetro', 
//     slug: 'multimetro'
//   }
// ]}

'use client'
import axios, { AxiosResponse } from 'axios'
import { ProdutoType } from '../types'
import { useState, useEffect } from 'react'

// import Link from "next/link"

interface Produto {
  name: string,
  slug: string
}



export default function Dashboard() {
  const [qtde, setQtde] = useState<number>()
  const [produtos, setProdutos] = useState<ProdutoType[]>([]) // Inicializando com os dados default

  const carregarDados = async () => {
    // Carregar dados de produtos da API
    axios.get('http://localhost:27017/api/v1/produtos')
      .then((resp: AxiosResponse) => {
        setProdutos(resp.data) // Atualiza os produtos com os dados da API
      })

    // Carregar quantidade de produtos da API
    axios.get('http://localhost:27017/api/v1/relatorios/quantidade')
      .then((resp: AxiosResponse) => {
        setQtde(resp.data[0] ? resp.data[0].total : 0) // Atualiza a quantidade
      })
  }

  useEffect(() => {
    carregarDados() // Carregar os dados quando o componente for montado
  }, [])
//implementar o cache pra renderizar mais rápido
  return (
    <>
          <div className="top-bar">
              <div className="logo"><a href="/">Electronic's Place</a></div>
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
          </div>
          {/* Tentativa de colocar o nome, mas n deu certo(a página só funciona da barra de pesquisa pra cima, o resto fica em branco)*/}
          {/* <div>
              { produtos.map((p: ProdutoType, index) =>
                <tr key={p._id  || index}>
              <div className="central">
              <a href={`/produtos/${p._id}`} aria-label={p.name}>
                  <img src="/imagens/produto1.png" alt={p.name}/>
                  <div>{p.name}</div>
              </a>

              <a href={`/produtos/${p._id}`} aria-label={p.name}>
                  <img src="/imagens/produto2.png"  alt={p.name}/>
                  <div>{p.name}</div>
              </a>

              <a href={`/produtos/${p._id}`} aria-label={p.name}>
                  <img src="/imagens/produto3.png"  alt={p.name}/>
                  <div>{p.name}</div>
              </a>

              <a href="/produtos/4" aria-label="Produto 4">
                  <img src="/imagens/produto4.png" alt="Produto 4" />
              </a>

              <a href="/produtos/5" aria-label="Produto 5">
                  <img src="/imagens/produto5.png" alt="Produto 5" />
              </a>

              <a href="/produtos/6" aria-label="Produto 6">
                  <img src="/imagens/produto6.png" alt="Produto 6" />
              </a>
              </div>
                </tr>
              ) }
          </div> */}
          <div>
              <div className="central">
              <a href="/produtos/1" aria-label="Produto 1">
                  <img src="/imagens/produto1.png" alt="Produto1"/>
              </a>

              <a href="/produtos/2" aria-label="Produto 2">
                  <img src="/imagens/produto2.png"  alt="Produto2"/>
              </a>

              <a href="/produtos/3" aria-label="Produto 3">
                  <img src="/imagens/produto3.png"  alt="Produto3"/>
              </a>

              <a href="/produtos/4" aria-label="Produto 4">
                  <img src="/imagens/produto4.png" alt="Produto 4" />
              </a>

              <a href="/produtos/5" aria-label="Produto 5">
                  <img src="/imagens/produto5.png" alt="Produto 5" />
              </a>

              <a href="/produtos/6" aria-label="Produto 6">
                  <img src="/imagens/produto6.png" alt="Produto 6" />
              </a>
              </div>
          </div>
    </> 
  )
}


// Dados iniciais como fallback
// const PRODUTOS: Produto[] = [
//   {
//     name: 'LED',
//     slug: 'led'
//   },
//   {
//     name: 'Multímetro', 
//     slug: 'multimetro'
//   },
//   {
//     name: 'Osciloscópio',
//     slug: 'Osciloscópio'
//   },
//   {
//     name: 'Micro:Bit',
//     slug: 'micro:bit'
//   },
//   {
//     name: 'Resistor',
//     slug: 'resistor'
//   },
//   {
//     name: 'Gerador de Funções',
//     slug: 'gerador de funções'
//   },
// ]
