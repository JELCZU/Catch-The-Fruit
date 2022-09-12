import {canvas, canvasContext} from "./canvas.js";
export class object{
  constructor(myConfig, x, y, width,height)
  {
    this.score=10
    this.gravity=myConfig.gravity
    this.position={
      x:x,
      y:y
    }
        this.velocity={
      x:0,
      y:0
    }
    this.width=width;
    this.height=height;
    this.velocityY=0;
    this.velocityX=0;
    this.color="blue";
    this.image=new Image()
    this.image.src="/src/img/Graphic-Not-Found.png"
    this.framesMax=1
    this.scale=2
    this.width=this.image.width/this.framesMax*this.scale
    this.height=this.image.height*this.scale
    this.animationId
    this.update();
  }
  draw(){

  canvasContext.fillStyle=this.color
  // canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height)
    // canvasContext.drawImage(this.image, this.position.x, this.position.y, this.image.width/this.framesMax, this.image.height/this.framesMax)
    canvasContext.drawImage(this.image,0,0, this.image.width/this.framesMax, this.image.height, this.position.x, this.position.y, this.image.width/this.framesMax*this.scale, this.image.height*this.scale)

}
  
  update(){
    this.animationId=window.requestAnimationFrame(()=>this.update())
    if(this.position.x+this.width+this.velocity.x>=canvas.width&&this.velocity.x>0){
      this.velocity.x=0;
      this.position.x=canvas.width-this.width
      }
    if(this.position.x+this.velocity.x<0){
      this.velocity.x=0;
      this.position.x=0
      }
    else{
    this.position.x=this.position.x+this.velocity.x;
    }
    if(this.position.y+this.height+this.velocity.y>=canvas.height){
      this.position.y=canvas.height-this.height;
    this.velocity.y=0;
    }
    else this.velocity.y+=this.gravity;
    this.position.y=this.position.y+this.velocity.y;
    this.draw()

  }
endAnimation(){
  cancelAnimationFrame(this.animationId)
}
  
  
}
  