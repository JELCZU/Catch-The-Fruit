import {canvas,canvasContext,canvasSetUp} from "./canvas.js";
import {spawnFruits} from "./fruit.js";
import {config} from "./config.js";
import {player} from "./player.js";
import { updateScore } from "./scores.js";

const init= ()=>{
 const myConfig= new config()
canvasSetUp(canvas,canvasContext);
const Player1 = new player(myConfig, canvas.width/2,canvas.height-150,50,100)
spawnFruits(myConfig,Player1)
updateScore(Player1)
}
document.addEventListener("DOMContentLoaded",init)
