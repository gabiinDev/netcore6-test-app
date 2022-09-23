import { hello } from "@/Shared/test1";
import BaseSiniestrosService from "@/Shared/Common/base-siniestros-service";

export class TestApiHelper extends BaseSiniestrosService {
    constructor() {
        super("todos")
    }

    async ObtenerTodos(id: number) {
        console.log("se ejecuta api");
        const result = await this.call("GET", `${id}`);
        console.log("respuesta", result);
        return result;
    }

    Saludar() {
        hello();
    }
}