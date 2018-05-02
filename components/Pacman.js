class Pacman extends Entity {
	constructor(...props) {
		super(...props);
		this.color = '#FFFF01';
		this.points = 0;
		this.lives = 3;

		this.eat(this.cell)
	}

	show() {
		fill(this.color);
		ellipse(this.position.x, this.position.y, this.size, this.size)
	}

	eat(cell) {
		if(!cell.isVisited) {
			this.points++;
			this.grid.coins--;
			cell.isVisited = true;
		}
	}

	move() {
		if(this.target && this.direction) {
			let desired = p5.Vector.sub(this.target.center, this.position);
			
			if(desired.mag() <= 1) {
				this.eat(this.target);
				this.column = this.target.column;
				this.row = this.target.row;
				this.isMoving = false;
				return;
			}
		
			desired.limit(this.speed);
			this.isMoving = true;
			this.position.add(desired);
		} else {
			this.isMoving = false;
		}
	}
}