class Grid {
	constructor(config) {
		this.config = config;
		this.pattern = config.stage;
		this.rows = this.pattern.length;
		this.columns = this.pattern[0].length;
		this.cellSize = config.cellSize;

		this.grid = [];
		this.coins = 0;
		this.bricks = 0;
	}

	get completed() {
		return this.coins == 0;
	}

	init(game) {
		for(var i = 0; i < this.rows; i++) {
			for(var j = 0; j < this.columns; j++) {
				const value = this.pattern[i][j];
				const x = j * this.cellSize;
				const y = i * this.cellSize;
				
				if(value == '-') {
					const coin = new Coin(x, y, i, j, 'coin', this.cellSize);
					this.coins++;
					this.grid.push(coin);
				}

				if(value == '+') {
					const brick = new Brick(x, y, i, j, 'brick', this.cellSize);
					this.bricks++;
					this.grid.push(brick);
				}

				if(value == '*' || value == 'G') {
					const emptyCell = new Cell(x, y, i, j, 'empty', this.cellSize);
					this.grid.push(emptyCell)
				}

				if(value == 'G') {
					let {size, speed} = this.config.ghost;
					let ghost = new Ghost(this, i, j, size, speed);
					game.ghosts.push(ghost);
				}

				if(value == 'P') {
					const power = new Power(x, y, i, j, 'power', this.cellSize);
					this.powers++;
					this.grid.push(power);
				}
			}
		}
	}

	show() {
		this.grid.forEach(cell => cell.show());
	}
}