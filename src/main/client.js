import Rect from "../render/rect";
import Stats from "../render/stats";
import InputHandler from "./inputhandler";

export default class Client {
    constructor() {
        this.input = new InputHandler();
        this.rect = new Rect();
        this.speed = 5.0;

        document.addEventListener("wheel", this.wheel.bind(this));
    }

    tick(delta) {
        this.rect.tick(delta);

        if (Math.abs(this.input.mouseX - this.rect.position[0]) > 10 || Math.abs(this.input.mouseY - this.rect.position[1]) > 10) {
            this.rect.position[0] += (this.rect.forward[0] * this.input.vertical + this.rect.right[0] * this.input.horizontal) * this.speed;
            this.rect.position[1] += (this.rect.forward[1] * this.input.vertical + this.rect.right[1] * this.input.horizontal) * this.speed;
        }

        this.rect.lookAt(this.input.mouseX, this.input.mouseY);
        Stats.set("speed", Math.round(this.speed));
    }

    render(ctx, delta) {
        this.rect.render(ctx, delta);
    }

    wheel(e) {
        this.speed -= e.deltaY * 0.025;
        if (this.speed < 0.1) this.speed = 0.1;
        if (this.speed > 20) this.speed = 20;
    }
}