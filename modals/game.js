class Game {
    constructor(stones, player) {
        this.points = 0
        this.stones = stones
        this.player = player
    }

    // inicializa os métodos de lógica do jogo
    init() {
        const _this = this
        function logic() {
            _this.pointPlayer()
            if (_this.checking()) {
                _this.stones.updatePosition()
                _this.resetStay()
            }
            _this.init()
        }
        requestAnimationFrame(logic)
    }

    // identifica a colisão do player com as pedras
    pointPlayer() {
        const ballx = this.player.x
        const bally = this.player.y
        const sizeStone = this.stones.size
        for (let l = 0;l < this.stones.stones.length; l++) {
            let stoneX = Number(this.stones.stonesXY[l].positionX)
            let stoneY = Number(this.stones.stonesXY[l].positionY)
            // x collision
            if (ballx >= stoneX && ballx <= stoneX + sizeStone) {
                 // y collision
                if (bally >= stoneY && bally <= stoneY + sizeStone) {
                    this.stones.stones[l] = false
                    // reward of the player
                    console.log('point')
                    const audio = new Audio('sons/light-switch-156813.mp3').play()
                }
            }
        }
    }

    // checa se todas as pedras foram coletadas
    checking() {
        for (let stay of this.stones.stones) {
            if (stay) {
                return false
            }
        }
        return true
    }

    // reseta todas as pedras no sistema de draw (desenho)
    resetStay() {
        for (let i in this.stones.stones) {
            console.log(i)
            this.stones.stones[i] = true
        }
    }
}