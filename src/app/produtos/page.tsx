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
import { useState, useEffect } from 'react'
import Link from "next/link"

interface Produto {
  name: string
  slug: string
}

export default function Dashboard() {
  const [qtde, setQtde] = useState<number>(2)
  const [produtos, setProdutos] = useState<Produto[]>(PRODUTOS) // Inicializando com os dados default

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

  return (
    <>
      <h1>Produtos</h1>
      <hr />
      <hr></hr>
      <p><strong>Quantidade</strong>: {qtde}</p>

      <ul>
        {
          produtos.map((produto, index) => (
            <li key={index}>
              <Link href={`/produtos/${produto.slug}`}>{produto.name}</Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

// Dados iniciais como fallback
const PRODUTOS: Produto[] = [
  {
    name: 'Resistor',
    slug: 'resistor'
  },
  {
    name: 'Multímetro', 
    slug: 'multimetro'
  }
]
