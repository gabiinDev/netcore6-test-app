import { HTTPBaseService } from "gss-art-common-lib"
export default class BaseSiniestrosService extends HTTPBaseService {
    constructor(controller: string) {
        super("https://jsonplaceholder.typicode.com");
        this.controller = controller;
    }
}