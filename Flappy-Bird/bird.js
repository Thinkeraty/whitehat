//Coded By Samyak Jain With <3 For Whitehat Jr.

function Bird() {
  this.y = height / 2;
  this.x = 64;
  this.height = 32;
  this.width = 32;

  this.gravity = 0.7;
  this.lift = -12;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    rectMode(CENTER)
    rect(this.x, this.y, this.width, this.height);
  };

  this.up = function() {
    this.velocity += this.lift;
  };

  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
}
