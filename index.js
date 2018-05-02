let canvas;
let game;


function setup() {
	canvas = createCanvas(800, 510);
	game = new Game();
	game.addStage(stage_1);
	game.addPacman(1, 5);
}


function draw() {
	background(color(11, 15, 26));
	game.stage.show();
	game.showStats(650, 20);

	if(game.isCompleted) {
		game.stop('Completed.');
		game.resetGame();
	}

	game.pacman.show();
	game.pacman.update()
	game.pacman.move();

	game.ghosts.forEach(ghost => {
		ghost.show();
		ghost.update();
		ghost.move();
		ghost.chase(game.pacman);
		ghost.setDirection();
		

		if(ghost.catch(game.pacman)) {
			if(game.pacman.lives-- == 0) {
				game.stop('Game over.')
				game.resetGame();
			} else {
				game.stop('You died.')
				game.resetPacman();
				game.resetGhosts();
				loop();
			}
		}
	})

	if(keyIsPressed) {
		if(keyCode == UP_ARROW) game.pacman.steer('up');
		if(keyCode == DOWN_ARROW) game.pacman.steer('down');
		if(keyCode == LEFT_ARROW) game.pacman.steer('left');
		if(keyCode == RIGHT_ARROW) game.pacman.steer('right');
	}
}
