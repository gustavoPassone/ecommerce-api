import express from "express";
import { UsersController } from "../controllers/users.controller";

export const userRouters = express.Router();

userRouters.get("/users", UsersController.getAll);
userRouters.get("/users/:id", UsersController.getById);
userRouters.post("/users", UsersController.save);
userRouters.put("/users/:id", UsersController.update);
userRouters.delete("/users/:id", UsersController.delete);
