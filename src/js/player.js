import { canvas } from "./canvas.js";
import { object } from "./object.js";

// eslint-disable-next-line import/prefer-default-export
export class player extends object {
  constructor(myConfig, x, y, width, height) {
    super(myConfig, x, y, width, height);
    this.score = myConfig.player.startScore;
    this.image.src = myConfig.player.imageSource;
    this.framesMax = myConfig.player.framesMax;
    this.scale = 3;
    this.image.onload = () => {
      this.width = (this.image.width / this.framesMax) * this.scale;
      this.height = this.image.height * this.scale;
      this.position.x = canvas.width / 2 - this.width / 2;
    };

    this.position.y = 400;
    this.keys = {
      a: {
        pressed: false,
      },
      d: {
        pressed: false,
      },
      w: {
        pressed: false,
      },
      s: {
        pressed: false,
      },
    };
    this.playerControl(myConfig);
    this.keysStatus();
  }

  playerControl(myConfig) {
    window.requestAnimationFrame(() => this.playerControl(myConfig));
    if (this.keys.a.pressed) {
      this.velocity.x = -myConfig.canvas.width / 60;
    } else if (this.keys.d.pressed) {
      this.velocity.x = myConfig.canvas.width / 60;
    } else this.velocity.x = 0;
    if (
      this.keys.w.pressed &&
      this.position.y ===
        canvas.height - this.height - myConfig.canvas.height / 15
    ) {
      this.velocity.y = -myConfig.canvas.height / 75;
    } else if (this.keys.s.pressed) {
      this.velocity.y += myConfig.canvas.height / 300;
    }
  }

  keysStatus() {
    window.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "d":
          this.keys.d.pressed = true;
          break;
        case "a":
          this.keys.a.pressed = true;
          break;
        case "w":
          this.keys.w.pressed = true;
          break;
        case "s":
          this.keys.s.pressed = true;
          break;
        default:
          break;
      }
    });

    window.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "d":
          this.keys.d.pressed = false;
          break;
        case "a":
          this.keys.a.pressed = false;
          break;
        case "w":
          this.keys.w.pressed = false;
          break;
        case "s":
          this.keys.s.pressed = false;
          break;
        default:
          break;
      }
    });
  }
}
