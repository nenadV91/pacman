class Grid {
	constructor(pattern) {
		this.pattern = pattern;
		this.rows = pattern.length;
		this.columns = pattern[0].length;
		this.cellSize = 30;

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
				
				if(value == '-' || value == 'G') {
					const coin = new Coin(x, y, i, j, 'coin', this.cellSize);
					this.coins++;
					this.grid.push(coin);
				}

				if(value == '+') {
					const brick = new Brick(x, y, i, j, 'brick', this.cellSize);
					this.bricks++;
					this.grid.push(brick);
				}

				if(value == 'G') {
					game.ghosts.push(new Ghost(this, i, j));
				}
			}
		}
	}

	show() {
		this.grid.forEach(cell => cell.show());
	}
}