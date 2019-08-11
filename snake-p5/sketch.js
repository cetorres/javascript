let snake;
let rez = 20;
let food;
let w;
let h;
let gameFrameRate;
let resetGame;
let stopGame;

function setup() {
  createCanvas(600, 600);
  w = floor(width / rez);
  h = floor(height / rez);
  gameFrameRate = 6;
  resetGame = false;
  stopGame = false;
  
  frameRate(gameFrameRate);
  snake = new Snake();
  
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
  
}

function updateGameScore() {
	textSize(20);
  fill(255,0,0);
  textAlign(CENTER);
	text('Score: ' + snake.len, 0, 0, width, 30);  
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    if (snake.xdir != 1)
    	snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    if (snake.xdir != -1)
  		snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    if (snake.ydir != -1)
  		snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    if (snake.ydir != 1)
  		snake.setDir(0, -1);
  } else if (keyCode === ENTER) {
    print('ENTER');
    if (resetGame) {
      resetGame = false;
      // Reset snake
      snake.reset();
      // Update food location
      foodLocation();
    }
  }

}

function draw() {
  scale(rez);
  background(220);
  
  // Check for food eaten
  if (snake.eat(food)) {
    if (snake.len % 5 == 0) {
      gameFrameRate++
    	frameRate(gameFrameRate);
    }
    // Update game score
    updateGameScore();
    
    // Update food location
    foodLocation();
  }
  
  // Show snake
  snake.update();
  snake.show();
  
  // Check end game
  if (snake.endGame()) {   
    resetGame = true;
    background(255, 0, 0);
    textSize(30);
    fill(150);
    textAlign(CENTER);
		text('GAME OVER', 0, height/2, width, 30);
  }
  
  // Show food
  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
