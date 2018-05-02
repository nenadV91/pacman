class Coin extends Cell {
	constructor(...props) {
		super(...props);
		this.isVisited = false;
	}

	show() {
		noStroke();
		this.showBorders()

		if(!this.isVisited) {
			fill('#F0F0F0');
			ellipse(this.center.x, this.center.y, 5, 5);
		}
	}
}