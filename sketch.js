var imagemDeFundo
var pernalongaANI , pernalonga



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
imagemDeFundo = loadImage("./assets/city.png");
pernalongaANI =  loadAnimation("1coelho.png","2coelho.png", "3coelho.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    pernalonga = createSprite(50,650);
	pernalonga.addAnimation('animacao',pernalongaANI);
    pernalonga.scale = 0.3;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(imagemDeFundo);
  
  drawSprites();
 
}



