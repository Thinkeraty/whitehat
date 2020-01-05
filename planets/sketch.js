function setup() {
  createCanvas(1000, 1000);

  bg = createSprite(500, 500, 100, 100);
  bg.shapeColor = "#000000";

  sun = new Planet(250, 0, 0);
  sun.planetColor = "#ffff00";

  venus = new Planet(90, 0.75, 890);
  venus.planetColor = "#6b8d82";

  mercury = new Planet(60, 1.5, 400);
  mercury.planetColor = "#ff0000";

  earth = new Planet(70, 1, 650);
  earth.planetColor = "#0000ff";

  sun.linkPlanets(mercury);
  sun.linkPlanets(earth);
  sun.linkPlanets(venus);

   distX1 = sun.distance - mercury.distance;
   distY1 = sun.distance - mercury.distance;
  
   distance1 = Math.sqrt(distX1 * distX1 + distY1 * distY1);

   distX2 = sun.distance - venus.distance;
   distY2 = sun.distance - venus.distance;
  
   distance2 = Math.sqrt(distX2 * distX2 + distY2 * distY2);

   distX3 = sun.distance - earth.distance;
   distY3 = sun.distance - earth.distance;
  
   distance3 = Math.sqrt(distX3 * distX3 + distY3 * distY3);
}

function draw() {
  background("#000000");

  if(distance1 <  sun.radius + mercury.radius) {
    background("#ff0000");
  } else {
      
  }
  
    if(distance2 <  sun.radius + venus.radius) {
    background("#6b8d82")
  
  }

    if(distance3 <  sun.radius + earth.radius) {
    background("#0000ff");
}

  center();

  
  frameRate(60);
  sun.radius = sun.radius + Math.round(World.frameRate/100);
 

  sun.draw();


    
}

function center() {
  translate(width / 2, height / 2);
}

