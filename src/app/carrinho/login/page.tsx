
// 'use client'

// import axios from 'axios' //Não consegui resolver esse erro
// import { ProdutoType } from '../../types'
// // import { redirect } from 'next/navigation'
// import { useEffect, useState } from 'react'
// import '../../globals.css' 

// export default function Home() {
//   const [produtos, setProdutos] = useState<ProdutoType[]>([])
//   const [qtde, setQtde] = useState(10);


//   const carregarDados = async () => {
//     // axios.get('http://localhost:3000/api/v1/produtos').then((resp: AxiosResponse) => setProdutos(resp.data))
//     // axios.get('http://localhost:3000/api/v1/relatorios/quantidade').then((resp: AxiosResponse) => {
//     //   setQtde(resp.data[0] ? resp.data[0].total : 0)
//     // })
//     axios.get<ProdutoType[]>('http://localhost:3000/api/v1/produtos').then((resp) => setProdutos(resp.data))
//     axios.get<{ total: number }[]>('http://localhost:3000/api/v1/relatorios/quantidade').then((resp) => {
//       setQtde(resp.data[0] ? resp.data[0].total : 0)
//       console.log("Quantidade recebida:", qtde);
//       setQtde(qtde);
//     })

//   }

//   useEffect(() => {
//     carregarDados()
//   }, [])

//   // const removerProduto = async (_id: string) => {
//   //   await axios.delete(`http://localhost:27017/api/v1/produtos/${_id}`)
//   //   carregarDados()
//   // }

//   const [count, setCount] = useState(0)

//   // Função para aumentar o número
//   const increase = () => {
//     if (count < qtde) {
//       setCount(count + 1) // Incrementa 1 ao número
//     }
    
//   }

//   // Função para diminuir o número
//   const decrease = () => {
//     if (count > 0) {
//       setCount(count - 1) // Decrementa 1 ao número, mas não permite valores negativos
//     }
//   }
// //não tá funcionado o botão de incremento deve ser o
//   return (
//     <>
//         <div className="top-bar">
//         <div className="logo">Electronic's Place</div>
//         <div className="user-area">
//             <a  href="/carrinho">
//                 <img className="button-img button-img2"/>
//             </a>
//             <a href="/login">
//                 <img className="button-img button-img1"/>
//             </a>
//         </div>
//         </div>
//         <div className="text-produto1">
//           <img className="img-produto" src="/imagens/produto4.png" alt="Produto" />
//           <div className="text-produto">
//             <p><strong>R$ 322,60</strong></p>
//             <p>Freenove Placa de desenvolvimento BBC Micro:bit V2, blocos e código MicroPython, tutorial detalhado, projetos de exemplo, microbit</p>
//             <p><strong>Marca:</strong> FREENOVE</p>
//             <p><strong>Capacidade de armazenamento da memória:</strong> 512KB</p>
//             <p><strong>Padrão de comunicação sem fio:</strong> 802.11b</p>
//             <p><strong>Quantidade:</strong>{count}</p>
//           </div>
//         <div className="display">
//         <div className="counter-container">
//             {/* Botão de decremento */}
//             <button onClick={decrease} className="counter-button">-</button>

//             {/* Display do número */}
//             <div className="counter-display">
//               {count}
//             </div>

//             {/* Botão de incremento */}
//             <button onClick={increase} className="counter-button">+</button>
//           </div>
//           </div>
//           <button className="comprar"><a href={`/produtos`}></a>Comprar</button>
//       {/* <table>
//         <tbody>
//         <div className="central">
//               {produtos.map((p: ProdutoType, index) => (
//                 <div key={p._id || index} className="produto-card">
//                   <a href={`/produtos/${p._id}`}>
//                     <img src={p.img || `/imagens/produto${p._id}.png`} alt={p.name} />
//                   </a>
//                   <p className="produto-nome">{p.name}</p>
//                   <p className="produto-central">{p.valor}</p>
//                    <p className="produto-valor">R$ {p.valor.toFixed(2)}</p> o valor pode estar indefinido pq o axios tá dando  um erro de network? 
//                 </div>
//               ))}
//             </div>
//         </tbody>
//       </table> */}
//         </div>
//     </>
//   )
// }


// // // ver depois pra adicionar o seguinte: mostrar o número de produtos disponíveis, que se alteraria quando o count mudasse


'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../../globals.css' 

export default function Home() {
  const [qtde, setQtde] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const carregarDados = async () => {
    try {
      const respQtde = await axios.get<{ total: number }[]>('http://localhost:3000/api/v1/relatorios/quantidade');
      const quantidade = respQtde.data[0]?.total ?? 0; 
      console.log("Quantidade recebida:", quantidade); // 👈 Depuração
      setQtde(quantidade);
    } catch (error) {
      console.error("Erro ao carregar quantidade:", error);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const increase = () => {
    setCount((prevCount) => {
      console.log(`Tentando aumentar: ${prevCount} / Limite: ${qtde}`);
      return prevCount < qtde ? prevCount + 1 : prevCount;
    });
  };

  const decrease = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  if (qtde === 0) {
    return <p>Carregando quantidade...</p>;
  }

  return (
    <>
      <div className="counter-container">
        <button onClick={decrease} className="counter-button">-</button>
        <div className="counter-display">{count}</div>
        <button onClick={increase} className="counter-button">+</button>
      </div>
      <p>Quantidade disponível: {qtde}</p>
    </>
  );
}