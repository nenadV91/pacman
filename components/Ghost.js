class Ghost extends Entity {
	constructor(...props) {
		super(...props);
		this.size = 25;
		this.color = '#ED2600';
		this.speed = 2;
		this.directionSteps = 15;
		this.directionPacman = 10;
		this.directions = ['up', 'down', 'right', 'left'];
	}

	show() {
		fill(this.color);
		ellipse(this.position.x, this.position.y, this.size, this.size)
	}

	catch(target) {
		return this.row == target.row &&
			this.column == target.column;
	}

	setDirection() {
		if(!this.target || !this.direction || !this.isMoving && this.directionSteps <= 0) {
			this.direction = this.directions[parseInt(random(this.directions.length))]
			this.directionSteps = 15;
		}
	}

	chase(pacman) {
		if(!this.directionPacman) {
			let {x, y} = p5.Vector.sub(this.position, pacman.position);

			if(random() < 0.5) {
				if(y > 0) this.direction = 'up';
				else this.direction = 'down';
			} else {
				if(x > 0) this.direction = 'left';
				else this.direction = 'right';
			}

			this.directionPacman = 10;
		}
	}

	move() {
		if(this.target && this.direction) {
			let desired = p5.Vector.sub(this.target.center, this.position);
			
			if(desired.mag() <= 1) {
				this.directionSteps--;
				this.directionPacman--;
				this.isMoving = false;
				this.column = this.target.column;
				this.row = this.target.row;
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