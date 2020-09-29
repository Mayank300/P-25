
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1,box2,box3;
var paper;

function preload() {
  backgroundImg = loadImage("sprites/seen.jpg");
 }

function setup() {
	createCanvas(1200,600);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(width/2,580,1200,20);
	
	box1 = new Box(800,520,20,100);
	box2 = new Box(910,560,200,20);
  box3 = new Box(1020,520,20,100);
  paper = new Paper(100,370,80,80);
 	dustbin = new Dustbin(860,520,50,50);
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  drawSprites();
  ground.display();
  dustbin.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  dustbin.display();
}

function keyPressed(){ if(keyCode === UP_ARROW){ 
  Matter.Body.applyForce(paper.body,paper.body.position,{x:325,y:-325}); 
  } 
}

