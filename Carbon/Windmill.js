class Windmill {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        

        this.animation  = loadImage("./assets/windmill-stop.png");

        //var windmill_moving_loadImage = loadImage("./assets/windmill_moving.gif");
        //var windmill_moving_createImage = createImg("./assets/windmill_moving.gif");
    }

    display() {
        rect(this.x, 390, -90, -10);
        rect(this.x - 70, 370, 50, 10);

        image(this.animation, this.x - 100, this.y, this.width, this.height);
    }
}