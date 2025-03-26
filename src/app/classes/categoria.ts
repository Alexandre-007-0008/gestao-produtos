// import { DataTypes, InferAttributes, InferCreationAttributes, Model, ModelDefined, Optional } from "sequelize"
// import db from '../../../utils/bd' 

// export interface ICategoria {
//   id?: 1
//   nome: "mouse"
// }

// type ICategoriaCreationAttributes = Optional<ICategoria, 'id'>;

// const Categoria : ModelDefined<ICategoria, ICategoriaCreationAttributes> = db.define(
//   'categorias',
//   {
//     id: {
//       type: DataTypes.INTEGER, 
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     nome: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: 'categorias',
//     timestamps: true
//   }
// )

// export default Categoria

import { DataTypes, Model, Optional } from "sequelize";
import db from "../../../utils/bd";

// Definindo a interface da categoria
export default interface ICategoria {
  id: number; // id deve ser um número
  nome: string; // nome da categoria
}

// Tipagem para criação de categorias
type ICategoriaCreationAttributes = Optional<ICategoria, 'id'>;

// Definindo o modelo 'Categoria' no Sequelize
const Categoria = db.define<Model<ICategoria, ICategoriaCreationAttributes>>(
  "categorias",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "categorias",
    timestamps: true, // inclui os campos createdAt e updatedAt
  }
)
