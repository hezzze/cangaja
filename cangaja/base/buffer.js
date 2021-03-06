/**
 * @description
 *
 * CG.Buffer for separate canvas rendering/buffering
 *
 * @class CG.Buffer
 * @extends CG.Entity
 *
 */
CG.Entity.extend('Buffer', {
    /**
     * @constructor
     * @method init
     * @param width {Number} width of the buffer
     * @param height {Number} height of the buffer
     * @param buffername {string} buffername
     * @return {*}
     */
    init:function (width, height, buffername) {
        this._super(buffername)
        /**
         * @property b_canvas
         * @type {HTMLElement}
         */
        this.b_canvas = document.createElement('canvas')
//    if(typeof(ejecta) !== 'undefined'){
//        this.b_canvas.width = w
//        this.b_canvas.height = h
//    }else{

        /**
         * @property b_canvas.width
         * @type {*}
         */
        this.b_canvas.width = width
        /**
         * @property b_canvas.height
         * @type {*}
         */
        this.b_canvas.height = height
//    }

        /**
         * @property b_ctx
         * @type {CanvasRenderingContext2D}
         */
        this.b_ctx = this.b_canvas.getContext('2d')
        return this
    }
})


