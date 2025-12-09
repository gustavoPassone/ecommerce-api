import express, { NextFunction, Request, Response } from "express";
import { ValidationError } from "../errors/validation.error";
import { InteralServerError } from "../errors/internal-server.error";

export const errorHandler = (app: express.Express) => {
    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
        if (error instanceof ValidationError) {
            error.send(res);
        } else {
            new InteralServerError().send(res);
        }

        res.status(500).send({
            message: "Erro interno do servidor",
        });
    });
};
