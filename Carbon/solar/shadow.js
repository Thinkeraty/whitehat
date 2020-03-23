class Shadow {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.image = loadImage("..assets/shadow.png")
    }
    display() {
        tint(255, 125);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}