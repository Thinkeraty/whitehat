
function preload() {
  bulb_glow = loadImage("https://thinkeraty.github.io/whitehat/Carbon/assets/bulb-glow.png");
  bulb_unglow = loadImage("https://thinkeraty.github.io/whitehat/Carbon/assets/bulb.png");

  bg_img = loadImage("../assets/wind_bg.jpg");

 
}
function setup() {
  createCanvas(800,400);

  bulb = createSprite(50, 330, 50, 50);
  bulb.addImage("unglowing", bulb_unglow);
  bulb.addImage("glowing", bulb_glow);
  bulb.scale = 0.15;

  windmill = new Windmill(200, 300, -40, -40);

  //cloud = new Cloud(350, 30, 50, 50);

  wind_y = Math.round(random(20, 310));

  wind = new Wind(800, 30, 60, 50);


  col = false;


}

function draw() {
  background(bg_img);  

  

  windmill.x = mouseX;

  stroke("#ffffff");
  strokeWeight(5);
  line(windmill.x + 176.5, windmill.y, windmill.x  + 176.5, 370);

  windmill.y = 240;

  windmill.x = mouseX + 350;

  //cloud.display();

  wind.x = wind.x - 5;

  if(wind.x < 0) {
    wind.x = 800;
    wind_y = Math.round(random(20, 250));
    wind.y = wind_y;
  }

  console.log(windmill.x);

  bulb.x = windmill.x - 20;

  windmill.display();

  console.log(wind.body.isTouching(windmill.fake));

  collision();

  drawSprites();


  wind.display();

}


function collision() {
  if(windmill.fake.isTouching(wind.body)) {

      bulb.changeImage("glowing", bulb_glow);
      bulb.scale = 0.25;

      windmill.gif.position(windmill.fake.x - 70, windmill.fake.y - 70);

} else {
      bulb.changeImage("unglowing", bulb_unglow);
      bulb.scale = 0.15;

      windmill.gif.position(-1000, -1000);
}
}