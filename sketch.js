const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var lightning, lightningFrame = null;
var lightning1, lightning2, lightning3, lightning4;
var bat, batAnimation;
var umbrella;
var rain = [], maxDrops = 100;

var rand;



var thunderCreatedFrame=0;

function preload(){
	lightning1 = loadImage("1.png");
	lightning2 = loadImage("2.png");
	lightning3 = loadImage("3.png");
	lightning4 = loadImage("4.png");

	batAnimation = loadAnimation("bat1.png","bat2.png","bat3.png",
		"bat4.png","bat5.png","bat6.png",
		"bat7.png","bat8.png","bat9.png",
		"bat10.png","bat11.png","bat12.png");
}

function setup(){
	engine = Engine.create();
	world = engine.world;

	createCanvas(400,700);
	umbrella = new Umbrella(200,500);

	//create drops
	for (var i = 0; i<maxDrops; i++){
        rain.push(new Drop(random(0,400),random(0,400)));
    }    
}

function draw(){
	Engine.update(engine);
	background(0); 

	//creating thunder
	rand = Math.round(random(1,4));
	if(frameCount%80===0){
		lightningFrame = frameCount;
		lightning = createSprite(random(10,370), random(10,30), 10, 10);
		switch(rand){
			case 1: lightning.addImage(lightning1);
				break;
			case 2: lightning.addImage(lightning2);
				break; 
			case 3: lightning.addImage(lightning3);
				break;
			case 4: lightning.addImage(lightning4);
				break;
			default: break;
		}
		lightning.scale = random(0.3,0.6)
	}

	if(lightningFrame + 10 === frameCount && lightning){
		lightning.destroy();
	}
	
	bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
	bat.addAnimation("moving_bat",batAnimation);
	bat.visible = false;
	if(frameCount % 100 === 0){
		bat.visible = true;
		bat.velocityX = Math.round(random(-4,4));
		bat.velocityY = Math.round(random(-4,4));
		bat.scale=0.4;
	}

	umbrella.display();

	//display rain drops
	for (var i = 0; i<maxDrops; i++){
        //draw 100 raindrops
        rain[i].display();
        //update position of raindrops when they fall out of canvas
        rain[i].update();
    }

	drawSprites();
}   

