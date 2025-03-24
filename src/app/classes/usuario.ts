import mongoose from './mongodb'

const usuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true, index: true },
    valor: { type: Number, required: false }
  },
  {
    versionKey: false
  }
)

const usuario = mongoose.model('usuario', usuarioSchema)

export default usuario
