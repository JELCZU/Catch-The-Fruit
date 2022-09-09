export const canvas=document.querySelector('canvas')
export const canvasContext= canvas.getContext('2d')
export function canvasSetUp(){
// canvas.width=innerWidth*0.9
// canvas.height=innerHeight*0.9
canvas.width=1280
canvas.height=720
canvas.style.borderStyle="solid"
canvasRefresh();
}
function canvasRefresh(){
  window.requestAnimationFrame(canvasRefresh)
  drawBgImg();
}
function drawBgImg() {
  let bgImg = new Image();
  bgImg.src = '/src/img/backgroundMeadow.jpg';
  // bgImg.src = '/src/img/Brown.jpg';
  // bgImg.onload = () => {
    
  //   const animationId=canvasContext.drawImage(bgImg, 0, 0, bgImg.width, bgImg.height);
  // }
    const animationId=canvasContext.drawImage(bgImg, 0, 0, bgImg.width, bgImg.height);
}


export class canvasGameBoard{
  constructor(){
  canvas.width=innerWidth*0.9
  canvas.height=innerHeight*0.9
  canvas.style.borderStyle="solid"
  // canvas.style.background="./img/backgroundMeadow.jpg"
  // canvas.style.background="./img/Brown.jpg"
  this.canvasRefresh();
  }

  canvasRefresh(){
    window.requestAnimationFrame(()=>this.canvasRefresh)
    this.drawBgImg();
  }
  drawBgImg() {
    // let bgImg = new Image();
    // //bgImg.src = '/src/img/backgroundMeadow.jpg';
    // bgImg.src = '/src/img/Brown.jpg';
    // bgImg.onload = () => {
    //   const animationId=canvasContext.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
    // }
  }
}