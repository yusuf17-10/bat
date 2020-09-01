class Drop {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          friction:0.1
      }
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
      this.radius = radius;
      
      if(this.rain.position.y > height){
          Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
      }
      
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill(this.color);
      ellipse(pos.x,pos.y, this.radius, this.radius);
      pop();
      
    }
  };