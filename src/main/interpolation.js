import Rect from "../render/rect";
import Stats from "../render/stats";
import { hermite, mul, slerpRot } from "./math";

/**
 * Based on:
 * https://gafferongames.com/post/snapshot_interpolation
 * https://github.com/empyreanx/godot-snapshot-interpolation-demo
 */

class Snapshot {
    constructor(position, rotation, velocity, time) {
        this.position = [position[0], position[1]];
        this.rotation = rotation;
        this.velocity = [velocity[0], velocity[1]];
        this.time = time;
    }
}

export default class Interpolation {
    constructor(client) {
        this.client = client;
        this.rect = new Rect();
        this.rect.color = "green";

        const tickrate = 30;
        const packetloss = 0.1;
        this.delay = 100;
        this.time = 0;
        this.buffer = [];
        this.lastSnapshot = new Snapshot([0, 0], 0, [0, 0], 0);        

        this.snapshotInterval = setInterval(() => {
            if (Math.random() > packetloss) {
                this.addSnapshot(this.client.rect.position, this.client.rect.rotation, this.client.rect.velocity);
            }
        }, 1000.0 / tickrate);

        Stats.set("tick rate", tickrate);
        Stats.set("delay", this.delay + "ms");
        Stats.set("packet loss", Math.round(packetloss * 100) + "%");
    }

    addSnapshot(position, rotation, velocity) {
        this.buffer.push(new Snapshot(position, rotation, velocity, this.time));
    }

    tick(delta) {
        this.rect.tick(delta);
        
        while (this.buffer.length > 0 && this.time - this.delay > this.buffer[0].time) {
            this.lastSnapshot = this.buffer.shift();
        }

        if (this.buffer.length > 0 && this.buffer[0].time > 0) {
            var deltaTime = this.buffer[0].time - this.lastSnapshot.time;
            var alpha = (this.time - this.delay - this.lastSnapshot.time) / deltaTime;
            const pos = hermite(alpha, this.lastSnapshot.position, this.buffer[0].position, mul(this.lastSnapshot.velocity, deltaTime), mul(this.buffer[0].velocity, deltaTime));
            this.rect.position[0] = pos[0];
            this.rect.position[1] = pos[1];
            this.rect.rotation = slerpRot(this.lastSnapshot.rotation, this.buffer[0].rotation, alpha);
        }
        
        this.time += delta;

        Stats.set("buffer size", this.buffer.length);
    }

    render(ctx, delta) {
        this.rect.render(ctx, delta);
    }
}
