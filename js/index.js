export const menuBlock=document.querySelector('#menuBlock')
export const elementMenu=document.querySelector('#elementMenu')
export const startBtn=document.querySelector('#startGameBtn')
export const howToPlayBtn=document.querySelector('#howToPlayBtn')
export const howToPlayBlock=document.querySelector('#howToPlayBlock')
export const howToPlayCloseBtn=document.querySelector('#howToPlayCloseBtn')
import {canvas,canvasContext,canvasGameBoard} from "./canvas.js";
import {config} from "./config.js";
import {player} from "./player.js";
import {gameMode1} from "./gameMode1.js";


  const myConfig= new config()
  const myCanvasGameBoard=new canvasGameBoard(myConfig)
  const Player1 = new player(myConfig, canvas.width/2,canvas.height-150,50,200)
  const MygameMode1=new gameMode1(myConfig,Player1)

window.addEventListener("click",(event)=>{
  if(event.target==startBtn){
  MygameMode1.startGame()
  }
  if(event.target==howToPlayBtn)
  {
    howToPlayBlock.style.display="block"
  }
  if(event.target==howToPlayCloseBtn)
  {
    howToPlayBlock.style.display="none"
  }
})