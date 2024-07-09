// init game

class InitGame {
    constructor(player, stones, game) {
        this.player = player
        this.stone = stones
        this.game = game
    }

    initAll() {
        this.player.init()
        this.stone.init()
        this.game.init()
    }
}