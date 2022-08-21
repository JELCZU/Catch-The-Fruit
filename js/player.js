import {object} from "./object.js";
export class player extends object{
  constructor(canvasContext, x, y, width,height)
  {
   super(canvasContext, x, y, width,height)
   this.ObjectMove();
  }

}
