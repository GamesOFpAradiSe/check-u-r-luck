const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg
var game = play

function preload() {
    bg = loadImage("assest/bg.png");
}

function setup(){
   createCanvas(1168,551);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,width,50)
    walll = new Ground(-10,height/2,50,1500)
    wallr = new Ground(width+10,height/2,50,1500)
 
    division1 = new Division(220,435,100,220)
    division2 = new Division(400,435,100,220)
    division3 = new Division(600,435,100,220)
    division4 = new Division(800,435,100,220)
    division5 = new Division(1000,435,100,220)
    
      
     
    ball = new Ball(random(width/2-100,width/2+100),20,20) 
    
    
    
    
}

function draw() {
  background(bg); 
  fill("red")
  textSize(25)
  text(mouseX+","+mouseY,504,55)

    
  Engine.update(engine);
 
 


  ground.display()
  walll.display()
  wallr.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  ball.display()

}