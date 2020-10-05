const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles=[]
var plinko=[]
var div=[]
var Dheight=300
var score=0
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(width/2,height,width,20)

   for(var k=0;k<=width;k=k+80)
{
  div.push(new division(k,height-Dheight/2,10,Dheight))
 

}
for(var j=75;j<=width;j=j+50)
{
  plinko.push(new plinko(j,75))

}
for(var j=75;j<=width-10;j=j+50)
{
  plinko.push(new plinko(j,175))

}

for(var j=50;j<=width;j=j+50)
{
  plinko.push(new plinko(j,275))

}
}

function draw(){
    background(bgimage);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
}