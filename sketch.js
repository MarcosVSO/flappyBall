
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
// Run only at the beginning
function setup() {
  createCanvas(600,400);
  var button = createButton("reset");
  button.mousePressed(resetSketch);
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
  rect(obstacle.x,obstacle.h + obstacle.gap,obstacle.w,400 - obstacle.h - obstacle.gap);
  if (obstacle.x < -50){
    obstacle.x = 600;
    obstacle.h = random(70,250);
  }


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

function checkCollision(){
  eixoX = dist(player.x,obstacle.x);
  eixoY= dist(player.y,obstacle.x);
  
}





