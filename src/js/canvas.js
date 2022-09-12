export const canvas=document.querySelector('canvas')
export const canvasContext= canvas.getContext('2d')
export function canvasSetUp(config){
canvas.width=config.canvas.width
canvas.height=config.canvas.height
canvas.style.borderStyle="solid"
canvasRefresh();
}
function canvasRefresh(){
  window.requestAnimationFrame(canvasRefresh)
  drawBgImg();
}
function drawBgImg() {
  let bgImg = new Image()
  bgImg.src = '/src/img/backgroundMeadow.jpg'
  canvasContext.drawImage(bgImg, 0, 0, bgImg.width, bgImg.height)
}


export class canvasGameBoard{
  constructor(config){
    canvas.width=this.width=config.canvas.width
    canvas.height=this.height=config.canvas.height
    this.bgImage=new Image()
    this.bgImage.src=config.canvas.imageSource
    this.bgPointer={
      x:0,
      y:0
    }
  this.canvasRefresh();
  }

  canvasRefresh(){
    window.requestAnimationFrame(()=>this.canvasRefresh())
    this.drawBgImage();
  }
  drawBgImage() {
    
    canvasContext.drawImage(this.bgImage,0,0, this.bgImage.width, this.bgImage.height, 0, 0, this.bgImage.width, this.bgImage.height)

      // this.animationId=canvasContext.drawImage(this.bgImage, 0, 0, canvas.width, canvas.height);
  
  }
}