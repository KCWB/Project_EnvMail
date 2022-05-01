import { Request, Response } from "express";
import { ProdutoRepository } from "../repositories/ProdutoRepository";
import { ClienteRepository } from "../repositories/ClienteRepository";

const produtoRepository = new ProdutoRepository();
const clienteRepository = new ClienteRepository();

export class EmailController {
    enviar(request: Request, response: Response){
        let corpo = '';
        produtoRepository.listar().forEach(produto => {
            corpo += `\n ${produto.nome}`;
        });

        clienteRepository.listar().forEach(cliente => {
            let email = 
                `\n Para: ${cliente.nome}` +
                `\nAssunto: Novo Produto` +
                `\nCorpo: ${corpo}`;
            console.log(email);
        })

        response.status(200).json({message: "E-mails enviados."})
    }
}