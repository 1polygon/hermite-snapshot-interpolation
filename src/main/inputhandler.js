export default class InputHandler {
    constructor() {
        this.horizontal = 0;
        this.vertical = 0;
        this.mouseX = 0;
        this.mouseY = 0;

        document.addEventListener("mousemove", this.mouseMove.bind(this));
        document.addEventListener("keydown", this.keyDown.bind(this));
        document.addEventListener("keyup", this.keyUp.bind(this));
    }

    mouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    keyDown(e) {
        switch (e.key) {
            case "w":
                this.vertical = 1;
                break;
            case "s":
                this.vertical = -1;
                break;
            case "a":
                this.horizontal = -1;
                break;
            case "d":
                this.horizontal = 1;
                break;
        }
    }

    keyUp(e) {
        switch (e.key) {
            case "w":
                this.vertical = 0;
                break;
            case "s":
                this.vertical = 0;
                break;
            case "a":
                this.horizontal = 0;
                break;
            case "d":
                this.horizontal = 0;
                break;
        }
    }
}