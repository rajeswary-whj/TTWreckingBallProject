class Ball {
    constructor(x, y, width, height){


var ball_options = {
    restitution: 0.8,
    density: 1
    //isStatic: true
  }
  this.body = Bodies.rectangle(x,y, width, height, ball_options);
  this.width = width;
  this.height = height;
  World.add(myWorld, this.body);

}
display() {
    var angle = this.body.angle;
    push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
    fill("blue");
    ellipseMode(CENTER);
    ellipse(0,0,this.width, this.height);
    pop();
}
}
