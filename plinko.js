class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.image = image
      
      this.body = Bodies.rectangle(x,y,20,20,options);
      Matter.Body.setAngle(this.body,PI/3)
     
      this.img2 = loadImage("assest/plinko.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      for (var i = 50; i < width-50; i=i+65) 
      {
      image(this.img2,i, pos.y,40,40);
      }
    }
    display2(){
        var pos =this.body.position;
        imageMode(CENTER);
        for (var i = 50; i < width-50; i=i+65) 
        {
        image(this.img2,i, 200,40,40);
        }
      }
      display3(){
        var pos =this.body.position;
        imageMode(CENTER);
        for (var i = 100; i < width-100; i=i+65) 
        {
        image(this.img2,i, 150,40,40);
        }
      }
  };
