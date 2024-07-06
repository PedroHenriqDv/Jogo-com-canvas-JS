class Player {
    constructor(ctx, color='black', bordercolor='black') {
        this.context = ctx
        this.x = 400
        this.y = 600
        this.velo = 5
        this.movep = { left: false, right: false, up: false, down: false }
        this.size = 15
        this.color = color
        this.bordercolor = bordercolor
    }

    init() {
        const _this = this
        function animate() {
            _this.draw()
            _this.update()
            _this.init()
        }
        requestAnimationFrame(animate)
    }

    update() {
        this.move()
        this.collision()
    }

    collision() {
        if (this.x + this.size <= 0) this.x += this.size
        if (this.x + this.size >= canvas.width) this.x = canvas.width - this.size

        if (this.y + this.size <= 0) this.y += this.size
        if (this.y + this.size >= canvas.height) this.y = canvas.height - this.size
    }

    move() {
        this.keypress()
        this.moving()
    }

    moving() {
        if (this.movep.up) this.y -= this.velo
        if (this.movep.left) this.x -= this.velo
        if (this.movep.down) this.y += this.velo
        if (this.movep.right) this.x += this.velo
    }

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
