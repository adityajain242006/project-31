
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var score=0;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400,600,  800,50);
    ground2 = new Ground(370,500,200,50)
    block1 =new Box(330,235,30,40)
    block2 =new Box(360,235,30,40)
    block3 =new Box(390,235,30,40)
    block4 =new Box(420,235,30,40)
    block5 =new Box(450,235,30,40)
    block6 =new Box(360,195,30,40)
    block7 =new Box(390,195,30,40)
    block8 =new Box(420,195,30,40)
    block9 =new Box(390,155,30,40)
    polygon= new Polygon(100,400,40,40)
    slingshot=new Slingshot(polygon.body,{x:100,y:400})





	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  textSize(20)
text("score"+score,400,100)
  ground.display()
  ground2.display()
  block1.display()
  block1.score()
  block2.display()
  block2.score()
  block3.display()
  block3.score()
  block4.display()
  block4.score()
  block5.display()
  block5.score()
  block6.display()
  block6.score()

  block7.display()
  block7.score()
  block8.display()
  block8.score()
  block9.display()
  block9.score()
  polygon.display()
  slingshot.display()


 
 
 
  

 


 
 
 


 
  
  
  
  drawSprites();
 
}
function mouseDragged(){
 
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }



function mouseReleased(){
  slingshot.fly();
 
}