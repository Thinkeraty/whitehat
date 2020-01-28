

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var holder_options={
    isStatic: true
  }

  ground = Bodies.rectangle(300,300,400,20,ground_options)
  World.add(world,ground);

holder = Bodies.rectangle(300,70,200,20,holder_options);
World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(120,150,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("WHite");
}


function draw() {
  background("#ffffff"); 
  Engine.update(engine);

  fill("#000000");
  textSize(15)
  textStyle(ITALIC);
  text("Instructions For Pendulum Movement: ", 540, 70);
  text("To Set: SPACE", 540, 100);
  text("To Let Go: ENTER", 540, 130);

  textStyle(BOLD);
  textSize(25);
  textFont("chiller");
  text("Pendulum Made By: Samyak Jain", 540, 190);
  

  fill ("orange");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("red");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("#8b1de2");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
options = {
  bodyA : ball,
  bodyB : null,
  stiffness: 0.004,
  length : 100
}

}


}







