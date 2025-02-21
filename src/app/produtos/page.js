import Link from "next/link"

const PRODUTOS = [
  {
    name: 'Resistor', slug: 'resistor'
  },
  {
    name: 'Multímetro', slug: 'multímetro',
  }
]

export default function Dashboard() {
  return (
    <>
      <h1>Produtos</h1>

      <hr />

      <ul>
        {
          Produto.map((Produto, index) => {
            return (
              <li key={index}>
                <Link href={`/produtos/${produto.slug}`}>{produto.name}</Link>
              </li>
            )
          })
        }

      </ul>
    </>
  )
}
