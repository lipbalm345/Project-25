const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinIMG, paperIMG;
var paper, dustbin;

function preload()
{
	dustbinIMG = loadImage("dustbingreen.png")
	paperIMG = loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(45,40,70);

	ground = new Ground(600,675,1200,20);

	line1 = createSprite(490.6,height-85,20,100);

	line2 = createSprite(590,height-45,200,20);

	line3 = createSprite(690,height-85,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
paper.display();

line1.display();
line2.display();
line3.display();

dustbinIMG.display();
paperIMG.display();

ground.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		
		Matter.Body.setStatic(paper, false);
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}
