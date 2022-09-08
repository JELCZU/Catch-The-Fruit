import { playGetPointMusic } from "./sound.js"
export const scoreElement=document.querySelector('#scoreElement')
export function updateScore(Player){
    scoreElement.innerHTML=Player.score
  }
export function scorePoints(Player,Fruit){
  Player.score+=Fruit.score
  updateScore(Player)
  playGetPointMusic()
}