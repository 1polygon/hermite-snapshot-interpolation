import Client from "./main/client";
import Interpolation from "./main/interpolation";
import Scene from "./render/scene";

export default class Demo {
    constructor(canvas) {
        this.scene = new Scene(canvas);
        const client = new Client();
        this.scene.add(client);
        this.scene.add(new Interpolation(client));
    }
}