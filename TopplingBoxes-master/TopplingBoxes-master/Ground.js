class  Ground
{

//creating a constructor to store the properties of the ground
constructor(x,y,width,height){

//storing the physical properties
var  properties={
    isStatic:true,
    friction:8
}

//storing the natural properties
this.x=x;
this.y=y;
this.width=width;
this.height=height;

//creating a sprite which is called body(pen, paper, humanbeings)
this.body=Bodies.rectangle(x,y,width,height, properties);

//adding the body to the world
World.add(world,this.body)
}

//to display the objects on the screen
display(){
//storing the position 
var  groundpos=this.body.position
//to place the object in the middle of the screen
rectMode(CENTER)

fill ("brown")
rect(groundpos.x,groundpos.y,this.width,this.height)

}




}