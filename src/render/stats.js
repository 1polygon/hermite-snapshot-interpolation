export default new class Stats {
    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            this.element = document.querySelector(".stats");
        })

        this.stats = new Map();
    }

    set(name, value) {
        const stat = this.stats.get(name);
        if (stat) {
            stat.val.textContent = value;
        } else {
            const row = document.createElement("div");
            const key = document.createElement("div");
            const val = document.createElement("div");
            key.textContent = name;
            val.textContent = value;
            row.appendChild(key);
            row.appendChild(val);
            this.element.appendChild(row);
            this.stats.set(name, {
                key: key,
                val: val
            });
        }
    }
}