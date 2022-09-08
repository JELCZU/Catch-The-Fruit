import {canvas} from "./canvas.js";
import {canvasContext} from "./canvas.js";
import {object} from "./object.js";
export class player extends object{
  constructor(myConfig, x, y, width,height)
  {
   super(myConfig, x, y, width,height)
   this.keys={
    a:{
      pressed:false
    },
    d:{
      pressed:false
    },
    w:{
      pressed:false
    }
  }
  this.keysStatus()
   this.ObjectMove();
  }
 
  keysStatus(){
    window.requestAnimationFrame(()=>this.keysStatus()) 
    if(this.keys.a.pressed ){
     this.velocity.x=-10  
    }
    else if(this.keys.d.pressed){
     this.velocity.x=10
    }
    else this.velocity.x=0;
    if(this.keys.w.pressed&&(this.position.y==canvas.height-this.height)){
     this.velocity.y=-10
    }
  }
  
  ObjectMove(){

    window.addEventListener('keydown',(event)=>{
      switch (event.key){     
        case "d":
          this.keys.d.pressed=true      
        break
        case "a":
          this.keys.a.pressed=true
        break
        case "w":
          this.keys.w.pressed=true
        break
        }
      })
  
      window.addEventListener('keyup',(event)=>{
        switch (event.key){
          case "d":
            this.keys.d.pressed=false
          break
          case "a":
            this.keys.a.pressed=false
          break
          case "w":
            this.keys.w.pressed=false  
          break
          
          }
        })
    }
}
