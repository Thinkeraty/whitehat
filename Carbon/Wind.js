class Wind {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.animation = loadImage("./assets/wind.png");
    }
    display() {
        fill("#000000");
        image(this.animation, this.x, this.y, this.width, this.height);
    }
}