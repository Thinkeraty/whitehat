function setup() {
  createCanvas(800,400);

  //alert("Hi, Do You Pledge To Save Energy And Ultimately Save Your Home From Energy Crisis, Leading To Total Annhilation?");;

  bulb = createSprite(50, 350, 50, 50);

  windmill = new Windmill(mouseX, 95, 50, 300);

  cloud = new Cloud(350, 30, 50, 50);

  wind_y = Math.round(random(340, 310));

  wind = new Wind(800, 30, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  windmill.x = mouseX;
  windmill.display();

  cloud.display();

  wind.x = wind.x - 5;

  if(wind.x < 0) {
    wind.x = 800;
    wind.y = wind_y;
  }

  bulb.x = windmill.x + 150;


  
  wind.display();

}