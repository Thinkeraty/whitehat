class Cloud {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.image = loadImage("../assets/cloud.png");
        this.body = createSprite(this.x, this.y, this.width, this.height);
        //this.body.debug = true;

        this.body.setCollider("rectangle", 0, 0, 180, 140);
        //this.body.debug = true;
        this.body.x = this.x + 50;
        this.body.y = this.y + 50;
        this.body.width = this.width + 20;
        this.body.height = this.height + 20;
        
        this.body.addImage(this.image);

        this.body.scale = 0.25;

    }
    display() {
        //this.body.visible = false;

        

        drawSprites();
    }
}