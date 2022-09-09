import {object} from "./object.js";
import {canvas, canvasContext} from "./canvas.js";
import {scorePoints} from "./scores.js";
export class fruit extends object{
  constructor(myConfig, x, y, width,height)
  {
   super(myConfig, x, y, width,height)
      this.fruitType=Math.round(Math.random()*(myConfig.fruitsTypes.length-1)+1)
   this.score=myConfig.fruitsTypes[this.fruitType-1].score
   console.log(this.score)
   this.sprite.src='/src/img/Brown.jpg'
   console.log(this.sprite)

  }
  keysStatus(){}
  ObjectMove(){}

}