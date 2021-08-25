
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic:false,
		restitution:0.3,
        friction:0,
		density:1.2     
	}

	//Create the Bodies Here.
	ball=Matter.Bodies.circle(100,10,20,ball_options);
    World.add(world, ball);

    groundObj=new Ground(width/2,690,width,20);
	leftSide = new Ground(1100,670,21,120);
	rightSide = new Ground(900,670,21,120);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(51);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20,20)
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		
			 Body.applyForce(ball,{x:0,y:0},{x:65,y:-65});
		
			
	}
}



