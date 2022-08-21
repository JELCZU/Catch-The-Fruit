import {canvas} from "./canvas.js";
import {canvasContext} from "./canvas.js";
export class object{
  constructor(canvasContext, x, y, width,height)
  {
    this.x=x
    this.y=y
    this.width=width;
    this.height=height;
    this.velocityY=0;
    this.velocityX=0;
    this.draw(canvasContext,x);
    // this.ObjectMove();
  }
  draw(canvasContext,x,y){
    this.color="red";
  canvasContext.fillStyle=this.color
  canvasContext.fillRect(x, y, this.width, this.height)
  }
  
  move(canvasContext, gravity, velocityX,velocityY){
    window.requestAnimationFrame(()=>this.move(canvasContext, gravity, velocityX,velocityY))
    canvasContext.clearRect(0,0,canvas.width, canvas.height);
    if(this.x+this.width+this.velocityX>=canvas.width&&this.velocityX>0){
      this.velocityX=0;
      this.x=canvas.width-this.width
      }
    if(this.x+this.velocityX<0){
      this.velocityX=0;
      this.x=0
      }
    else{
    this.x=this.x+this.velocityX;
    }
    if(this.y+this.height+velocityY>=canvas.height){
    velocityY=0;
    }
    else velocityY+=gravity*gravity
    this.y=this.y+velocityY;
    this.draw(canvasContext,this.x,this.y)
  }
  ObjectMove(){
 
  window.addEventListener('keyup',(event)=>{
    console.log(event.key);
    event.key=="ArrowRight"? this.velocityX=0:""
    event.key=="ArrowLeft"? this.velocityX=0:""
  })
  window.addEventListener('keydown',(event)=>{
    console.log(event.key);
    event.key=="ArrowRight"? this.velocityX=10:""
    event.key=="ArrowLeft"? this.velocityX=-10:""
  })
  }
  
}
  