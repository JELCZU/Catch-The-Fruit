export class config{
  constructor(){
  this.gravity=0.1;
  this.frutsMaxRespawnTime=4000//in ms
  this.frutsMinRespawnTime=1000    //in ms
  this.appleScore=10;
  this.bananaScore=10;
  this.orangeScore=10;
  this.playerStartPoints=0;
  this.fruitsTypes = [
    {
        name : "Apple",
        score : 10,
        graphicSource:""
    },
    {
      name : "Banana",
      score : 20,
      graphicSource:""
    },
    {
      name : "Orange",
      score : 30,
      graphicSource:""
    },
]
  }
}