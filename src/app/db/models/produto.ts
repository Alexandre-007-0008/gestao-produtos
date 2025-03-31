
// import mongoose from '@/app/db/mongodb'

// const ProdutoSchema = new mongoose.Schema({
//     nome: { type: String, required: true, index: true },
//     valor: { type: Number, required: false },
//     estoque: { type: Number, required: false }
//   },
//   {
//     versionKey: false
//   }
// )

// const Produto = mongoose.models.Produto || mongoose.model('Produto', ProdutoSchema)

// export default Produto
/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from '@/app/db/mongodb'
import { Document, Query } from 'mongoose';

interface Produto {
  _id: string;
  name: string;
  valor: number;
  qtde: number;
  // ... outras propriedades
}


interface ProdutoQuery extends Query<Produto[], Document> {
  _startTime?: number;
}
const ProdutoSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    valor: { type: Number, required: false },
    qtde: { type: Number, required: false }
  },
  {
    versionKey: false
  }
)

ProdutoSchema.pre<ProdutoQuery>(/^find/, function (next) {
  this._startTime = Date.now();
  next();
});

ProdutoSchema.post<ProdutoQuery>(/^find/, function (docs, next) {
  const duration = Date.now() - this._startTime!;
  console.log(`Consulta demorou ${duration}ms`);
  next();
});


const Produto = mongoose.models.Produto || mongoose.model('Produto', ProdutoSchema)

export default Produto

