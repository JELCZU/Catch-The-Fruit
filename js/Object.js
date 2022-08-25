import {canvas} from "./canvas.js";
import {canvasContext} from "./canvas.js";
export class object{
  constructor(canvasContext, x, y, width,height,points)
  {
    this.points=points
    this.x=x
    this.y=y
    this.width=width;
    this.height=height;
    this.velocityY=0;
    this.velocityX=0;
    // this.move;
  }
  draw(canvasContext,x,y){
    this.color="red";
  canvasContext.fillStyle=this.color
  canvasContext.fillRect(x, y, this.width, this.height)
  }
  
  move(canvasContext, gravity){
    window.requestAnimationFrame(()=>this.move(canvasContext, gravity))
    // canvasContext.clearRect(0,0,canvas.width, canvas.height);
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
    if(this.y+this.height+this.velocityY>=canvas.height){
      this.y=canvas.height-this.height;
    this.velocityY=0;
    }
    else this.velocityY+=gravity;
    this.y=this.y+this.velocityY;
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
  window.addEventListener('keydown',(event)=>{
    console.log(event.key);
    event.key=="ArrowUp"? this.velocityY=-10:""
    //event.key=="ArrowLeft"? this.velocityX=-10:""
  })
  }
  
}
  