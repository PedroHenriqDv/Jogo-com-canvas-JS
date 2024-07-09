class Stone {
    constructor(context, amount) {
        this.ctx = context
        this.size = 50
        this.amount = amount
        this.stones =
            [
                { stay: true }, { stay: true }, { stay: true }
            ]
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
        
        this.image = new Image()
        this.image.src = 'img/images.jpg'
    }

    init() {
        const _this = this
        function animate() {
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
                return [x.toFixed(0), y.toFixed(0)]
            }
        }
    }

    updatePosition() {
        for (let up of this.stonesXY) {
            let updatePosition = this.randomInt()
            up.positionX = updatePosition[0]
            up.positionY = updatePosition[1]
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
