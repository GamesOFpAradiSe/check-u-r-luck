const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,ball = []


function preload() {
    bg = loadImage("assest/bg.png");
    luck = loadImage("assest/luck1.png")
    luck2 = loadImage("assest/luck.png")
    luck3 = loadImage("assest/luck3.png")
    luck4 = loadImage("assest/luck4.png")
    luck5 = loadImage("assest/luck5.png")
    luck6 = loadImage("assest/luck6.png")
}

function setup(){
   createCanvas(1168,551);
    engine = Engine.create();
    world = engine.world;

l =createSprite(100,450)
l.addImage(luck)
l.scale = 0.250

l2 =createSprite(310,450)
l2.addImage(luck2)
l2.scale = 0.250

l3 =createSprite(500,450)
l3.addImage(luck3)
l3.scale = 0.250

l4 =createSprite(700,450)
l4.addImage(luck4)
l4.scale = 0.200

l5 =createSprite(900,450)
l5.addImage(luck5)
l5.scale = 0.03

l6 =createSprite(1070,450)
l6.addImage(luck6)
l6.scale = 0.06



    ground = new Ground(width/2,height,width,50)
    walll = new Ground(-10,height/2,50,1500)
    wallr = new Ground(width+10,height/2,50,1500)
 
    division1 = new Division(220,435,100,220)
    division2 = new Division(400,435,100,220)
    division3 = new Division(600,435,100,220)
    division4 = new Division(800,435,100,220)
    division5 = new Division(1000,435,100,220)
    
    for (var i = 50; i < width-50; i=i+65) 
{
  plinko = new Plinko(i,100)
  

}
for (var i = 80; i < width-80; i=i+65) 
{
  plinko2 = new Plinko(i,150)
  

}
for (var i = 50; i < width-20; i=i+65) 
{
  plinko3 = new Plinko(i,200)
  

}
for (var i = 80; i < width-80; i=i+65) 
{
  plinko4 = new Plinko(i,250)
  

}   
      
  
  

    
  
    
    
}

function draw() {
  background(bg); 
  Engine.update(engine);
 
  if(frameCount%20 === 0){

    ball.push(new Ball(random(50,1050),-20,20))
    }
  

  drawSprites()



  ground.display()
  walll.display()
  wallr.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
 
for(var j = 0;j<ball.length;j++){

ball[j].display()

}
  plinko.display()
plinko2.display2()
plinko3.display3()
plinko4.display4()

}

function ballup(){
  
}