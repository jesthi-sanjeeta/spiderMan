var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 

var score =0;
var count = 0;
var gameState ="start";
var webclicked=0;
var webnets=[]

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   spider= new Spider(100,700,50,50);
   box1= new Box(100,100,60,60)
   box2= new Box(300,100,60,60)
   box3= new Box(500,100,60,60)
   box4= new Box(700,100,60,60)
    
}
 
function draw() {
  background("white");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  
  Engine.update(engine);
  spider.display()
  ground.display();
  box1.display();
  box2.display();
  box3.display()
  box4.display()
  if(webclicked===1)
  webnets[webnets.length-1].display()

 
}


function mousePressed()
{
    console.log("Web");
    webclicked=1
  //var web = new Web(spider.body,{x:mouseX,y:mouseY});
  webnets.push(new Web(spider.body,{x:mouseX,y:mouseY}))
  //web.display()
}