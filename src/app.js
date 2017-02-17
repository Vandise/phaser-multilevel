import TitleState from './states/titleState';
import GameState from './states/gameState';
import LevelComplete from './states/levelComplete';

const DEFAULT_LEVEL = 1;

class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'content', null);
		this.current_level = DEFAULT_LEVEL;
		this.state.add('TitleState', TitleState,false);
		this.state.add('GameState', GameState,false);
		this.state.add('LevelComplete', LevelComplete,false);
		this.state.start('TitleState');
	}

  stageComplete() {
    this.current_level += 1;
    this.state.start('LevelComplete');
  }

}

new Game();