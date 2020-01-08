class Tanker {
  constructor(x, y, width, height, angle) {
      var options = {
      isStatic: true
     }
      
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.height = height;
    this.width = width;

    Matter.Body.setAngle(this.body, angle);


    World.add(world, this.body);
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
     
    var pos = this.body.position;
    var angle = this.body.angle;


    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
    rect(pos.x, pos.y - 10, this.width, this.height);
    rect(pos.x, pos.y - 28, this.width - 60, this.height - 5);
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rect(pos.x - 190, pos.y - 280, 100, 30);
    pop();
    rect(pos.x, pos.y - 66, this.width - 90, this.height + 40);
    
    

  };
};
