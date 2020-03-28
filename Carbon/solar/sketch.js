var cloud1_shadow_x;
var cloud2_shadow_x;

var touch = 0;

function preload() {
  bulb_glow = loadImage("../assets/bulb-glow.png");
  bulb_unglow = loadImage("../assets/bulb.png");

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

  // solarPanel.x = mouseX;

  stroke("#ffffff");
  strokeWeight(5);
  line(solarPanel.x - 176.5, solarPanel.y + 30, solarPanel.x - 176.5, 470);

  // console.log(mouseY);

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

  // console.log(cloud1.body.x, "x value");

  cloud1_shadow_x = cloud1.body.x;
  cloud2_shadow_x = cloud2.body.x;

  cloud1_shadow_y = cloud1.body.y + 200;
  cloud2_shadow_y = cloud2.body.y + 170;


  cloud1.display();
  cloud2.display();

  drawSprites();

  tint(255, 125);
  image(shadow, cloud1_shadow_x - 80, cloud1_shadow_y - 160, 200, 340);

  tint(255, 125);
  image(shadow, cloud2_shadow_x - 80, cloud2_shadow_y - 130, 200, 340);

  collision()

  console.log(Math.round(touch));

  textSize(18);
  text("Generation : " + Math.round(Math.round(touch)/100)+ " Kwh", 10, 30)

  textSize(18);
  text("D: Height", 700, 30)

  if(Math.round(Math.round(touch)/100) == 5) {
    alert('Great Work! \nYou have successfully generated ' + (Math.round(Math.round(touch)/100) - 1) + ' Kwh of Solar Energy and reduced ' + ((Math.round(Math.round(touch)/100) - 1) * 150)/24 + " gm of Carbon Dioxide Emmisions! \nYou have successfully finished this game!")
    touch = 0;
    window.location.href = "../end.html";
} else {
  console.log("hi");
}


}


function collision() {
  if( cloud1_shadow_x >= solarPanel.x - 330 && cloud1_shadow_x <= solarPanel.x ||
      cloud2_shadow_x >= solarPanel.x - 330 && cloud2_shadow_x <= solarPanel.x
  ) {

    bulb.changeImage("unglowing", bulb_unglow);
    bulb.scale = 0.15;

    solarPanel.animation = solarPanel.image_unglow;

}

else {

  bulb.changeImage("glowing", bulb_glow);
  bulb.scale = 0.25;

  solarPanel.animation = solarPanel.image_glow;

  touch = touch + 0.5;

  }
}

