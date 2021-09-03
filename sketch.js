
var bg,bgImg
var sleep
var brush
var gym
var eat
var drink
var move
var bath 
var ast



function preload(){
bgImg=loadImage("iss.png")
sleep=loadAnimation("sleep.png")
brushp=loadAnimation("brush.png")
gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
eat =loadAnimation("eat1.png","eat2.png")
drink=loadAnimation("drink1.png","drink2.png")
move=loadAnimation("move.png")
bath=loadAnimation("bath1.png","bath2.png")
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);



ast=createSprite(300,230);
ast.addAnimation("sleeping",sleep);
ast.scale=0.1


  

  
  


}

function draw() {
  background(bgImg);  
  drawSprites();
  fill ("white")
  text("instructions:",20,20)
  text("UP ARROW: BRUSHING",20,40)
  text("DOWN ARROW: GYMMING",20,60)
  text("LEFT ARROW: EATING",20,80)
  text("RIGHT ARROW: BATHING",20,100)
  text("m key : MOVING",20,120)
  edges=createEdgeSprites();
//ast.gravity= 0.5
  ast.bounceOff(edges)
  brushing();
  gymming();
  eating();
  bathing();
  moving();
  

}
function brushing(){
  if(keyDown(UP_ARROW)){
  ast.addAnimation("brushing",brushp)
  ast.changeAnimation("brushing")
  ast.y=350
  ast.velocityX=0
  ast.velocityY=0
  }
}
  


function gymming(){
  if(keyDown(DOWN_ARROW)){
  ast.addAnimation("gymming",gym)
  ast.changeAnimation("gymming")
  ast.y=350
  ast.velocityX=0
  ast.velocityY=0
  }
}

function eating(){
  if(keyDown(LEFT_ARROW)){
  ast.addAnimation("eating",eat)
  ast.changeAnimation("eating")
  ast.y=350
  ast.velocityX=0
  ast.velocityY=0
  }
}




function bathing(){
  if(keyDown(RIGHT_ARROW)){
  ast.addAnimation("bathing",bath)
  ast.changeAnimation("bathing")
  ast.y=350
  ast.velocityX=0
  ast.velocityY=0
  }
}


function moving(){
  if(keyDown("m")){
  ast.addAnimation("moving",move)
  ast.changeAnimation("moving")
  //ast.y=350
  ast.velocityX=1
  ast.velocityY=1
  }
}
   



