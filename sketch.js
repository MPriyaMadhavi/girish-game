var bg1,bg2;
var bgimg1,bgimg2;
var shooter,shooterImg;
var invisibleground
var ob1,ob2,ob3,ob4,ob5,ob6,ob8,ob7;
var obstacle,obstaclesgroup
var obstacle1,obstaclesgroup1

function preload(){
  bgimg1=loadImage("sprites/GB-3.png")
  bgimg2=loadImage("sprites/city background.jpg")
  shooterImg=loadAnimation("sprites/10.png","sprites/20.png","sprites/30.png","sprites/40.png","sprites/50.png","sprites/60.png")
  ob1=loadAnimation("sprites/456.png","sprites/123.png","sprites/234.png","sprites/345.png","sprites/678.png")
  ob2=loadImage("sprites/102.png")
  ob3=loadImage("sprites/103.png")
  ob4=loadImage("sprites/104.png")
  ob5=loadImage("sprites/ob1.png")
  ob6=loadImage("sprites/ob2.png")
  ob7=loadImage("sprites/ob3.png")
  ob8=loadImage("sprites/ob4.png")
}


function setup() {
  createCanvas(1400,700);
  bg1=createSprite(700,200 , 1400,1165);
  bg1.addImage(bgimg1)
  bg1.scale=1
  bg1.velocityX=-10
  shooter=createSprite(200,500,100,100)
  shooter.addAnimation("shooter",shooterImg)
  invisibleground=createSprite(700,600,1400,20)
  invisibleground.visible=false;
  obstaclesgroup = createGroup();
  obstaclesgroup1=createGroup();

  
  
}

function draw() {
  background(255,255,255);  
  if(bg1.x<600){
    bg1.x=900
  }
  if(keyDown("space")){
    shooter.velocityY=-10
  }
  shooter.velocityY=shooter.velocityY+1    
  shooter.collide(invisibleground)      
  spawnObstacles();
  spawnObstacles1();
    drawSprites();
    text("score",500,50)
}
function spawnObstacles1() {
  if(frameCount % 60 === 0) {
   obstacle1 = createSprite(600,165,10,40);
   obstacle1.addAnimation("obstacle",ob1);
    obstacle1.velocityX = -6;
    obstacle1.scale = 0.5;
    //generate random obstacles
   // var rand =Math.round(random(1));
    //switch(rand){

     // break;
   //   default:break;
    }                     
                         
    //obstaclesgroup1.add(obstacle1)
    
    //assign scale and lifetime to the obstacle           
    
   // obstacle.lifetime = 200;
  //}
}
function spawnObstacles() {
  if(frameCount % 120=== 0) {
     obstacle = createSprite(1400,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand =Math.round(random(1,3));
    switch(rand){
      case 1:obstacle.addImage(ob2);
      break;
      case 2:obstacle.addImage(ob3);
      break;
      case 3:obstacle.addImage(ob4);
      break;
      default:break;
    }                     
                         
    obstaclesgroup.add(obstacle)
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
   // obstacle.lifetime = 200;
  }
}