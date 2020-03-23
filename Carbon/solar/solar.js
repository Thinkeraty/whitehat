class Solar {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        
        this.image_unglow = loadImage("../assets/panel.png");
        this.image_glow  = loadImage("../assets/panel_glow.png");

        this.animation = this.image_unglow;
        

        this.body = createSprite(this.x, this.y, this.width, this.height);
    }

    display() {
        stroke("#ff0000");
        strokeWeight(3);

        fill("#ffffff");
        rect(this.x -130, 490, -90, -10);
        rect(this.x - 200, 470, 50, 10);

        this.body.x = solarPanel.x - 170;
        this.body.y = solarPanel.y - 20;
        this.body.width = solarPanel.width - 100;
        this.body.height = solarPanel.height - 100;

        if(keyCode == 68) {
            this.y = 200;
            this.body.y = 130;
            image(this.animation, this.x - 100, this.y + 150, this.width - 90, this.height - 90);
        }  else if(keyWentUp == 68) {
            this.y = 290;
            image(this.animation, this.x - 100, this.y + 150, this.width - 90, this.height - 90);
        } else{
            this.y = 290;
            this.body.y = 220;
            image(this.animation, this.x - 100, this.y + 150, this.width - 90, this.height - 90);
         }

         this.body.visible = false;
         //this.body.debug = true;

         this.body.setCollider("rectangle", 0, 150, 140, 140);

       /* if(cloud1.shadow.isTouching(this.body) || cloud2.shadow.isTouching(this.body)) {
            this.animation = this.image_glow;
        } else {
            this.animation = this.image_unglow;
        }*/

        image(this.animation, this.x - 100, this.y + 150, this.width - 90, this.height - 90);
        }
}