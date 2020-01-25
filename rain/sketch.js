var rainDrops = [];

function setup() {
  createCanvas(800, 400);

  for (var i = 0; i < 1000; i++) {
    rainDrops[i] = new Rain(20, 2000, 30, 20);
  }

}

function draw() {
  background(230, 230, 250);

    rainX = random(30, 770);
    rainY = random(-500, 150);

  for (var i = 0; i < rainDrops.length; i++) {
        rainDrops[i].display();
        rainDrops[i].fall();

  }
}