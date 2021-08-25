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
		var position = this.body.position
		image(p, position.x, position.y, 66, 133);
	}
}

class PPlayer {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.body = Bodies.rectangle(x, y, 66, 133);
		this.angle = 0;
		World.add(world, this.body)
	}

	show() {
		var position = this.body.position
		image(p, position.x, position.y, 66, 133);
	}
}