
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

  solarPanel = new Solar(200, 300, -40, -40);

  //cloud = new Cloud(350, 30, 50, 50);

  cloud_y = Math.round(random(20, 310));

  cloud = new Cloud(800, 30, 60, 50);


  col = false;


}

function draw() {
  background(bg_img);  

  

  solarPanel.x = mouseX;

  stroke("#ffffff");
  strokeWeight(5);
  line(solarPanel.x + 176.5, solarPanel.y, solarPanel.x  + 176.5, 370);

  solarPanel.y = 240;

  solarPanel.x = mouseX + 350;

  //cloud.display();

  cloud.x = cloud.x - 5;

  if(cloud.x < 0) {
    cloud.x = 800;
    cloud_y = Math.round(random(20, 250));
    cloud.y = cloud_y;
  }

  bulb.x = solarPanel.x - 20;

  solarPanel.display();

  console.log(solarPanel.fake.isTouching(cloud.body));

  collision();

  drawSprites();


  cloud.display();

}


function collision() {
  if(solarPanel.fake.isTouching(cloud.body) == false) {

      bulb.changeImage("glowing", bulb_glow);
      bulb.scale = 0.25;

      solarPanel.gif.position(solarPanel.fake.x - 70, solarPanel.fake.y - 70);

} else {
      bulb.changeImage("unglowing", bulb_unglow);
      bulb.scale = 0.15;

      solarPanel.gif.position(-1000, -1000);
}
}