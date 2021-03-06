/**
 * @description
 *
 * Future plans:
 * CG.Text => support for different text drawing modes like textblock, text alignment, text ticker or scroller.
 *
 * @class CG.Text
 * @extends CG.Entity
 */
CG.Entity.extend('Text', {
    /**
     * @method init
     * @param font the font object (CG.Font) to use
     * @constructor
     * @return {*}
     */

    init: function (font) {

        /**
         @property font {CG.Font}
         */
        this.font = font

        /**
         * @property text {string}
         */
        this.text = ''

        /**
         * @property textcurrent {string}
         */
        this.textcurrent = ''

        /**
         * @property x {number} the x position
         */
        this.x = 0

        /**
         * @property y {number} the y position
         */
        this.y = 0

        /**
         * @property width {number} width of textbox
         */
        this.width = 0

        /**
         * @property height {number} height of textbox
         */
        this.height = 0

        /**
         * @property textAlign {string} alignment of text
         */
        this.textAlign = 'left' //left, right, centered

        return this
    },
    initAsTextblock: function (font) {

        return this
    },
    initAsScroller: function () {

    },
    initAsTicker: function () {

    },
    /**
     * @method setText
     * @param text
     * @returns {*}
     */
    setText: function (text) {
        this.text = text
        return this
    },
    /**
     * @method update
     */
    update: function () {

    },
    /**
     * @method draw
     */
    draw: function () {

    }
})