//Coded By Samyak Jain With <3 For WhiteHat Jr.

var fixedRect, movingCirc;
var distX;
var distY;
var distance;

function setup() {
  createCanvas(1200,600);

  fixedCirc = createSprite(600, 140, 50, 80);
  fixedCirc.shapeColor = "red";
  
  fixedCirc.debug = true;
  fixedCirc.setCollider("circle", 0, 0, 60);
   fixedCirc.radius = 60;

  movingCirc = createSprite(400, 400, 50, 80);
  movingCirc.shapeColor = "red";

  movingCirc.debug = true;
  movingCirc.setCollider("circle", 0, 0, 60);
  movingCirc.radius = 60;

  
}

function draw() {
  background(0,0,0);  

  movingCirc.x = mouseX;
  movingCirc.y = mouseY;

  distX = fixedCirc.x - movingCirc.x;
  distY = fixedCirc.y - movingCirc.y;
  
  distance = Math.sqrt(distX * distX + distY * distY);

  collision(fixedCirc, movingCirc);


  drawSprites();

  textSize(25);
  text("Status: ", 380, 500);
  
  textSize(30);
  text("Circular Collision Detection By Samyak", 370, 550);
}

