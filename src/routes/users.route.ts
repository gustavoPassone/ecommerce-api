import express, { Request, Response } from "express";

export const userRouters = express.Router();

type User = {
  id: number;
  nome: string;
  email: string;
};

let id = 0;
let usuarios: User[] = [];

userRouters.get("/users", (req: Request, res: Response) => {
  res.send(usuarios);
});

userRouters.get("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id);
  let user = usuarios.find((user) => user.id === userId);
  res.send(user);
});

userRouters.post("/users", (req: Request, res: Response) => {
  let user = req.body;
  user.id = ++id;
  usuarios.push(user);
  res.send({
    message: "Usuario criado com sucesso",
  });
});

userRouters.put("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id);
  let user = req.body;
  let indexOf = usuarios.findIndex((_user: User) => _user.id === userId);
  usuarios[indexOf].nome = user.nome;
  usuarios[indexOf].email = user.email;
  res.send({
    message: "Usuario alterado com sucesso",
  });
});

userRouters.delete("/users/:id", (req: Request, res: Response) => {
  let userId = Number(req.params.id);
  let indexOf = usuarios.findIndex((user: User) => user.id === userId);
  usuarios.splice(indexOf, 1);
  res.send({
    message: "Usuario excluido com sucesso",
  });
});
