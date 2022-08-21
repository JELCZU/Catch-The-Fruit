export const canvas=document.querySelector('canvas')
export const canvasContext= canvas.getContext('2d')
export function canvasSetUp(canvas,canvasContext){
canvas.width=innerWidth*0.9
canvas.height=innerHeight*0.9
canvas.style.borderStyle="solid"
canvas.style.background="./img/backgroundMeadow.jpg"
}