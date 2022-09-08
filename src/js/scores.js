export const scoreElement=document.querySelector('#scoreElement')
export class score{
  constructor(myConfig,Player){
    scoreElement.innerHTML=Player.score
  }
scorePoints(Player,Fruit){
  Player.score+=Fruit.score
  scoreElement.innerHTML=Player.score
}
  }