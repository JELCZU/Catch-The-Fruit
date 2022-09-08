import {canvasSetUp} from "./canvas.js";
import {canvasContext} from "./canvas.js";
import {spawnFruits} from "./fruit.js";
import {canvas} from "./canvas.js";
import {config} from "./config.js";
import {player} from "./player.js";
import {score} from "./scores.js";

//import {update} from "./player.js";
const init= ()=>{
 const myConfig= new config()
canvasSetUp(canvas,canvasContext);
const Player1 = new player(myConfig, canvas.width/2,canvas.height-150,50,100)
spawnFruits(myConfig,Player1)
const scoreP1 = new score(myConfig,Player1)
}
document.addEventListener("DOMContentLoaded",init)
