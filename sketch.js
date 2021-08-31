const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, canvas, DownKey;
var arrows;

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

  engine = Engine.create();
  world = engine.world;

  CB = new CBase(10, 450);
  CP = new CPlayer(50, 100);
  PP = new PPlayer(450, 100);
  PB = new PBase(410, 450);

  DownKey = false;
  arrows = [];
}

function draw() {
  background(180);

  fill("#FFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  Engine.update(engine);

  CB.show()
  CP.show()
  PB.show()
  PP.show()

  for (var i = 0; i < arrows.length; i++) {
    arrows[i].show();
  }

  text(mouseX + "," + mouseY, mouseX, mouseY)
}

function keyPressed() {
  if (keyCode == LEFT_ARROW && PP.angle < 0.5) {
    PP.angle = PP.angle + 0.1;
  }

  if (keyCode == RIGHT_ARROW && PP.angle > -0.5) {
    PP.angle = PP.angle - 0.1;
  }

  if (keyCode == DOWN_ARROW) {
    DownKey = true;
    arrow = new PArrow(390, 390, PI - PP.angle);
    arrows.push(arrow);
  }
}

function keyReleased() {
  if (keyCode == DOWN_ARROW && DownKey) {
    DownKey = false;
    arrows[arrows.length - 1].shoot()
  }
}