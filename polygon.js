class Polygon{
    constructor(x , y , r) {
        var options = {
          isStatic : false
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r);
        pop();
      }
}