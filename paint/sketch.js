//var thickness;
//var thickness_img_plus, thickness_img_minus;
var color;
var x;
var y;
var fullCleaner;
var history = [];
var bg;


function preload() {

  //thickness_img_plus = loadImage("./images/plus.png");
  //thickness_img_minus = loadImage("./images/minus.png");

  fullCleaner = loadImage("./images/full_clean.png");


}

function setup() {
  createCanvas(800,400);

  //thickness = 2;

  color = color(random(255), random(255), random(255));
}

function draw() {
  background(255);  


  image(fullCleaner, 0, 100, 78.5, 28.5);

  /*fill("#000000");
  textSize(18);
  text("Thickness: "+thickness, 5, 175);
  image(thickness_img_minus, 5, 180, 12.5, 12.5);
  image(thickness_img_plus, 100, 180, 12.5, 12.5);*/

  if(mouseX > 0 && mouseX < 78.5 && mouseY > 100 && mouseY < 125) {
    if(mouseIsPressed === true) {
      fill("#ffffff");
      rectMode(CENTER);
      rect(520, 200, 680, 400);
    }

  }

  /*if(mouseX > 100 && mouseX < 112.5 && mouseY > 180 && mouseY < 192.5) {
    if(mouseIsPressed == true) {
      thickness = thickness+1;
        text("Thickness: "+thickness, 5, 175);
      console.log("hi");
    } 
  }*/
  drawOnCanavs();
}

function drawOnCanavs() {
  noStroke();

  if (mouseX > 110) {
    if (mouseIsPressed == true) {
      //if we are on the right side of page, let us draw
      fill(color);
      ellipse(mouseX, mouseY, 10, 10);
    }
}
}