import { canvas, canvasContext } from "./canvas.js";

// eslint-disable-next-line import/prefer-default-export
export class object {
  constructor(myConfig, x, y, width, height) {
    this.score = 10;
    this.gravity = myConfig.gravity;
    this.position = {
      x,
      y,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = width;
    this.height = height;
    this.color = "blue";
    this.image = new Image();
    this.image.src = "./img/Graphic-Not-Found.png";
    this.framesMax = 1;
    this.scale = 2;
    this.image.onload = () => {
      this.width = (this.image.width / this.framesMax) * this.scale;
      this.height = this.image.height * this.scale;
    };
    // eslint-disable-next-line no-unused-expressions
    this.animationId;
    this.update();
  }

  draw() {
    // canvasContext.fillStyle=this.color
    // canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height)
    canvasContext.drawImage(
      this.image,
      0,
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x,
      this.position.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }

  update() {
    // console.log("this y: "+ this.position.y)
    // console.log("canvas height: "+canvas.height)
    this.animationId = window.requestAnimationFrame(() => this.update());
    if (
      this.position.x + this.width + this.velocity.x >= canvas.width &&
      this.velocity.x > 0
    ) {
      this.velocity.x = 0;
      this.position.x = canvas.width - this.width;
    }
    if (this.position.x + this.velocity.x < 0) {
      this.velocity.x = 0;
      this.position.x = 0;
    } else {
      this.position.x += this.velocity.x;
    }
    if (this.position.y + this.height + this.velocity.y >= canvas.height - 55) {
      this.position.y = canvas.height - this.height - 55;
      this.velocity.y = 0;
    } else {
      this.velocity.y += this.gravity;
      this.position.y += this.velocity.y;
    }
    this.draw();
  }

  endAnimation() {
    cancelAnimationFrame(this.animationId);
  }
}
