import {canvas,canvasContext,canvasSetUp,canvasGameBoard} from "./canvas.js";
import {config} from "./config.js";
import {player} from "./player.js";
import { gameMode1 } from "./gameMode1.js";
import {updateScore} from "./scores.js";

const init= ()=>{
  const myConfig= new config()
  const myCanvasGameBoard=new canvasGameBoard(myConfig)
  const Player1 = new player(myConfig, canvas.width/2,canvas.height-150,50,100)
  const MygameMode1=new gameMode1(myConfig,Player1)
  updateScore(Player1)
}
document.addEventListener("DOMContentLoaded",init)
