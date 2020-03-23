
function preload() {
  bulb_glow = loadImage("https://thinkeraty.github.io/whitehat/Carbon/assets/bulb-glow.png");
  bulb_unglow = loadImage("https://thinkeraty.github.io/whitehat/Carbon/assets/bulb.png");

  bg_img = loadImage("../assets/game_bg.png");

  sun_img = loadImage("../assets/sun.png");

  shadow = loadImage("../assets/shadow.png");
}
function setup() {
  createCanvas(800, 500);

  bulb = createSprite(50, 430, 50, 50);
  bulb.addImage("unglowing", bulb_unglow);
  bulb.addImage("glowing", bulb_glow);
  bulb.scale = 0.15;

  solarPanel = new Solar(200, 400, -40, -40);

  cloud1 = new Cloud(200, 80, 120, 80);
  cloud2 = new Cloud(250, 150, 120, 80);

  sun = createSprite(400, 50, 40, 40);
  sun.addImage(sun_img);
  sun.scale = 0.20;

  cloud1_speed = Math.round(random(5, 8));
  cloud2_speed = Math.round(random(-8, -5));

    cloud1_shadow_x = cloud1.body.x;
  cloud2_shadow_x = cloud2.body.x;

  cloud1_shadow_y = cloud1.body.y + 200;
  cloud2_shadow_y = cloud2.body.y + 170;

}

function draw() {
  background(bg_img);  

  solarPanel.x = mouseX;

  stroke("#ffffff");
  strokeWeight(5);
  line(solarPanel.x + 176.5, solarPanel.y + 30, solarPanel.x  + 176.5, 470);

  console.log(mouseY);

  solarPanel.y = 240;

  solarPanel.x = mouseX + 350;

  bulb.x = solarPanel.x - 20;

  //col(solarPanel, sun)

  solarPanel.display();

  //collision();

  

  cloud1.body.velocityX = cloud1_speed;
  cloud2.body.velocityX = cloud2_speed;

  if(cloud1.body.x > width) {
    cloud1_speed = Math.round(random(-8, -5));
  }

  if(cloud1.body.x < 0) {
    cloud1_speed = Math.round(random(5, 8));
  }

  if(cloud2.body.x > width) {
    cloud2_speed = Math.round(random(-8, -5));
  }

  if(cloud2.body.x < 0) {
    cloud2_speed = Math.round(random(5, 8));
  }

  console.log(cloud1.x);

  cloud1_shadow_x = cloud1.body.x;
  cloud2_shadow_x = cloud2.body.x;

  cloud1_shadow_y = cloud1.body.y + 200;
  cloud2_shadow_y = cloud2.body.y + 170;


  cloud1.display();
  cloud2.display();

  drawSprites();

  tint(255, 125);
  image(shadow, cloud1_shadow_x - 80, cloud1_shadow_y - 160, 200, 340);
  //tint(255, 125);
  //image(shadow, cloud1_shadow_x - 80, cloud1_shadow_y - 160, 200, 340);
  

 // image(shadow, cloud2_shadow_x - 80, cloud2_shadow_y - 130, 200, 270);
  tint(255, 125);
  image(shadow, cloud2_shadow_x - 80, cloud2_shadow_y - 130, 200, 270);
}


function collision() {
  if(solarPanel.x - cloud1_shadow_x < 200 / 2 + solarPanel.width / 2 &&
    cloud1_shadow_x - solarPanel.x < 200 / 2 + solarPanel.width / 2) {

      bulb.changeImage("glowing", bulb_glow);
      bulb.scale = 0.25;

      solarPanel.animation = solarPanel.image_glow;

      console.log("hi");

} else {
      bulb.changeImage("unglowing", bulb_unglow);
      bulb.scale = 0.15;

      solarPanel.animation = solarPanel.image_unglow;

}
}
