import {fruit} from "./fruit.js";
import {config} from "./config.js";
import {canvas, canvasContext} from "./canvas.js";
import {scorePoints} from "./scores.js";
//const fruits=[]
export class gameMode1{
  constructor(myConfig,Player1){
  this.myConfig=myConfig
  this.Player1=Player1
    this.fruits=[]
    this.spawnFruits()
    this.CheckFruitsposition()
    }
  spawnFruits(){
    this.fruits.push(new fruit(this.myConfig, Math.random()*canvas.width,0,10,50))
    this.SpawnTimeoutId=setTimeout(() => {this.spawnFruits()},Math.random()*(this.myConfig.fruitsMaxRespawnTime-this.myConfig.fruitsMinRespawnTime)+this.myConfig.fruitsMinRespawnTime,this.myConfig);
  }
  CheckFruitsposition(){
    window.requestAnimationFrame(() =>this.CheckFruitsposition())
    if (this.fruits.length>0){ 
      this.fruits.forEach((fruit,index)=>{
        this.CheckFruitsHitGround(fruit,index)
        if (this.fruits.length>0){ 
        this.CheckFruitsHitPlayer(fruit,index)
        } 
      })
    }
  }
  CheckFruitsHitGround(fruit,index){
    if(fruit.position.y+fruit.height>=canvas.height){
      clearTimeout(this.SpawnTimeoutId);
      this.fruits.forEach((fruit,index)=>{
        this.fruits[index].endAnimation()
      })
      this.emptyFruits=[]
      this.fruits=this.emptyFruits
      document.querySelector('#displayText').innerHTML = 'Game over!!!'
    }
  }
  CheckFruitsHitPlayer(fruit,index){
    if((fruit.position.x+fruit.width>=this.Player1.position.x)&&(fruit.position.x<=this.Player1.position.x+this.Player1.width)&&(fruit.position.y+fruit.height>=this.Player1.position.y)&&(fruit.position.y<=this.Player1.position.y+this.Player1.height)){
      scorePoints(this.Player1,fruit)
      this.fruits[index].endAnimation();
      this.fruits.splice(index, 1)
    }
    }

}
