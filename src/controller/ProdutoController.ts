import { Request, Response } from "express";
import { ProdutoRepository } from "../repositories/ProdutoRepository";
import { Produto } from "../model/Produto";

const produtoRepository = new ProdutoRepository();

export class ProdutoController{
    cadastrar(request : Request, response : Response){
        const produto: Produto = request.body
        produtoRepository.create(produto)
        response.status(201).json({message: "produto cadastrado", data: produto});
    }
}
    
