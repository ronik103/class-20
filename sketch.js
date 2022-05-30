
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var rock;
var ground;
var rotatingObject;
var angle=60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   var rock_options={
    restitution: 0.22,
    frictionAir: 0
   }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(300,20,20,rock_options);
  World.add(world,rock);

  wall = Bodies.rectangle(300,200,200,20,ground_options)
  World.add(world,wall);

  rotatingObject = Bodies.rectangle(100,200,100,20,ground_options);
  World.add(world,rotatingObject);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);

  Engine.update(engine);

  Matter.Body.rotate(rotatingObject,angle);
  push();
  translate(rotatingObject.position.x,rotatingObject.position.y);  
  rotate(angle)
  rect(0,0, 100,20);
  pop();
  angle+=0.1;

  ellipse(ball.position.x,ball.position.y,20);

  rect(ground.position.x,ground.position.y,400,20);

  ellipse(rock.position.x,rock.position.y,20)

  rect(wall.position.x,wall.position.y,200,20)  
}