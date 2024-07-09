class Game {
    constructor(stones, player) {
        this.poits = 0
        this.stones = stones
        this.player = player
    }

    init() {
        const _this = this
        function logic() {
            _this.pointPlayer()
            _this.init()
        }
        requestAnimationFrame(logic)
    }

    pointPlayer() {
        const ballx = this.player.x
        const bally = this.player.y
        const sizeStone = this.stones.size
        let cont = 0
        for (let stone of this.stones.stonesXY) {
            // x collision
            if (ballx >= stone.positionX && ballx <= Number(stone.positionX) + sizeStone) {
                // y collision
                if (bally >= stone.positionY && bally <= Number(stone.positionY) + sizeStone) {
                    // reward of the player
                    this.stones.stones[cont] = false
                    this.checking()
                }
            }
            cont += 1
        }
    }

    checking() {
        let cont = 0
        for (let stay of this.stones.stones) {
            if (!stay) cont += 1
            if (cont == this.stones.stones.length) {
                this.resetStay()
            }
        }
    }

    resetStay() {
        for (let i in this.stones.stones) {
            this.stones.stones[i] = true
            this.stones.updatePosition()
        }
    }
}