var myball;
var database;
var position;

function setup(){
    database = firebase.database();
    console.log();

    createCanvas(500,500);
    myBall = createSprite(250,250,10,10);
    myBall.shapeColor = "red";

    var myBallPosition = database.ref("ball/position");
    myBallPosition.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data) {
    position = data.val();

    myBall.x = position.x;
    myBall.y = position.y;
}

function writePosition(x, y){
    database.ref("ball/position").set({
        'x' : position.x + x,
        'y' : position.y + y
    });
}

function showError() {
    console.log("Error in writing to the databse");
}
