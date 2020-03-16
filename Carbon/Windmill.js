class Windmill {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        
        this.image = loadImage("./assets/windmill-stop.jpg");
        this.gif  = createImg("./assets/windmill-move.gif");
        

        this.fake = createSprite(this.x, this.y, this.width, this.height);
    }

    display() {
        stroke("#ff0000");
        strokeWeight(3);

        fill("#ffffff");
        rect(this.x -130, 390, -90, -10);
        rect(this.x - 200, 370, 50, 10);

        this.fake.x = windmill.x - 170;
        this.fake.y = windmill.y - 20;
        this.fake.width = windmill.width - 100;
        this.fake.height = windmill.height - 100;

        if(keyCode == 68) {
            this.y = 200;
            this.fake.y = 130;
            console.log("working")
        }  else if(keyWentUp == 68) {
            this.y = 290;
        } else{
            this.y = 290;
            this.fake.y = 220;
            console.log("jfhb");
         }

         this.fake.visible = false;
         this.gif.size(140, 140);
        image(this.image, this.x - 100, this.y, this.width - 100, this.height - 100);
        }
}