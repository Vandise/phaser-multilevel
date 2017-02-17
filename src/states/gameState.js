import Player from '../objects/player';

let cursors = {};
let player = {};

export default class GameState extends Phaser.State {

  preload() {
    const current_level = this.game.current_level;
    console.log(current_level);
    this.game.load.tilemap('mario', `assets/worlds/${current_level}.json`, null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('tiles', 'assets/tilesets/super_mario.png');
    this.game.load.image('player', 'assets/sprites/phaser-dude.png');
  }

	create() {
    this.game.stage.backgroundColor = '#787878';
    const map = this.game.add.tilemap('mario');
    map.addTilesetImage('SuperMarioBros-World1-1', 'tiles');
    
    const layer = map.createLayer('World1');
    layer.resizeWorld();
    layer.wrap = true;

    player = new Player(this.game).load();

    cursors = this.game.input.keyboard.createCursorKeys();
	}

  update() {
    // this would actually be when the player hit's an event tile, the flag, etc...
    if (this.game.camera.x >= 2590) {
      player.kill();
      this.game.stageComplete();
    }
    player.move(cursors);
  }

}
