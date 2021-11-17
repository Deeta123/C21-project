class ground{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        World.add(world,this.body);
    }
    display() {
        var ground_position = this.body.position
        push();
        translate(ground_position.x,ground_position.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill(255,255,0);
        rect(0,0,this.width,this.height)
        pop();
    }
    
}
