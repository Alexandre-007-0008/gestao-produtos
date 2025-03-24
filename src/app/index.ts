import dotenv from 'dotenv'
dotenv.config()

import Produto from 'produto_mongo' 
import express from 'express'
import cors from 'cors'

const app = express()
const PORTA = process.env.PORTA

app.use(cors())
app.use(express.json());

app.get('/produtos', async (req, res) => {
  const produtos = await Produto.find()
  res.send(produtos)
})

//Cadastrar produtos
app.post('/produtos', async (req, res) => {
 try {
  const produto = await Produto.create({ 
    nome: req.body.nome,
    valor: req.body.valor
  })

  res.send(produto)
 } catch(error) {
  console.error('Erro:', error);
    res.status(500).send(error)
 }
})
//Listar produtos
app.get('/produtos/:id', async (req, res) => {
  const produto = await Produto.findById(req.params.id)
  if (produto) {
    res.send(produto)
  } else {
    res.status(404).send('Produto não encontrado')
  }
})

//Atualizar produtos
app.put('/produtos/:id', async (req, res) => {
   try {
    const produto = await Produto.updateOne({_id: req.params.id},
        { nome: req.body.nome,
          valor: req.body.valor})
    
      res.sendStatus(200)
   } catch (error) {
    console.error("Erro", error);
    res.status(500).send(error)
   }
})

// Deletar um produto pelo ID
app.delete('/produtos/:id', async (req, res) => {
  await Produto.FindByIdAndDelete({ _id: req.params.id})
  res.status(200).send()
})
//Produtos tá certo


//API "ouvindo"
app.listen(PORTA, () => {
  console.log(`API está ouvindo em http://localhost:${PORTA}`)
})
