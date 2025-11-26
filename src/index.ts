import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bem vindo");
});

let usuarios = [
  {
    nome: "Gustavo MP",
    idade: 19,
  },
  {
    nome: "João Silva",
    idade: 44,
  },
];

app.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});

app.post("/users", (req: Request, res: Response) => {
  let user = req.body;
  usuarios.push(user);
  res.send({
    message: "Usuario criado com sucesso",
  });
});

app.listen(3000, () => {
  console.log("Servidor ativo na porta 3000");
});
