export default class Scene {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.objects = [];

        window.addEventListener("resize", this.resize.bind(this));
        var lastTick = performance.now();
        const loop = () => {
            const now = performance.now();
            const delta = now - lastTick;
            lastTick = now;
            this.tick(delta);
            this.render(delta);
            window.requestAnimationFrame(loop);
        }

        this.resize();
        loop();
    }

    tick(delta) {
        this.objects.forEach(o => o.tick(delta));
    }

    render(delta) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.objects.forEach(o => o.render(this.ctx, delta));
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.objects.forEach(o => o.resize && o.resize(this.canvas.width, this.canvas.height));
    }

    add(o) {
        this.objects.push(o);
    }
}