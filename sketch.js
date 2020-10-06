var dustbin,dustbin2,dustbin3;
var ground;
var paperball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  dustbin=createSprite(500,600,10,100);
  dustbin2=createSprite(650,600,10,100);
  dustbin3=createSprite(575,650,165,10);
  ground=createSprite(400,660,800,10);
  paperball=createSprite(100,630,30,30);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

}
function draw() {
  rectMode(CENTER);
  background(255,0,0);
  
 
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
  }
}


