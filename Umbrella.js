class Umbrella {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Umbrella4.png-removebg-preview.png");
      World.add(world, this.body);
      

    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, 200, 500, this.width, this.height);
      pop();
      
    }
  };