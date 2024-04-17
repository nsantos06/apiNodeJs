import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();
//Rota para listar livros. 
routes.get("/livros", LivroController.listarLivros);
//Rota para buscar livros por editora.
routes.get("/livros/busca", LivroController.listarLivrosPorEditora);
//Rota para buscar livros por id.
routes.get("/livros/busca/:id", LivroController.listarLivrosPorID);
//Rota para cadastrar livros.
routes.post("/livros", LivroController.cadastrarLivro);
//Rota para atualizar livros.
routes.put("/livros/:id", LivroController.atualizarLivro);
//Rota para deletar livros.
routes.delete("/livros/:id", LivroController.removerLivro);

export default routes;

