
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1
var division1,division2,division3,division4,division5
//var plinkos =[];
var particles=[];
function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(240,800,480,20);
	division1 = new Division(75,700,2,180);
	division2 = new Division(150,700,2,180);
	division3 = new Division(225,700,2,180);
	division4 = new Division(300,700,2,180);
	division5 = new Division(375,700,2,180)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();


  

  /*for(var i = 15;i<=radius-10;i=i+50){
	plinkos.push(new Plinko(i,175));	
  }*/

}



