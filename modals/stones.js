class Stone {
    constructor(context) {
        this.ctx = context
        this.size = 50
        this.stones =
            [
                { stay: true }, { stay: true }, { stay: true }
            ]
        this.stonesXY =
            [
                { 
                    positionX: this.randomInt()[0], positionY: this.randomInt()[1] 
                },

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

    // inicializador da classe Stone
    init() {
        const _this = this
        function animate() {
            _this.draw()
            _this.init()
        }
        requestAnimationFrame(animate)
    }

    // método que sorteia a dois número int que servira de posição X e Y das pedras
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

    // sorteia e atualiza a posição de cada pedra na tela
    updatePosition() {
        for (let up of this.stonesXY) {
            let updatePosition = this.randomInt()
            up.positionX = updatePosition[0]
            up.positionY = updatePosition[1]
        }
    }

    // método que desenha as pedras
    draw() {
        const ctx = this.ctx
        for (let i = 0;i < this.stones.length; i++) {
            if (this.stones[i]) {
                // desenha as pedras que não foram pegas
                ctx.drawImage(this.image, this.stonesXY[i].positionX, this.stonesXY[i].positionY, this.size, this.size)
            } else {
                // desenha as pedras que ja foram pegas fora do alcance de visão
                this.stonesXY[i].positionX = -10
                this.stonesXY[i].positionY = -10
                ctx.drawImage(this.image, -10, -10, 10, 10)
            }
        }
    }
}
