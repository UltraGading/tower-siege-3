class Block{
constructor(x, y, width, height) {
var options = {
isStatic: false,
'restitution':0.8,
'friction':0,
'density':0.01
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
this.visibility = 255;
World.add(world, this.body);
}
score(){
if(this.visibilty < 0 && this.visibility > -105){
score=score+1;
}
}
display(){
console.log(this.body.speed)
if(this.body.speed < 3){
var pos =this.body.position;
var angle = this.body.angle;
push()
translate(pos.x, pos.y);
rotate(angle);
rectMode(CENTER);
fill('#6cffe9');
rect(0, 0, this.width, this.height);
pop()
}
else{
World.remove(world, this.body)
push()
this.visibility = this.visibility-5;
tint(255,this.visibility)
pop()
}

}
}