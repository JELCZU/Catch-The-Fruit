export class config{
  constructor(){
  this.gravity=0.1;
  this.fruitsMaxRespawnTime=3000//in ms
  this.fruitsMinRespawnTime=1000    //in ms
  this.playerStartScore=0;
  this.fruitsTypes = [
    {
        name : "Apple",
        score : 10,
        imageSource:"/src/img/Apple.png",
        framesMax:17
    },
    {
      name : "Banana",
      score : 20,
      imageSource:"/src/img/Bananas.png",
      framesMax:17
    },
    {
      name : "Orange",
      score : 30,
      imageSource:"/src/img/Orange.png",
      framesMax:17
    },
]
  }
}