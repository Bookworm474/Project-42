class Drop{
    constructor(x,y){
        var options = {
            friction: 0.1,
            static: false
        }

        this.body = Bodies.circle(x,y,2.5,options);
        World.add(world,this.body);
    }

    update(){
        if (this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400),y:random(0,400)})
        }
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,2.5,2.5);
        pop();
    }
}