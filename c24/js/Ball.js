class Ball {
  constructor(x, y, radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0
    }

    this.radius = radius;

    this.body = Matter.Bodies.circle(x, y, this.radius, options);


    World.add(world, this.body);
  }

  display() {
    fill("orange");

    var pos = this.body.position;

    ellipse(pos.x, pos.y, this.radius);
  }
}
