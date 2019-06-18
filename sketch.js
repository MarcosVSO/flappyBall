
var player={
  x: 100,
  y: 200,
  diameter: 20
};

var obstacle={
  x:600,
  y:0,
  w:50,
  h:150,
  gap:100
};

var gravidade = 1;
var pulo = 0;
var dificuldade = 10;
var score = 0;
var scored = 0;
var verticalVelocity = 0;

// Run only at the beginning
function setup() {
  createCanvas(600,400);
  frameRate(40);
}

// Run in LOOP
function draw() {
  background(183,183,183);


  fill(255,255,255);
  noStroke();
  //player.y = player.y + gravidade - pulo;
  verticalVelocity = verticalVelocity + gravidade + pulo;
  player.y = player.y + verticalVelocity;
  if (player.y + (player.diameter/2) >=400 || player.y - (player.diameter/2) <= 0){
    death();
  }
  ellipse(player.x,player.y,player.diameter,player.diameter);

  fill(1);
  noStroke();
  obstacle.x = obstacle.x - dificuldade;
  rect(obstacle.x,obstacle.y,obstacle.w,obstacle.h);
  var obstacle2y = obstacle.h + obstacle.gap;
  var obstacle2h = 400 - obstacle.h - obstacle.gap;
  rect(obstacle.x,obstacle2y,obstacle.w,obstacle2h);
  if (obstacle.x < -50){
    obstacle.x = 600;
    obstacle.h = random(20,300);
    scored = 0;
  }

  checkCollision(obstacle2y);

  if (obstacle.x + obstacle.w <= player.x - (player.diameter/2) && scored == 0){
    score = score + 1;
    scored = 1;
  }
  fill(220, 244, 66)
  textSize(32);
  text(str(score), 550, 25);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    verticalVelocity = -10;
  }else if (keyCode === ENTER){
    resetSketch();
  }
  return false;
}

function keyReleased(){
  if (keyCode === UP_ARROW){
    pulo = 0;
  }
  return false;
}


function resetSketch(){
  player.x=100;
  player.y=200;
  diameter=30;
  score = 0;
  obstacle.x= 600;
  obstacle.y=0;
  obstacle.w=50;
  obstacle.h=150;
  obstacle.gap=100;
  gravidade = 1;
  pulo = 0;
  dificuldade = 10;
  scored = 0;
  verticalVelocity = 0;
  loop();
}

function checkCollision(obstacle2y){
  if (obstacle.x <= player.x + (player.diameter/2) && obstacle.x + obstacle.w >= player.x - (player.diameter/2)){ 
    if (player.y - (player.diameter/2) <= obstacle.y + obstacle.h ||  player.y + (player.diameter/2) >= obstacle2y){
        death();
    }
  }
}

function death(){
  noLoop();
  fill(50);
  rect(50,100,275,120);
  fill(255,255,255);
  textSize(48);
  text("Press Enter\n" + "to Restart", 50, 150);
}





