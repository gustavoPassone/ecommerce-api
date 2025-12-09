import { ErrorBase } from "./base.error";

export class InteralServerError extends ErrorBase {
    constructor(message = "Erro interno do servidor") {
        super(500, message);
    }
}
