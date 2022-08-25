import {canvasSetUp} from "./canvas.js";
import {canvasContext} from "./canvas.js";
import {canvas} from "./canvas.js";
import {player} from "./player.js";
import {fruit} from "./fruit.js";
const gravity=0.2;
const velocityx=0;
const velocityY=0;
//import {update} from "./player.js";
const init= ()=>{
canvasSetUp(canvas,canvasContext);
const Player2 = new player(canvasContext, canvas.width/2,canvas.height-150,10,150,10)
Player2.move(canvasContext,gravity,velocityx,velocityY)
const apple = new fruit(canvasContext,Math.random()*canvas.width,0,20,20,10)
apple.move(canvasContext,gravity,velocityx,velocityY)
// Player2.ObjectMove()
}
document.addEventListener("DOMContentLoaded",init)
