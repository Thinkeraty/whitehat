class Car {
    constructor(x, y, width, height) {
        this.animation = loadImage("https://thinkeraty.github.io/whitehat/p5-car-race/sprites/car_black.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    display() {
          animation = loadImage("https://thinkeraty.github.io/whitehat/p5-car-race/sprites/car_black.png");
          image(this.animation, this.x, this.y, this.width, this.height);
    }
}