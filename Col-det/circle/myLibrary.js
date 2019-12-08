function collision(fixed, moving) {
  
  if(distance <  fixed.radius + moving.radius) {
    moving.shapeColor = "blue";
    fixed.shapeColor = "blue";
  } else {
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
}