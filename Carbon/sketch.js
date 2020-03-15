function preload() {
  bulb_glow = loadImage("./assets/bulb-glow.png");
  bulb_unglow = loadImage("./assets/bulb.png");

 
}
function setup() {
  createCanvas(800,400);

   windmill_move = loadGif('./assets/windmill-move.gif');

  //alert("Hi, Do You Pledge To Save Energy And Ultimately Save Your Home From Energy Crisis, Leading To Total Annhilation?");;

  bulb = createSprite(50, 330, 50, 50);
  bulb.addImage("unglowing", bulb_unglow);
  bulb.addImage("glowing", bulb_glow);
  bulb.scale = 0.15;

  windmill = new Windmill(mouseX, 50, 120, 195);

  //cloud = new Cloud(350, 30, 50, 50);

  wind_y = Math.round(random(20, 310));

  wind = new Wind(800, 30, 50, 50);


  col = false;


}

function draw() {
  background(0);  
  drawSprites();

  windmill.x = mouseX;

  image(windmill_move);

  stroke("grey");
  strokeWeight(5);
  line(windmill.x - 43, windmill.y + 85, windmill.x - 43, 370);

  windmill.display();

  //cloud.display();

  wind.x = wind.x - 5;

  if(wind.x < 0) {
    wind.x = 800;
    wind_y = Math.round(random(20, 250));
    wind.y = wind_y;
  }

  console.log(windmill.x);

  bulb.x = windmill.x + 80;


  
  wind.display();

  changeSize();
  collision(windmill, wind);

}


function collision(movingRect, fixedRect) {
  if(movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
    fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2 &&
    movingRect.y - fixedRect.y < fixedRect.height / 2 + movingRect.height / 2 &&
    fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2) {

      bulb.changeImage("glowing");
      bulb.scale = 0.25;

} else {
      bulb.changeImage("unglowing");
      bulb.scale = 0.15;
}
}

function changeSize() {
  if(keyCode == 68) {
    windmill.y = 50;
    console.log("hi");
  }else {
    windmill.y = 150;
  }
}
