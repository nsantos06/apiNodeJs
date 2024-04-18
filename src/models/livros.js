import mongoose from "mongoose";
import {autorSchema} from "./autores.js";
//Como o banco precisa ser esquematizado. Uma tabela chamada livro com as propriedades abaixo.
const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editora: {type: String},
    numeroPaginas: {type: Number},
    preco: {type: Number, required: true},
    autor: autorSchema
},
{
    versionKey: false
}
)

const livro = mongoose.model("livros", livroSchema);
export default livro;