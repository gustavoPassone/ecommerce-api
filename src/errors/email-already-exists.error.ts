import { ErrorBase } from "./base.error";

export class EmailAlreadyExistsError extends ErrorBase {
    constructor(message = "Já existe uma conta com o email informado") {
        super(409, message);
    }
}
