export function hermite(t, p1, p2, v1, v2) {
    var t2 = Math.pow(t, 2);
    var t3 = Math.pow(t, 3);
    var a = 1 - 3 * t2 + 2 * t3;
    var b = t2 * (3 - 2 * t);
    var c = t * Math.pow(t - 1, 2);
    var d = t2 * (t - 1);
    return add4(mul(p1, a), mul(p2, b), mul(v1, c), mul(v2, d));
}

export function add4(v1, v2, v3, v4) {
    return [v1[0] + v2[0] + v3[0] + v4[0], v1[1] + v2[1] + v3[1] + v4[1]];
}

export function add(v1, v2) {
    return [v1[0] + v2[0], v1[1] + v2[1]];
}

export function mul(v1, f) {
    return [v1[0] * f, v1[1] * f];
}

export function normalize(position) {
    const mag = Math.sqrt(position[0] * position[0] + position[1] * position[1]);
    if (mag < 0.0001) return [0, 0];
    else return [position[0] / mag, position[1] / mag];
}

export function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1];
}

export function slerpRot(r1, r2, alpha) {
    var v1 = [Math.cos(r1), Math.sin(r1)];
    var v2 = [Math.cos(r2), Math.sin(r2)];
    var v = slerp(v1, v2, alpha);
    return Math.atan2(v[1], v[0]);
}

export function slerp(v1, v2, alpha) {
    var cos_angle = dot(v1, v2);
    var angle = Math.acos(cos_angle);
    var angle_alpha = angle * alpha;
    var v3 = [v2[0] - cos_angle * v1[0], v2[1] - cos_angle * v1[1]];
    v3 = normalize(v3);

    return add(mul(v1, Math.cos(angle_alpha)), mul(v3, Math.sin(angle_alpha)));
}
