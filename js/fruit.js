import {object} from "./object.js";
import {canvas, canvasContext} from "./canvas.js";
import {scorePoints} from "./scores.js";
export class fruit extends object{
  constructor(myConfig, x, y, width,height)
  {
   super(myConfig, x, y, width,height)
      this.fruitType=Math.round(Math.random()*(myConfig.fruitsTypes.length-1)+1)
   this.score=myConfig.fruitsTypes[this.fruitType-1].score
   this.image.src=myConfig.fruitsTypes[this.fruitType-1].imageSource
   this.framesMax=myConfig.fruitsTypes[this.fruitType-1].framesMax
   this.scale=4
   this.width=this.image.width/this.framesMax*this.scale
   this.height=this.image.height*this.scale

  }
  keysStatus(){}
  ObjectMove(){}

}