var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);

  movingRect = createSprite(150, 140, 60, 40);
  movingRect.shapeColor = "#ff0000";

  fixedRect = createSprite(170, 140, 60, 40);
  fixedRect.shapeColor = "#ff0000";

}

function draw() {
  background("#000000"); 
  
  //Moving With Respect To The Mouse
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
    fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
    movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2 &&
    fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2) {
    movingRect.shapeColor = "#00ff00";
    fixedRect.shapeColor = "#00ff00";
  }
  else {
    movingRect.shapeColor = "#ff0000";
    fixedRect.shapeColor = "#ff0000";
  }
 

  drawSprites();
}