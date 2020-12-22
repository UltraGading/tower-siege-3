const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var ground1, ground2, ground3;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16
var box17, box18, box19, box20, box21, box22, box23, box24, box25
var ball
var slingshot;
var polygonIMG
var score = 0

function preload() {
polygonIMG=loadImage('polygon.png');
}

function setup() {
createCanvas(1200,800);
engine = Engine.create();
world = engine.world;
Engine.run(engine)
ground1 = new Stand(500,520,235,20);
ground2 = new Stand(900,250,235,20);
ground3 = new Stand(600,750,1200,20);
box1 = new Block(410,500,30,40);
box2 = new Block(440,500,30,40);
box3 = new Block(470,500,30,40);
box4 = new Block(500,500,30,40);
box5 = new Block(530,500,30,40);
box6 = new Block(560,500,30,40);
box7 = new Block(590,500,30,40);
box8 = new Block(440,460,30,40);
box9 = new Block(470,460,30,40);
box10 = new Block(500,460,30,40);
box11 = new Block(530,460,30,40);
box12 = new Block(560,460,30,40);
box13 = new Block(470,420,30,40);
box14 = new Block(500,420,30,40);
box15 = new Block(530,420,30,40);
box16 = new Block(500,380,30,40);
box17 = new Block(840,225,30,40);
box18 = new Block(870,225,30,40);
box19 = new Block(900,225,30,40);
box20 = new Block(930,225,30,40);
box21 = new Block(960,225,30,40);
box22 = new Block(870,185,30,40);
box23 = new Block(900,185,30,40);
box24 = new Block(930,185,30,40);
box25 = new Block(900,145,30,40);
ball = Bodies.circle(80,530,20);
World.add(world,ball);
slingshot = new SlingShot(ball,{x:80,y:530});
Engine.run(engine);
}

function draw() {
background(0);
text("Score: "+score, 750,40) 
ground1.display();
ground2.display();
ground3.display();
fill("lightgreen");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill("lightblue");
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
fill("pink")
box13.display();
box14.display();
box15.display();
fill("orange");
box16.display();
fill("lightgreen");
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
fill("lightblue");
box22.display();
box23.display();
box24.display();
fill("pink");
box25.display();
box1.score()
box2.score()
box3.score()
box4.score()
box5.score()
box6.score()
box7.score()
box8.score()
box9.score()
box10.score()
box11.score()
box12.score()
box13.score()
box14.score()
box15.score()
box16.score()
box17.score()
box18.score()
box19.score()
box20.score()
box21.score()
box22.score()
box23.score()
box24.score()
box25.score()
imageMode(CENTER)
image(polygonIMG ,ball.position.x,ball.position.y,40,40);
slingshot.display();
}
function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
slingshot.fly();
}
function keyPressed(){
if(keyCode == 82){
slingshot.attach(this.ball)
}
}

    