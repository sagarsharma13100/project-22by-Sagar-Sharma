var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	box1=createSprite(400, 650, 200,20);
	box1.shapeColor="red";

	box2=createSprite(490, 590, 20,100);
	box2.shapeColor="red";

	box3=createSprite(310, 590, 20,100);
	box3.shapeColor="red";

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-45, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var poption={
		restitution:0.8
	}
	packageBody = Bodies.circle(width/2 , 80 , 5 ,poption );
	World.add(world, packageBody);
	
	var ground_options ={
        isStatic: true
    }
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , ground_options );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  if (keyPressed()){
  
    rect(packageBody.position.x,packageBody.position.y,20,20);}
	rect(ground.position.x,ground.position.y,500,10);
  drawSprites();
 
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
}
}



