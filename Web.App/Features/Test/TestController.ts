import { TestApiHelper } from "@/Test/TestApiHelper";
import { IVueComponent } from "gss-art-common-lib";

const api: TestApiHelper = new TestApiHelper();

export class TestController implements IVueComponent {
    template: string;
    methods?: Record<string, Function>;
    data?: () => Object;
    mounted?: (() => void) | (() => Promise<void>);
    created?: (() => void) | (() => Promise<void>);

    constructor() {

        console.log("constructor TestController");

        this.template = "#test-component-template";

        this.data = function () {
            return {
                usuarios: 1
            }
        }

        this.mounted = async function () {
            console.log("mounted");
            await api.ObtenerTodos(this.usuarios);
        }

        this.created = function () {
            console.log("created");
            this.saludar();
        }

        this.methods = {
            saludar: function() {
                api.Saludar();
            },
            buscarUsuarios: async function () {
                NF.UI.Page.block();
                let cant = this.usuarios;
                cant++;
                await api.ObtenerTodos(cant);
                this.usuarios = cant;
                NF.UI.Page.unblock();
            }
        }
    }    
}