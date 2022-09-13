export class config{
  constructor(){
  this.canvas={
    width:1280,
    height:720,
    imageSource:'/src/img/Background_2.png'
  }
  this.gravity=0.1;
  this.fruitsMaxRespawnTime=3000//in ms
  this.fruitsMinRespawnTime=1000    //in ms
  this.player={
    startScore:0,
    imageSource:"/src/img/Player.png",
    framesMax:11
  }
  this.fruitsTypes = [
    {
      name : "Apple",
      score : 10,
      imageSource:"/src/img/Apple.png",
      framesMax:1
    },
    {
      name : "Cherry",
      score : 15,
      imageSource:"/src/img/Cherries.png",
      framesMax:1
  },
    {
      name : "Banana",
      score : 20,
      imageSource:"/src/img/Bananas.png",
      framesMax:1
    },
    {
      name : "Orange",
      score : 30,
      imageSource:"/src/img/Orange.png",
      framesMax:1
    },
]
  }
}