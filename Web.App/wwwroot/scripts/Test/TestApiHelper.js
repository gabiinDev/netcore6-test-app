import { hello } from "@/Shared/test1";
import BaseSiniestrosService from "@/Shared/Common/base-siniestros-service";
export class TestApiHelper extends BaseSiniestrosService {
    constructor() {
        super("todos");
    }
    async ObtenerTodos(id) {
        console.log("se ejecuta api");
        const result = await this.call("GET", `${id}`);
        console.log("respuesta", result);
        return result;
    }
    Saludar() {
        hello();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdEFwaUhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1Rlc3QvVGVzdEFwaUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkMsT0FBTyxxQkFBcUIsTUFBTSx5Q0FBeUMsQ0FBQztBQUU1RSxNQUFNLE9BQU8sYUFBYyxTQUFRLHFCQUFxQjtJQUNwRDtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFVO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqQyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsT0FBTztRQUNILEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNKIn0=