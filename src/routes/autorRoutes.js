import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

//Rota para listar todos os autores
routes.get("/autores", AutorController.listarAutores);

//Rota para listar autor por ID
routes.get("/autores/:id", AutorController.listarAutoresPorID);

//Rota para cadastrar Autor
routes.post("/autores", AutorController.cadastrarAutor);

//Rota para atualizar autor
routes.put("/autores/:id", AutorController.atualizarAutor);

//Rota para remover autor
routes.delete("/autores/:id", AutorController.removerAutor);

export default routes;