class CBase {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x, y, 133, 100, { isStatic: true });
    this.angle = 0;
    World.add(world, this.body)
  }

  show() {
    var position = this.body.position
    image(b2, position.x, position.y, 133, 100);
  }
}

class PBase {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x, y, 133, 100, { isStatic: true });
    this.angle = 0;
    World.add(world, this.body)
  }

  show() {
    var position = this.body.position
    image(b1, position.x, position.y, 133, 100)
  }
}

class CPlayer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x, y, 66, 133);
    this.angle = 0;
    World.add(world, this.body)
  }

  show() {
    push();
    var position = this.body.position
    translate(position.x, position.y);
    rotate(-this.angle);
    image(p, 0, 0, 66, 133);
    rotate(PI * 1.5);
    image(cbow, -100, 30, 100, 100);
    pop();
  }
}

class PPlayer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.body = Bodies.rectangle(x, y, 66, 133);
    World.add(world, this.body);
    this.arrow = Bodies.rectangle(this.x, this.y + 300, 67.8, 10, { isStatic: true });
    World.add(world, this.arrow);
  }

  show() {
    push();
    var position = this.body.position
    translate(position.x, position.y);
    rotate(-this.angle);
    image(p, 0, 0, 66, 133);
    rotate(PI / 2);
    image(pbow, 0, -30, 100, 100);
    pop();
    push();
    var position = this.arrow.position
    translate(position.x, position.y);
    rotate(PI - this.angle);;
    image(arrow, 0, 0, 67.8, 10);
    pop();
    // console.log(this.arrow.position)
  }

  shoot() {
    Body.setStatic(this.arrow, false);
    var arrowvelocity = p5.Vector.fromAngle(PI * 1 + this.angle);
    arrowvelocity.mult(20)
    Body.setVelocity(this.arrow, { x: arrowvelocity.x, y: arrowvelocity.y });
    console.log(this.arrow.velocity)
  }
}