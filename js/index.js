import {canvasSetUp} from "./canvas.js";
import {canvasContext} from "./canvas.js";
import {canvas} from "./canvas.js";
import {object} from "./object.js";
import {player} from "./player.js";
import {fruit} from "./fruit.js";
const gravity=0.2;
const velocityx=0;
const velocityY=0;
//import {update} from "./player.js";
const init= ()=>{
canvasSetUp(canvas,canvasContext);
// const apple = new fruit(canvasContext);
// const player1 = new player(canvasContext,0,0);
// const Player2 = new object(canvasContext, 500,0,10,150)
const Player2 = new player(canvasContext, 500,0,10,150)
Player2.move(canvasContext,gravity,velocityx,velocityY)
const Fruit1 = new fruit(canvasContext, 300,0,20,50)
Fruit1.move(canvasContext,gravity,velocityx,velocityY)
// Player2.ObjectMove()
}
document.addEventListener("DOMContentLoaded",init)