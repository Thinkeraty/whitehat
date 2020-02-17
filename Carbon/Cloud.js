class Cloud {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    display() {
        fill("orange");
        rect(this.x, this.y, this.height, this.width);
    }
}