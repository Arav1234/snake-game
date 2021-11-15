class Snake {
    constructor (x,y,radius){
      var optios = {
        isStatic : false,
        
      }
        
      this.body=Bodies.circle(x,y,radius);
     this.image=loadImage("paper.png");
           this.radius = radius;
           World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        stroke("blue")
      circle(pos.x,pos.y,this.radius,this.radius);
    }
}