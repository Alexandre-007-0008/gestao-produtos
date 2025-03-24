'use client'
import axios, { AxiosResponse } from 'axios'
import {useState} from 'react'
import Link from "next/link"

const PRODUTOS = [
  {
    name: 'Resistor',
    slug: 'resistor'
  },
  {
    name: 'Multímetro', 
    slug: 'multímetro'
  }
]

export default function Dashboard() {
  const [qtde, setQtde] = useState<number>(0)

  const carregarDados = async () => {
    axios.get('http://localhost:27017/api/v1/produtos').then((resp: AxiosResponse) => PRODUTOS(resp.data))
    axios.get('http://localhost:27017/api/v1/relatorios/quantidade').then((resp: AxiosResponse) => {
      setQtde(resp.data[0] ? resp.data[0].total : 0)
    })

  return (
    <>
      <h1>Produtos</h1>

      <hr/>
      <p><strong>Qauntidade</strong> {qtde}</p>

      <ul>
        {
          PRODUTOS.map((Produto, index) => {
            return (
              <li key={index}>
                <Link href={`/produtos/${PRODUTOS.slug}`}>{PRODUTOS.name}</Link>
              </li>
            )
          })
        }

      </ul>
    </>
  )
}}
