import {canvas, canvasContext} from "./canvas.js";
import {object} from "./object.js";
export class player extends object{
  constructor(myConfig, x, y, width,height)
  {
   super(myConfig, x, y, width,height)
   this.score=myConfig.player.startScore
   this.image.src=myConfig.player.imageSource
   this.framesMax=myConfig.player.framesMax
   this.scale=3
   this.width=this.image.width/this.framesMax*this.scale
   this.height=this.image.height*this.scale
   this.position.x=canvas.width/2-this.width/2
   this.keys={
    a:{
      pressed:false
    },
    d:{
      pressed:false
    },
    w:{
      pressed:false
    },
    s:{
      pressed:false
    }
  }
   this.playerControl();
   this.keysStatus()
  }
 
  playerControl(){
    window.requestAnimationFrame(()=>this.playerControl()) 
    if(this.keys.a.pressed ){
     this.velocity.x=-15  
    }
    else if(this.keys.d.pressed){
     this.velocity.x=15
    }
    else this.velocity.x=0;
    if(this.keys.w.pressed&&(this.position.y==canvas.height-this.height)){
     this.velocity.y=-10
    }
    else if(this.keys.s.pressed){
      this.velocity.y=this.velocity.y+2
     }
  }
  
  keysStatus(){

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
        case "s":
          this.keys.s.pressed=true
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
          case "s":
            this.keys.s.pressed=false  
          break
          }
        })
    }
}
