var database
var drawing=[];
var currentPath = [];
var isDrawing = false;
var path
var saveButton


function setup() {
  canvas=createCanvas(400,400);
  canvas.mousePressed(startPath);
  canvas.parent('canvascontainer');
 canvas.mouseReleased(endPath);
 saveButton = select('#saveButton')
 saveButton.mousePressed(saveDrawing)
 clearButton = select('#clearButton')
 clearButton.mousePressed(clearDrawing)
 
 database = firebase.database(); 
 input = createInput('Name');
 button = createButton("Let's Paint!");

}

function startPath(){
  isDrawing = true
  currentPath = [];
  drawing.push(currentPath);
}
function endPath(){
  isDrawing = false
  

}
function draw() {
  background("black"); 
  fill("white");
  textSize(18);
  text("Paint App By Samyak", 100, 50)
  input.position(100,200);
  button.position(140,300);
  button.mousePressed(()=>{
  input.hide();
  button.hide();
   


  });
  
  if(isDrawing){
  var point = {
    x : mouseX,
    y : mouseY
  }

    currentPath.push(point)

  }
 
  stroke("white")
  strokeWeight(4);
  noFill();
  for(var i = 0; i < drawing.length; i++){
    path = drawing[i];
    beginShape();
  
  for(var j = 0; j< path.length; j++){
    vertex(path[j].x,path[j].y)
  }
  endShape();

}
}

function saveDrawing(){
  var ref = database.ref('/paint-app/drawings');
  var data = {
    name : input.value(),
    drawing: drawing
  }

  var result = ref.push(data,dataSent);
  console.log(result.key)
ref.push(data,dataSent);
function dataSent( err,status){
  console.log(status);
}


}

function clearDrawing(){
  drawing = [];
}

