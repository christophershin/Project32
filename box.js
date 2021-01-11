class Box {
    constructor(x, y, width, height){
      this.Visibility=225;
     var options={
        'restitution':0.8,
        'friction':0.5,
        'density':0.5
     }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width = width;
      this.height = height;
    }

    score(){
      if(this.visibility<0&& this.visibility>-105){
        score++;
      }
    }
    display(){
if (this.body.speed>3){
World.remove(world,this.body)
}
else{
  World.add(world,this.body);
  push()
  this.Visibility=this.Visibility -5
  tint(225,this.Visiblity);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
  pop ();
}
        var angle = this.body.angle;
      
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       
    

    }
  }