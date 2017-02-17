const SPRITE_SHEET = 'player';
const INITIAL_SPEED = 250;

let pos_x        = 0;
let pos_y        = 0;
let speed        = 0;

class Player extends Phaser.Sprite {

  constructor(game) {
    super(game, game.world.centerX, game.world.centerY , SPRITE_SHEET);
  }

  load() {
    this.game.add.existing(this);
    this.game.physics.arcade.enable(this);
    this.body.collideWorldBounds = true;

    this.anchor.set(0.5);
    speed = INITIAL_SPEED;

    return this;
  }


  move(cursor) {
    // move camera, add sprite animation, etc...
    if (cursor.left.isDown)
    {
        this.game.camera.x -= 8;
    }
    else if (cursor.right.isDown)
    {
        this.game.camera.x += 8;
    }

    if (cursor.up.isDown)
    {
        this.game.camera.y -= 8;
    }
    else if (cursor.down.isDown)
    {
        this.game.camera.y += 8;
    }
  }

}

export default Player;