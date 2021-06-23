class Pig{
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
    this.image=loadImage("sprites/enemy.png")
    World.add(world, this.body)


}

display(){


    var Pigpos=this.body.position

    imageMode(CENTER)

    fill ("green")
    image(this.image,Pigpos.x,Pigpos.y,this.width, this.height)


}

}