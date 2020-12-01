class Particle{
    constructor(x,y,radius,color){
        var options={
            isStatic:true
        }

        this.body= Bodies.rectangle(x,y,radius,options);
        this.radius = 10;
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }
    display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("white"); 
    ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}