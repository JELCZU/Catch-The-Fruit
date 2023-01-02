// eslint-disable-next-line import/no-cycle
import { menuBlock, elementMenu } from "./index.js";
import { fruit } from "./fruit.js";
import { canvas } from "./canvas.js";
import { scorePoints, scoreElement, updateScore } from "./scores.js";
import { playLoseGameMusic } from "./sound.js";
// eslint-disable-next-line import/prefer-default-export
export class gameMode1 {
  constructor(myConfig, Player1) {
    this.myConfig = myConfig;
    this.Player1 = Player1;
    this.fruits = [];
  }

  spawnFruits() {
    this.fruits.push(
      // eslint-disable-next-line new-cap
      new fruit(
        this.myConfig,
        Math.random() * (canvas.width - canvas.width * 0.05),
        0,
        10,
        50
      )
    );
    this.SpawnTimeoutId = setTimeout(
      () => {
        this.spawnFruits();
      },
      Math.random() *
        (this.myConfig.fruitsMaxRespawnTime -
          this.myConfig.fruitsMinRespawnTime) +
        this.myConfig.fruitsMinRespawnTime,
      this.myConfig
    );
  }

  CheckFruitsposition() {
    window.requestAnimationFrame(() => this.CheckFruitsposition());
    if (this.fruits.length > 0) {
      // eslint-disable-next-line no-shadow
      this.fruits.forEach((fruit, index) => {
        this.CheckFruitsHitGround(fruit, index);
        if (this.fruits.length > 0) {
          this.CheckFruitsHitPlayer(fruit, index);
        }
      });
    }
  }

  // eslint-disable-next-line no-shadow
  CheckFruitsHitGround(fruit) {
    if (
      fruit.position.y + fruit.height >=
      canvas.height - this.myConfig.canvas.height / 15
    ) {
      clearTimeout(this.SpawnTimeoutId);
      // eslint-disable-next-line no-shadow
      this.fruits.forEach((fruit, index) => {
        this.fruits[index].endAnimation();
      });
      this.emptyFruits = [];
      this.fruits = this.emptyFruits;
      document.querySelector("#displayText").innerHTML = "Game over!!!";
      menuBlock.style.display = "block";
      elementMenu.innerHTML = scoreElement.innerHTML;
      playLoseGameMusic();
    }
  }

  // eslint-disable-next-line no-shadow
  CheckFruitsHitPlayer(fruit, index) {
    if (
      fruit.position.x + fruit.width >= this.Player1.position.x &&
      fruit.position.x <= this.Player1.position.x + this.Player1.width &&
      fruit.position.y + fruit.height >= this.Player1.position.y &&
      fruit.position.y <= this.Player1.position.y + this.Player1.height
    ) {
      scorePoints(this.Player1, fruit);
      this.fruits[index].endAnimation();
      this.fruits.splice(index, 1);
    }
  }

  startGame() {
    document.querySelector("#displayText").innerHTML = "";
    menuBlock.style.display = "none";
    this.Player1.score = 0;
    updateScore(this.Player1);
    this.spawnFruits();
    this.CheckFruitsposition();
  }
}
