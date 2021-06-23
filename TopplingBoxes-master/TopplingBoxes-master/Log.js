class Log{
    constructor(x,y,w,h){
        var options={
           isStatic:false,
            density:1,
            friction:8
        }
        

        this.x=x
        this.y=y
        this.width=w
        this.height=h


        this.body=Bodies.rectangle(x,y,w,h,options)
        this.image=loadImage("sprites/wood1.png")
        World.add(world, this.body)

    }

    display(){
        var logpos=this.body.position



        fill ("brown")
        imageMode(CENTER)
        image(this.image,logpos.x,logpos.y,this.width,this.height)


    }




}