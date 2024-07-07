class Stone {
    constructor(context, player) {
        this.ctx = context
        this.player = player
        this.size = 50
        this.stonesXY =
            [
                { positionX: this.randomInt()[0], positionY: this.randomInt()[1] },

                {
                    positionX: this.randomInt()[0],
                    positionY: this.randomInt()[1]
                },

                {
                    positionX: this.randomInt()[0],
                    positionY: this.randomInt()[1]
                }
            ]
        this.stones =
            [
                { stay: true }, { stay: true }, { stay: true }
            ]
        this.image = new Image()
        this.image.src = 'img/images.jpg'
    }

    init() {
        const _this = this
        function animate() {
            _this.update()
            _this.draw()
            _this.init()
        }
        requestAnimationFrame(animate)
    }

    randomInt() {
        while (true) {
            let random = Math.random()
            const x = random * 850
            random = Math.random()
            const y = random * 850
            if (x < 750 && x > 20 && y < 750 && y > 20) {
                console.log(`x: ${x.toFixed(0)} // y: ${y.toFixed(0)}`)
                return [x.toFixed(0), y.toFixed(0)]
            }
        }
    }

    update() {
        this.collision()
    }

    // console.log(i)
    // this.stones[cont].stay = false
    // cont += 1
    // console.log('pegou!')
    collision() {
        const playerx = this.player.x
        const playery = this.player.y
        let cont = 0
        for (let i of this.stonesXY) {
            if (playerx > i.positionX && playerx < i.positionX + this.size) {
                console.log(i)
                this.stones[cont].stay = false
                cont += 1
                console.log('pegou!')
            }
        }
    }

    draw() {
        const ctx = this.ctx
        let cont = 0
        for (let i of this.stonesXY) {
            if (this.stones[cont].stay) {
                ctx.drawImage(this.image, i.positionX, i.positionY, this.size, this.size)
            }
            cont += 1
        }
    }
}


