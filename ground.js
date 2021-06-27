class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image = image
      this.body = Bodies.rectangle(x,y,width,height/2,options);
      this.width = width;
      this.height = height;
     
      this.img2 = loadImage("assest/boder.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.img2,pos.x, pos.y,this.width, this.height);
    }
  };
