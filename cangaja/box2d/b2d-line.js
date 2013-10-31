/**
 * @description
 *
 * B2DLine is a simple b2PolygonShape wrapper. There is no visible drawing
 * now in the canvas for now. It can be used to build walls, ground,. ,.
 *
 * @class CG.B2DLine
 * @extends CG.B2DEntity
 */

CG.B2DEntity.extend('B2DLine', {
    /**
     * @method init
     * @constructor
     * @param world     {Object}      reference to world of B2DWorld
     * @param name      {String}      id or name to identify
     * @param start     {b2Vec2}      start of line
     * @param end       {b2Vec2}      end of line
     * @param scale     {Number}     the world scale of B2DWorld
     * @return {*}
     */
    init:function (world, name, start, end, scale) {
        this._super(name, false, world, 0, 0, scale) //TODO clean arguments?
        /**
         * @property start
         * @type {b2Vec2}
         */
        this.start = start
        /**
         * @property end
         * @type {b2Vec2}
         */
        this.end = end
        /**
         * @property xhandle
         * @type {Number}
         */
        this.xhandle = 0
        /**
         * @property yhandle
         * @type {Number}
         */
        this.yhandle = 0
        /**
         * @property fixDef.shape
         * @type {b2PolygonShape}
         */
        this.fixDef.shape = new b2EdgeShape()
        this.fixDef.shape.Set(this.start, this.end)
        /**
         * @property bodyDef.type
         * @type {Number}
         */
        this.bodyDef.type = box2d.b2BodyType.b2_staticBody
        /**
         * @property bodyDef.position
         */
        this.bodyDef.position.SetXY(0 / this.scale, 0 / this.scale)
        /**
         * @property bodyDef.userData
         * @type {*}
         */
        this.bodyDef.userData = this.id
        /**
         * @property body
         * @type {b2Body}
         */
        this.body = this.world.CreateBody(this.bodyDef)
        this.body.CreateFixture(this.fixDef)

        return this
    },
    update:function () {

    },
    draw:function () {

    }
})


