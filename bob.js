class Bob{

constructor(x, y){

var options= {

    'isStatic': true, 
    'restitution': 0.3, 
    'friction': 0.5, 
    'density': 1.2


}
this.body= Bodies.circle(x, y, 100, options);
this.radius= 100; 

//Matter.Body.setVelocity(this.body, {x:19, y:-8}); 

World.add(world, this.body);
}
display(){

var pos= this.body.position; 
var angle= this.body.angle;

push()
translate(pos.x, pos.y);
rotate(angle);
fill("purple");
ellipseMode(CENTER);
circle(0, 0, 100);
pop()
}
}











