class Stand{
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
        this.image=loadImage("sprites/wood2.png")

        World.add(world, this.body)



    }


    display(){


        var standpos=this.body.position

        imageMode(CENTER)

        fill("brown")
        image(this.image,standpos.x,standpos.y,this.width,this.height)




    }

}