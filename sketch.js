const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

function preload() {
	b1 = loadImage('assets/base1.png');
	b2 = loadImage('assets/base2.png');
	p = loadImage('assets/player.png');
}

function setup() {
  canvas = createCanvas(600, 600);
  
  //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  //Create Player Base and Computer Base Object
	CB = new CBase(10,450);
	CP = new CPlayer(15, 0);
	PP = new PPlayer(455, 0);
	PB = new PBase(450,450);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //Display Playerbase and computer base 
	CB.show()
	CP.show()
  //display Player and computerplayer
	PB.show()
	PP.show()

}
