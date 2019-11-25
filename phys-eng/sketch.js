const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

var ball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();

  world = engine.world;

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200, 380, 400, 50, ground_options);

  var ball_options = {
    restitution: 1.0
  }

  ball = Bodies.circle(180, 30, 30, ball_options);

  World.add(world, ground);
  World.add(world, ball);
  

  
}

function draw() {
  background("#ff0000");
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 50);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 30);
}