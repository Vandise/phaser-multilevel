export default class LevelComplete extends Phaser.State {

  preload() {
    console.log("level complete");
  }

	create() {
    this.enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
	}

  update() {
    if (this.enterKey.isDown) {
      this.state.start('GameState');
    }
  }

}
