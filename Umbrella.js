class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.radius = 180;
      this.body = Bodies.circle(x,y,1.8,options);
      World.add(world, this.body);
      this.image = loadImage("Umbrella4.png-removebg-preview.png");
      World.add(world, this.body);
      

    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(RADIUS);
      
      image(this.image,pos.x,pos.y, this.radius, this.radius);
      pop();
      
    }
  };


  /*imageMode(CENTER);
      image(this.image, 200, 500, this.width, this.height);*/