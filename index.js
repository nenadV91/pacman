let canvas;
let game;
let config = {
	cellSize: 20,
	pacman: {
		size: 12,
		speed: 3
	},
	ghost: {
		size: 20,
		speed: 2.5
	},
	canvas: {
		width: 650,
		height: 580
	},
	stage: stage
}


function setup() {
	frameRate(40);
	canvas = createCanvas(config.canvas.width, config.canvas.height);
	game = new Game(config);
	game.addStage();
	game.addPacman(1, 5);
}


function draw() {
	background(color(11, 15, 26));
	game.stage.show();
	game.showStats(560, 20);

	game.pacman.show();
	game.pacman.update()
	game.pacman.move();

	game.checkPower();
	game.checkCompleted();
	
	game.ghosts.forEach(ghost => {
		ghost.show();
		ghost.update();
		ghost.move();
		ghost.chase(game.pacman);
		ghost.setDirection();
		
		game.checkCollision(ghost);
	})

	if(keyIsPressed) {
		if(keyCode == UP_ARROW) game.pacman.steer('up');
		if(keyCode == DOWN_ARROW) game.pacman.steer('down');
		if(keyCode == LEFT_ARROW) game.pacman.steer('left');
		if(keyCode == RIGHT_ARROW) game.pacman.steer('right');
	}
}
