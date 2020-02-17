class Wind {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    display() {
        fill("#000000");
        this.animation = null;
        rect(this.x, this.y, this.width, this.height);
    }
}