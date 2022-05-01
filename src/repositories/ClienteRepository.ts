import { cliente } from "../model/Cliente"

const clientes: cliente [] = [
    {
        id: 1,
        nome: "Fulano de Tal",
        email: "fulano@gmail.com",
      },
      {
        id: 2,
        nome: "Ciclano de Tal",
        email: "ciclano@gmail.com",
      },
      {
        id: 3,
        nome: "Beltrano de Tal",
        email: "beltrano@gmail.com",
      },
    ];
     
    export class ClienteRepository {
      listar(): cliente[] {
        return clientes;
      }
    }    