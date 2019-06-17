
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

var gravidade =3;
var pulo = 0;
var dificuldade = 3;
var score = 0;
// Run only at the beginning
function setup() {
  createCanvas(600,400);
  var button = createButton("reset");
  button.mousePressed(resetSketch);
}
// Run in LOOP
function draw() {
  background(183,183,183);
  fill(255,255,255);
  noStroke();
  player.y = player.y + gravidade - pulo;
  if (player.y >=400){
    noLoop();
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
    obstacle.h = random(70,250);
  }

  checkCollision(obstacle2y,obstacle2h);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    pulo =10;
  }else if (keyCode === ENTER){
    loop();
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

  obstacle.x= 600;
  obstacle.y=0;
  obstacle.w=50;
  obstacle.h=150;
  obstacle.gap=100;
  loop();
}

function checkCollision(obstacle2y,obstacle2h){
  if ( player.x >= obstacle.x-obstacle.w){
    if(player.y <= obstacle.y + obstacle.h || player.y <= obstacle2y + obstacle2h) {
      print("colisão");
    }else{
      score = score + 1;
      print(score);
    }
  }
}





