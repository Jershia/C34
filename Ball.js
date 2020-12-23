class Ball{
    constructor(x,y,r,angle){
        var options={
          density:0.04,
          frictionAir:0.005
         }
    
         this.body = Bodies.circle(x,y,r/2,options);
         this.r = r;
         World.add(world,this.body);
    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(5);
      stroke("red");
      fill("purple");
      ellipse(0,0,this.r,this.r);
      pop();
    }
};