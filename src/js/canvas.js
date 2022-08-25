export const canvas=document.querySelector('canvas')
export const canvasContext= canvas.getContext('2d')
export function canvasSetUp(canvas,canvasContext){
canvas.width=innerWidth*0.9
canvas.height=innerHeight*0.9
canvas.style.borderStyle="solid"
canvas.style.background="./img/backgroundMeadow.jpg"
canvasRefresh();
}
function canvasRefresh(){
  window.requestAnimationFrame(canvasRefresh)
  //canvasContext.clearRect(0,0,canvas.width, canvas.height);
  drawBgImg();
}
function drawBgImg() {
  let bgImg = new Image();
  bgImg.src = '/src/img/backgroundMeadow.jpg';
  bgImg.onload = () => {
    canvasContext.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
  }
}
;