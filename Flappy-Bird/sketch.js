//Coded By Samyak Jain With <3 For Whitehat Jr.

var bird;
var pipes = [];

var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  img = loadImage("./bird.png");

  bg = loadImage("./bg.png");

  restart = loadImage("./restart.png");
}

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(bg);

  if(gameState == PLAY) {
    for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log('HIT');
      score = score - 3;
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

  score = score + Math.round(getFrameRate()/60);

  imageMode(CENTER);
  image(img, bird.x, bird.y, 100, 100);

  textSize(18);
  fill("#000000");
  text("Score: "+ score, 20, 30);
  
  if(score < 0) {
    gameState = END;
  }
  } else if(gameState == END) {
    textSize(30);
    fill("#000000");
    text("You Lose.", 260, 200)
    text("Start Again: ", 250, 250);

    lost = createSprite(320, 290, 60, 60);
    lost.addImage(restart);
    lost.scale = 0.05;
    drawSprites();

    if(mousePressedOver(lost)) {
      gameState = PLAY;
    }
  }

    imageMode(CENTER);
    image(img, bird.x, bird.y, 100, 100);

    textSize(18);
    fill("#000000");
    text("Score: "+ score, 20, 30);
  

  


}

function keyPressed() {
  if (keyCode == 32) {
    bird.up();
    //console.log("SPACE");
  }
}
