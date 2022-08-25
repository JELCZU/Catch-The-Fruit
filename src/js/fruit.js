import {object} from "./object.js";
import {canvas, canvasContext} from "./canvas.js";
export class fruit extends object{
  constructor(canvasContext, x, y, width,height,points)
  {
   super(canvasContext, x, y, width,height,points)
   console.log(Math.random(0,canvas.width))
  }

}
const fruits=[]
fruits.push(new fruit(canvasContext,Math.random()*canvas.width,0,20,20))