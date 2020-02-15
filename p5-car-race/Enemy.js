class Enemy {
    constructor(x, y, width, height) {
        if(frameCount % 100 === 0) {
            var random_animation = Math.round(random(1,4));
    switch(random_animation) {
      case 1: this.animation = loadImage("../sprites/car_blue.png");
              break;
      case 2: this.animation = loadImage("../sprites/car_red.png");
              break;
      case 3: this.animation = loadImage("../sprites/car_yellow.png");
              break;
      case 4: this.animation = loadImage("../sprites/car_green.png");
              break;
      default: break;
    }
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display() {
          image(this.animation, this.x, this.y, this.width, this.height);
    }
}