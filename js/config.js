export class config{
  constructor(){
  this.canvas={
    width:1280,
    height:720,
    imageSource:'./img/Background.png'
  }
  this.gravity=0.1;
  this.fruitsMaxRespawnTime=3000//in ms
  this.fruitsMinRespawnTime=1000    //in ms
  this.player={
    startScore:0,
    imageSource:"./img/Player.png",
    framesMax:11
  }
  this.fruitsTypes = [
    {
      name : "Apple",
      score : 10,
      imageSource:"./img/Apple.png",
      framesMax:1
    },
    {
      name : "Cherry",
      score : 15,
      imageSource:"./img/Cherries.png",
      framesMax:1
  },
    {
      name : "Banana",
      score : 20,
      imageSource:"./img/Bananas.png",
      framesMax:1
    },
    {
      name : "Orange",
      score : 30,
      imageSource:"./img/Orange.png",
      framesMax:1
    },
]
  }
}