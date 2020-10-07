var helicopterIMG, helicopterSprite,lineSprite1,lineSprite2,lineSprite3, packageSprite,packageIMG;
var packageBody,ground,lineBody1,lineBody2,lineBody3
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
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	lineSprite1=createSprite(400,660, 180,20);
	lineSprite2=createSprite(300,600, 20,140);
	lineSprite3=createSprite(500,600, 20,140);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	lineBody1 = Bodies.rectangle(400 , 660 , 180,20 , {restitution:0.5, isStatic:true});
	World.add(world, lineBody1);

	lineBody2 = Bodies.rectangle(300 , 600 , 20 , 140 , {restitution:0.5, isStatic:true});
	World.add(world, lineBody2);

	lineBody3 = Bodies.rectangle(500 , 600 , 20 , 140 , {restitution:0.5, isStatic:true});
	World.add(world, lineBody3);
	
lineSprite1. shapeColor= "red" ;
lineSprite2. shapeColor= "red" ;
lineSprite3. shapeColor= "red" ;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  lineSprite1.x= lineBody1.position.x 
lineSprite1.y= lineBody1.position.y 

lineSprite2.x= lineBody2.position.x 
lineSprite2.y= lineBody2.position.y 


  drawSprites();
 


}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
     Body.setStatic(packageBody,false);
	
  }
}



