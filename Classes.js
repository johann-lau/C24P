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
  }

  show() {
    push();
    var position = this.body.position
    translate(position.x, position.y);
    image(p, 0, 0, 66, 133);
    rotate(PI / 2 - this.angle);
    image(pbow, this.angle * 10, this.angle * 40 - 30, 100, 100);
    pop();
  }
}

class PArrow {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.image = loadImage("assets/arrow.png");
    this.body = Bodies.rectangle(this.x, this.y, 67.8, 10, { isStatic: true });
    this.path = []
    World.add(world, this.body);
  }

  show() {
    push();
    var position = this.body.position;
    translate(position.x, position.y);
    rotate(this.angle);
    image(this.image, 0, 0, 67.8, 10);
    pop();
    this.path.push([position.x, position.y])
    for (var i = 0; i < this.path.length - 1; i++) {
      ellipse(this.path[i][0], this.path[i][1], 4, 4)
    }
    if (position.x > 800 || position.x < -200 || position.y > 800 || position.y < -200) {
      World.remove(world, this.body)
      arrows.pop()
    }
  }

  shoot() {
    Body.setStatic(this.body, false);
    var velocity = p5.Vector.fromAngle(this.angle)
    velocity.mult(20)
    Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }
}