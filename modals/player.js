class Player {
    constructor(ctx, color='black', bordercolor='black') {
        this.context = ctx
        this.x = 400
        this.y = 400
        this.velo = 5
        this.movep = { left: false, right: false, up: false, down: false }
        this.size = 15
        this.color = color
        this.bordercolor = bordercolor
    }

    // inicializador das animações e funcionamento das interatividades do player
    init() {
        const _this = this
        function animate() {
            _this.draw()
            _this.update()
            _this.init()
        }
        requestAnimationFrame(animate)
    }

    // atualiza a posição do player na tela
    update() {
        this.move()
        this.collision()
    }

    // identifica o limite da tela
    collision() {
        if (this.x + this.size <= this.size*2) this.x = this.size
        if (this.x + this.size >= canvas.width) this.x = canvas.width - this.size

        if (this.y + this.size <= this.size*2) this.y = this.size
        if (this.y + this.size >= canvas.height) this.y = canvas.height - this.size
    }

    // chama os métodos de movimento do player
    move() {
        this.keypress()
        this.moving()
    }

    // muda a posição do player segundo o input do player
    moving() {
        if (this.movep.up) this.y -= this.velo
        if (this.movep.left) this.x -= this.velo
        if (this.movep.down) this.y += this.velo
        if (this.movep.right) this.x += this.velo
    }

    // identifica o input do teclado do player para a movimentação
    keypress() {
        document.addEventListener('keydown', down => {
            const keydown = down.key.toLowerCase()
            console.log(keydown)
            if (keydown == 'w') this.movep.up = true
            if (keydown == 'a') this.movep.left = true
            if (keydown == 's') this.movep.down = true
            if (keydown == 'd') this.movep.right = true
        })
        document.addEventListener('keyup', up => {
            const keyup = up.key.toLocaleLowerCase()
            if (keyup == 'w') this.movep.up = false
            if (keyup == 'a') this.movep.left = false
            if (keyup == 's') this.movep.down = false
            if (keyup == 'd') this.movep.right = false
        })
    }

    // desenha o player
    draw() {
        const ctx = this.context
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.strokeStyle = this.bordercolor
        ctx.stroke()
    }
}
