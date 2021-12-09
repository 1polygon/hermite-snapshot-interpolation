export default class Rect {
    constructor() {
        this.size = [100, 100];
        this.forward = [0, 0];
        this.right = [0, 0];
        this.position = [0, 0];
        this.rotation = 0;
        this.velocity = [0, 0];
        this.lastPosition = [0, 0];
        this.color = "white";
    }

    tick(delta) {
        this.velocity[0] = (this.position[0] - this.lastPosition[0]) / delta;
        this.velocity[1] = (this.position[1] - this.lastPosition[1]) / delta;
        this.forward[0] = Math.cos(this.rotation);
        this.forward[1] = Math.sin(this.rotation);
        this.right[0] = Math.cos(this.rotation + Math.PI / 2.0);
        this.right[1] = Math.sin(this.rotation + Math.PI / 2.0);
        this.lastPosition[0] = this.position[0];
        this.lastPosition[1] = this.position[1];
    }

    render(ctx, delta) {
        ctx.translate(this.position[0], this.position[1]);
        ctx.rotate(this.rotation);
        ctx.translate(-this.size[0] / 2, -this.size[1] / 2);
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.size[0], this.size[1]);
        ctx.resetTransform();
    }

    lookAt(x, y) {
        this.rotation = Math.atan2(y - this.position[1], x - this.position[0]);
    }
}