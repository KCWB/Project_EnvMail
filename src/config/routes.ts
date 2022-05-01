import {Router} from "express";
import { EmailController } from "../controller/EmailController";
import { ProdutoController } from "../controller/ProdutoController";

const routes = Router();

routes.get("/", (request, response) => {
    response.json({message : "Envio de e-mail..."});
});

routes.post("/produto/criar", new ProdutoController().cadastrar)

routes.get("/email/enviar", new EmailController().enviar)

export { routes };
