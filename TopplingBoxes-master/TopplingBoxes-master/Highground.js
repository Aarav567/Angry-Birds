class HighGround{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            friction:8

        }


        this.x=x
        this.y=y
        this.width=w
        this.height=h

        this.body=Bodies.rectangle(x,y,width,height, options)
        World.add(world,this.body)

    }

    display(){
        var highgroundpos=this.body.position




        rectMode(CENTER)

        fill ("brown")
        rect(highgroundpos.x,highgroundpos.y,this.width,this.height)


    }

}