const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4;
var ground1;
var pig1, pig2;
var log1, log2;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900, 370,50,50);
    box2 = new Box(1060, 370, 50, 50);
    box3 = new Box(900, 350,50,50);
    box4 = new Box(1040, 350, 50, 50);
    box5 = new Box(980, 310, 50, 50);

    pig1 = new Pig(980, 370);
    pig2 = new Pig(980, 350);

    log1 = new Log(980, 360, 240, PI/2);
    log2 = new Log(980, 320, 240, PI/2);
    log3 = new Log(960, 300, 140, PI/6);
    log4 = new Log(1000, 300, 140, PI/-6);

    bird = new Bird(200, 180);

    ground1 = new Ground(600, 380, 1200, 50);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();

    ground1.display();
   
}