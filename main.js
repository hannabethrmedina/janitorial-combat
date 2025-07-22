var game = new Phaser.Game(768, 768, Phaser.AUTO);
game.state.add('level0', demo.level0);
game.state.add('level1', demo.level1);
game.state.add('level2', demo.level2);
game.state.add('level3', demo.level3);
game.state.add('gameOver', demo.gameOver);
game.state.add('nextLevel', demo.nextLevel); 
game.state.start('level0');