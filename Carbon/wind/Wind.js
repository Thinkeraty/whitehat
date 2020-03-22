class Wind {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.image = loadImage("../assets/wind.png");
        this.body = createSprite(this.x, this.y, this.width, this.height);
    }
    display() {
        image(this.image, this.x, this.y, this.width, this.height);
        this.body.visible = false;
        this.body.x = this.x + 25;
        this.body.y = this.y + 15;
        this.body.width = this.width;
        this.body.height = this.height;
        
        drawSprites();
    }
}