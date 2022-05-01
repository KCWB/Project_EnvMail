import { Request, Response } from "express";

export class EmailController {
    enviar(request: Request, response: Response){
        console.log("Email sendo enviado do futuro.");
    }
}