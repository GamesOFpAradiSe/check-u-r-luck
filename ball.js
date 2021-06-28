class Ball{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
     
        this.body = Bodies.circle(x, y,r/2, options);
        
        this.r= r;
        this.image1 = loadImage("assest/ball1.png");
        this.image2 = loadImage("assest/ball2.png");
        this.image3 = loadImage("assest/ball3.png");
        this.image4 = loadImage("assest/ball4.png");
       
        World.add(world, this.body);
     
    }
      display(){
      
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
       image(this.image4, 0, 0, this.r, this.r);
            pop()
        }
          
       
      }
    