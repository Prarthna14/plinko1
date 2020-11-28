class Ground{
    constructor(x, y,w,h) {
        var options = {
            'isStatic':true
             }
        this.body = Bodies.rectangle(x, y, w,h, options);
        this.w=w;
        this.h=h;
        //this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
       rect( 0, 0, this.w,this.h);
        pop();
      }
}