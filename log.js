class Division{
    constructor(x, y, w,h) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic : true 
        }
        this.body = Bodies.rectangle(x, y,w/10,h, options);
        this.w = w
        this.h = h
       
        this.img = loadImage("assest/stick.png");
      
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.w, this.h);
        pop();



      }
}