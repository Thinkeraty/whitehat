class Windmill {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display() {
        this.animation = "./sprites/windmill-big.png";
        fill("#1abc9c");
        rect(this.x, this.y, this.width, this.height);
    }
}