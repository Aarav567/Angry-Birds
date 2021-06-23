class  Box{

    constructor(x,y,w,h){

        var options={
            isStatic:false,
            density:1,
            friction:8
        
        }

        this.x=x; 
        this.y=y;
        this.width=w;
        this.height=h;


        this.body=Bodies.rectangle(x,y,w,h,options)

        World.add(world,this.body)

    }


    display(){

       /* var boxpos=this.body.position;
        rectMode(CENTER);
        fill("yellow");
        stroke ("red");
        strokeWeight (5);
        rect(boxpos.x,boxpos.y,this.width,this.height); 
        */

        var boxpos=this.body.position;
        var angle=this.body.angle;
        push ();
        rectMode(CENTER);
        rotate (angle);
        translate(boxpos.x,boxpos.y);
        fill("yellow");
        stroke ("red");
        strokeWeight (5);
        rect(0,0,this.width,this.height); 
        pop ();
    }




}