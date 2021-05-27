class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.brad = loadImage("walking_1.png");
        this.bestman = loadImage("Bestman-01.png")
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        if (frameCount >= 100){
            image(this.bestman,pos.x,pos.y+70,300,300);
        }
        else{
            image(this.brad,pos.x,pos.y+70,300,300);
        }
    }
}
