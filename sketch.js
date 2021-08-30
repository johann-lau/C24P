const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

function preload() {
  b1 = loadImage('assets/base1.png');
  b2 = loadImage('assets/base2.png');
  p = loadImage('assets/player.png');
  cbow = loadImage('assets/computerArcher.png');
  pbow = loadImage('assets/playerArcher.png');
  arrow = loadImage('assets/arrow.png')
}

function setup() {
  canvas = createCanvas(600, 600);

  //Initialising Engine
  engine = Engine.create();
  world = engine.world;

  //Create Player Base and Computer Base Object
  CB = new CBase(10, 450);
  CP = new CPlayer(50, 100);
  PP = new PPlayer(450, 100);
  PB = new PBase(410, 450);
}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  CB.show()
  CP.show()
  PB.show()
  PP.show()

  text(mouseX+","+mouseY, mouseX, mouseY)
}

function keyPressed() {
  if (keyCode == LEFT_ARROW && PP.angle < 0.5) {
    Matter.Body.setAngle(PP.body, PP.angle + 0.1)
    Matter.Body.setAngle(PP.arrow, PP.angle - 0.1)
    PP.angle = PP.angle + 0.1
  }

  if (keyCode == RIGHT_ARROW && PP.angle > -0.5) {
    Matter.Body.setAngle(PP.body, PP.angle - 0.1)
    Matter.Body.setAngle(PP.arrow, PP.angle - 0.1)
    PP.angle = PP.angle - 0.1
  }

  if (keyCode == DOWN_ARROW) {
    PP.shoot()
  }
}
