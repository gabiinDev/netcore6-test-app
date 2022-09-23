import { TestApiHelper } from "@/Test/TestApiHelper";
const api = new TestApiHelper();
export class TestController {
    template;
    methods;
    data;
    mounted;
    created;
    constructor() {
        console.log("constructor TestController");
        this.template = "#test-component-template";
        this.data = function () {
            return {
                usuarios: 1
            };
        };
        this.mounted = async function () {
            console.log("mounted");
            await api.ObtenerTodos(this.usuarios);
        };
        this.created = function () {
            console.log("created");
            this.saludar();
        };
        this.methods = {
            saludar: function () {
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
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9GZWF0dXJlcy9UZXN0L1Rlc3RDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdyRCxNQUFNLEdBQUcsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUUvQyxNQUFNLE9BQU8sY0FBYztJQUN2QixRQUFRLENBQVM7SUFDakIsT0FBTyxDQUE0QjtJQUNuQyxJQUFJLENBQWdCO0lBQ3BCLE9BQU8sQ0FBd0M7SUFDL0MsT0FBTyxDQUF3QztJQUUvQztRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsUUFBUSxHQUFHLDBCQUEwQixDQUFDO1FBRTNDLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUixPQUFPO2dCQUNILFFBQVEsRUFBRSxDQUFDO2FBQ2QsQ0FBQTtRQUNMLENBQUMsQ0FBQTtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFBO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQTtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxPQUFPLEVBQUU7Z0JBQ0wsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLENBQUM7WUFDRCxjQUFjLEVBQUUsS0FBSztnQkFDakIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksRUFBRSxDQUFDO2dCQUNQLE1BQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLENBQUM7U0FDSixDQUFBO0lBQ0wsQ0FBQztDQUNKIn0=