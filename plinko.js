class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true
        }

        this.body= Bodies.rectangle(x,y,radius,options);
        this.radius = 10;
        this.plinkos =[];
        World.add(world,this.body)
    }
    display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("white"); 
    ellipse(pos.x,pos.y,this.radius,this.radius);


    for(var i = 40;i<=radius;i=i+50){
        plinkos.push(new Plinko(i,75));	
      }
    }
}