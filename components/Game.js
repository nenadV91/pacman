class Game {
	constructor() {
		this.stage = null;
		this.pacman = null;
		this.ghosts = [];
		this.directions = ['up', 'down', 'left', 'right'];
	}

	get isCompleted() {
		return this.stage.completed;
	}

	addStage(stage) {
		this.stage = new Grid(stage);
		this.stage.init(this);
	}

	addPacman(row, column) {
		this.pacman = new Pacman(this.stage, row, column);
	}

	stop(message) {
		noLoop();
		alert(message);
	}

	resetGame() {
		this.ghosts = [];
		this.addStage(this.stage.pattern)
		this.addPacman(this.pacman.startRow, this.pacman.startColumn)
		loop();
	}

	resetUnit(unit) {
		unit.row = unit.startRow;
		unit.column = unit.startColumn;
		unit.direction = null;
		unit.target = null;
		unit.isMoving = false;
		unit.cell = unit.startCell;
		unit.position = new p5.Vector(unit.cell.center.x, unit.cell.center.y);
		unit.velocity.mult(0)
	}

	resetGhosts() {
		this.ghosts.forEach(ghost => game.resetUnit(ghost));
	}

	resetPacman() {
		this.resetUnit(this.pacman)
	}

	showStats(x, y) {
		fill(255);
		noStroke();
		text('Points: ' + this.pacman.points, x, y);
		text('Lives: ' + this.pacman.lives, x, y + 20)
	}
}