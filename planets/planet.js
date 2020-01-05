class Planet {
  constructor(radius, speed, distance) {
    this.radius = radius;
    this.speed = speed;
    this.distance = distance;

    this.attachedPlanets = [];

    this.backgroundColor = 0;
    this.planetColor = 255;
    this.orbitColor = 32;
  }


  linkPlanets(planet) {
    this.attachedPlanets.push(planet);
  }

  draw() {
    this.sortPlanets();

    this.drawOrbits();
    this.drawPlanets();
  }

  sortPlanets() {
    this.attachedPlanets.sort(comparePlanets);

    for (let planet of this.attachedPlanets) {
      planet.sortPlanets();
    }
  }

  drawOrbits() {
    for (let planet of this.attachedPlanets) {
      planet.drawOrbit();
      planet.relatively(p => p.drawOrbits());
      planet.drawOrbitCut();
    }
  }

  relatively(doSomething) {
    push();
    this.translate();
    doSomething(this);
    pop();
  }

  translate() {
    let angle = millis() * this.speed / 1000;
    let distance = this.distance / 2;
    let vector = p5.Vector.fromAngle(angle, distance);

    translate(vector);
  }

  drawOrbit() {
    strokeWeight(this.orbitWeight);
    stroke(this.orbitColor);
    fill(this.backgroundColor);

    centeredCircle(this.distance);
  }

  drawOrbitCut() {
    strokeWeight(this.orbitWeight);
    stroke(this.backgroundColor);
    noFill();

    centeredCircle(this.distance - this.orbitWeight * 2);
  }

  drawPlanets() {
    for (let planet of this.attachedPlanets) {
      planet.relatively(p => p.drawPlanets());
    }

    this.drawPlanet();
  }

  drawPlanet() {
    if (this.hasRing) {
      strokeWeight(this.ringWidth);
      stroke(this.ringColor)
      fill(this.backgroundColor);

      centeredCircle(this.ringRadius);
    }

    noStroke();
    fill(this.planetColor);

    centeredCircle(this.radius);
  }
}

// Helpers

function centeredCircle(radius) {
  ellipse(0, 0, radius, radius);
}

function comparePlanets(a, b) {
  if (a.distance === b.distance) {
    return 0;
  }

  return a.distance < b.distance ? 1 : -1;
}