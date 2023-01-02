export const canvas = document.querySelector("canvas");
export const canvasContext = canvas.getContext("2d");
export class canvasGameBoard {
  constructor(config) {
    canvas.width = config.canvas.width;
    this.width = config.canvas.width;
    canvas.height = config.canvas.height;
    this.height = config.canvas.height;
    this.bgImage = new Image();
    this.bgImage.src = config.canvas.imageSource;
    this.bgPointer = {
      x: 0,
      y: 0,
    };
    this.canvasRefresh();
  }

  canvasRefresh() {
    window.requestAnimationFrame(() => this.canvasRefresh());
    this.drawBgImage();
  }

  drawBgImage() {
    this.bgPointer.x = 0;
    this.bgPointer.y = 0;

    canvasContext.drawImage(
      this.bgImage,
      0,
      0,
      this.bgImage.width,
      this.bgImage.height,
      this.bgPointer.x,
      this.bgPointer.y,
      this.width,
      this.height
    );
  }
}
