/**
 * @descriptiom class Particle
 *
 * @constructor
 * @augments Sprite
 *
 * @param {mixed} image imgpath, image object or tpimage object to use for the particle
 */

CG.Sprite.extend('Particle', {
    init:function (image) {
        this._super(image, new CG.Point(0, 0))
        this.lifetime = 100
        this.currtime = this.lifetime
        this.aging = 1
        this.fadeout = false
        this.alpha = 1
        this.gravity = 0
    },
    update:function () {
        if (this.visible) {
            if (this.fadeout) {
                this.alpha = this.currtime / this.lifetime
                if (this.alpha <= 0) {
                    this.visible = false
                }
            }
            this.currtime -= this.aging
            if (this.currtime < 0) {
                this.visible = false
            }

            this.position.x += this.xspeed
            this.position.y += this.yspeed
            this.yspeed += this.gravity
            this.rotation += this.rotationspeed
        }
    },
    draw:function () {
        if (this.visible) {
            Game.b_ctx.save()
            Game.b_ctx.globalAlpha = this.alpha
            Game.b_ctx.translate(this.position.x, this.position.y)
            if (this.atlasimage) {
                Game.b_ctx.rotate((this.rotation - this.imagerotation) * Const_PI_180)
                Game.b_ctx.drawImage(this.image, this.xoffset, this.yoffset, this.cutwidth, this.cutheight, 0 - (this.cutwidth / 2), 0 - (this.cutheight / 2), this.cutwidth * this.xscale, this.cutheight * this.yscale)
                Game.b_ctx.rotate((this.rotation + this.imagerotation) * Const_PI_180)
            } else {
                Game.b_ctx.rotate(this.rotation * Const_PI_180)
                Game.b_ctx.drawImage(this.image, 0 - (this.image.width * this.xscale / 2), 0 - (this.image.height * this.yscale / 2), this.image.width * this.xscale, this.image.height * this.yscale)
            }
            Game.b_ctx.restore()
        }
    }
})