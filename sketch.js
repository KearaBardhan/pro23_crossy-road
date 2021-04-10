var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1,carAnimation2, logAnimation, playerAnimation;
var school,road,bottomgrass1;
function preload()
{
  carAnimation1=loadAnimation("images/car1.png")
  carAnimation2=loadAnimation("images/car2.png")
  logAnimation=loadAnimation("images/log2.png")
  playerAnimation=loadAnimation("images/Player-03.png")
 
}

function setup() {
  createCanvas(1366,700);
  
  
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  
  
 
  
 
 for (var i=0;i<6;i++){
     bottomgrass1= createSprite(683,height-50-(i*400), width,grassHeight);
   if (i%2===0){
      road=createSprite(683,height-150-(i*400)-grassHeight, width,300)
      road.shapeColor="black";
   }  
   bottomgrass1.shapeColor="green";
 } 
for (var i=0; i<40;i++){
  cars=new Car (2);
carGroup1.add(cars.drive);
}
for (var i=0; i<40;i++){
  logs=new Log (-2);
logGroup1.add(logs.spt);
}
player=new Player(width/2,height-25);
 
  
 }


function draw() {
  background("skyblue");
  translate (0,-player.play.y+height-150)
  for (i=1;i<logGroup1.length;i++){
    if (logGroup1[i].x<0)
  {
    logGroup1[i].x=width;
  }
}
  for (i=1;i<carGroup1.length;i++){
    if (carGroup1[i].x<0)
  {
    carGroup1[i].x=width;
  }
  if (carGroup1[i].x>width){
    carGroup1[i].x=0;
  
  }
}
if (carGroup1.isTouching(player.play)){
  player.play.x=width/2;
  player.play.y=height-75;
}
if (logGroup1.isTouching(player.play)){
  player.play.x=player.play.x-3
}
else if((player.play.y>height-1550 &&player.play.y<height-1300) ||
  (player.play.y>height-500 && player.play.y<height-850)||
  (player.play.y>height)||
  (player.play.x<0)||
  (player.play.x>width))
  {

    player.play.x=width/2;
    player.play.y=height-75
  }
 

  drawSprites();
}

function keyPressed(){
  if (keyCode==UP_ARROW){
    player.move(0,-1);
  }
  else if(keyCode==DOWN_ARROW)
    player.move(0,1);
  
  else if(keyCode==LEFT_ARROW)
    player.move(-1,0);
  else if(keyCode==RIGHT_ARROW)
    player.move(1,0);
  
}

