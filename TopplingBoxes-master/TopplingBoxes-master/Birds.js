class Bird{
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
this.image=loadImage("sprites/bird.png")
World.add(world,this.body)
}

display(){


    var  birdpos=this.body.position
    birdpos.x=mouseX
    birdpos.y=mouseY
    imageMode(CENTER)

    fill ("red")
    image(this.image,birdpos.x,birdpos.y,this.width,this.height)


}




}