function collision(fixed, moving) {
  
  if(distance <  fixed.radius + moving.radius) {
    moving.shapeColor = "blue";
    fixed.shapeColor = "blue";

    textSize(25);
    text("They Are Colliding!", 470, 500);
  } else {
    moving.shapeColor = "red";
    fixed.shapeColor = "red";

    textSize(25);
    text("They Are Not Colliding.", 470, 500);
  }
}