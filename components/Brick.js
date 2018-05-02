class Brick extends Cell {
	constructor(...props) {
		super(...props);
	}

	show() {
		noStroke();
		fill('#0334EB')
		rectMode(CENTER)
		rect(this.center.x, this.center.y, 15, 15)
	}
}