// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(800, 400);

    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(400, 380, 800, 40);

    cannon = new Tanker(120, 350, 200, 20, 47.12);

    ball1 = new Ball(460, 5, 40);

    ball2 = new Ball(470, 5, 40);

    ball3 = new Ball(450, 5, 40);
    
    ball4 = new Ball(480, 5, 40);

}

function draw() {
// Remember to update the Matter Engine and set the background.
    background("#ffffff");

    Engine.update(engine);

    ground.display();
    cannon.display();

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}