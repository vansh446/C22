const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic : true,
  }
  
  var balloption = {
    restitution : 0.7,
  }


  ground = Bodies.rectangle(400,380,800,10,option);
  World.add(world,ground);

  ball = Bodies.circle(400,200,12,balloption)
  World.add(world,ball)

  console.log(ball);
  
 
}

function draw() {
  background(0);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10)

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,12,12);
  


 
}