const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particle;
var rain=[];

var maxDrops=100;

var man;

var ground;

function setup() {
  var canvas =  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;

 
  man = new Umbrella(200,550,150,300);
 
  for(var i=0; i<maxDrops; i++){
      maxDrops.push(new Drop (random(0,400),random(0,400)));
  }

 

}







function draw() {
  background(0);  

  Engine.update(engine);


  man.display();


    /*if(frameCount% 60===0){
      var r = Math.round(random(50,550));
      ball.push(new Ball(r,0,10));
    }*/
}



