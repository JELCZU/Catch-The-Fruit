import {object} from "./object.js";
import {canvas, canvasContext} from "./canvas.js";
import {player} from "./player.js";
export const fruits=[]
export function spawnFruits(myConfig,Player1){

mySpawnFunction()
CheckFruitsposition.apply(null,Player1)

function mySpawnFunction() {
    fruits.push(new fruit(myConfig, Math.random()*canvas.width,0,10,50))
    
    setTimeout(mySpawnFunction,Math.random()*(myConfig.frutsMaxRespawnTime-myConfig.frutsMinRespawnTime)+myConfig.frutsMinRespawnTime);

  }
function CheckFruitsposition(){

  window.requestAnimationFrame(CheckFruitsposition)
  if (fruits.length>0){ 

    fruits.forEach((fruit,index)=>{
      CheckFruitsHitGround(fruit,index)
      if (fruits.length>0){ 
      CheckFruitsHitPlayer(fruit,index)
      } 
},Player1)
  }
}
function CheckFruitsHitGround(fruit,index){
if(fruit.position.y+fruit.height>=canvas.height){
  // console.log("hit ground-game over"+index)
}
}
function CheckFruitsHitPlayer(fruit,index){

  if((fruit.position.x+fruit.width>=Player1.position.x)&&(fruit.position.x<=Player1.position.x+Player1.width)&&(fruit.position.y+fruit.height>=Player1.position.y)&&(fruit.position.y<=Player1.position.y+Player1.height)){
    console.log("Player1 gets Score")
    scoreP1.scorePoints(Player1,fruit)
    fruits[index].endAnimation();
    fruits.splice(index, 1)
  }
  }
}