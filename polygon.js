class Polygon {
    constructor(x, y, width, height){
     var options={
        'restitution':0.8,
        'friction':0.5,
        'density':0.5
     }
    polygon=Bodies.circle(50,200,20,options);
    World.add(world,polygon);

slingshot= new SlingShot(this.polygon,{x:100,y:200})
    }
    display(){

        imageMode (CENTER)
        image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    }
  }