const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, box1, box2;

function setup(){
createCanvas(1200,600);
fill("blue");

engine = Engine.create();
world = engine.world;

var ground_options = {
    isStatic : true
}
ground = Bodies.rectangle(600,590,1200,20,ground_options);
World.add(world,ground);

box1 = new box(900,540,50,50);
box2 = new box(1100,540,50,50);
pig1 = new pig(1000,540,50,50);
 
}


function draw(){
background("black");
Engine.update(engine);
rectMode(CENTER);
rect (ground.position.x,ground.position.y,1200,20);

box1.display(100,100);
box2.display(200,200);
pig1.display(300,300);
}