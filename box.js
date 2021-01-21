class Box{
    constructor(x, y){
      var options = {
        'restitution':0.8,
        'density':1.0,
        isStatic : false 
    }
    this.body = Bodies.rectangle(x, y,30,40, options);
    this.width = 30;
    this.height = 40;
    World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,30,40);
      pop();
    }
  
  }
  
