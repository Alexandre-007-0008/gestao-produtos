import mongoose from 'mongoose'
import Produto from './models/produto';

mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://localhost:27017/led'
).then(async() => {
  
console.log("MongoDB conectado!");

const produtos = await Produto.find({});
console.log('Lista de Produtos:', produtos);
})
.catch(err => console.error("Erro ao conectar:", err))

mongoose.set('debug', true)

export default mongoose