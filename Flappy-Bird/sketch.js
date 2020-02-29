//Coded By Samyak Jain With <3 For Whitehat Jr.

var bird;
var pipes = [];

var life = 10;

function preload() {
  img = loadImage("./bird.png");

  bg = loadImage("./bg.png");
}

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(bg);

  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log('HIT');
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }

  imageMode(CENTER);
  image(img, bird.x, bird.y, 100, 100);


}

function keyPressed() {
  if (keyCode == 32) {
    bird.up();
    //console.log("SPACE");
  }
}
