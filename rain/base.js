class Base {
    constructor(x, y, width, height) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        
    }

    display() {
        stroke("#852ee2");
        var rand = random(2, 5);
       rect(this.x, this.y, 1, rand);
    }
}