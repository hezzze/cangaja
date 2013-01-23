//GLOBALS
var canvas
var ctx

var delta
var then = Date.now();
var mousePos
var mousex = 0
var mousey = 0
var mousedown = false
var mouseup
var hammer
var mySound
var myShoot
var angl,xs = 0,ys = 0

window.onload = function() {
    //create canvas element programaticaly
    can = document.createElement('canvas')
    can.width = 640
    can.height = 480
    can.id = 'canvas'
    document.body.appendChild(can)

    //just do it ;-)
    Game.preload()
};

var Game = {
    fps: 60,
    width: 640,
    height: 480,
    width2: 640 / 2,
    height2: 480 / 2,
    bound: new CG.Bound(0,0,640,480).setName('game'),
    b_canvas: false,
    b_ctx: false,
    asset: new CG.MediaAsset('media/img/splash3.jpg'),
    director: new CG.Director(),
    delta: new CG.Delta(60),
    preload: function(){
        //canvas for ouput
        canvas = document.getElementById("canvas")
        ctx = canvas.getContext("2d")

        //canvas buffer
        Game.b_canvas = document.createElement('canvas')
        Game.b_ctx = Game.b_canvas.getContext('2d')
        Game.b_canvas.width = Game.bound.width
        Game.b_canvas.height = Game.bound.height

        //preload images
        Game.asset.addImage('rocket','media/img/rocket.png')
        .addImage('bigexplosion','media/img/expbig1.png')
        .addFont('gill2','media/font/gill2.txt')
        .addXML('sewers','media/map/sewers.tmx')
        .startPreLoad()
    //after preload jump to Game.create
    },
    create: function() {
        //buzz: create/load sound objects
        mySound = new buzz.sound("media/sfx/serious", {
            formats: [ "ogg", "mp3", "aac", "wav" ],
            preload: true,
            autoplay: true,
            loop: true
        });
        myShoot = new buzz.sound("media/sfx/laser", {
            formats: [ "ogg", "mp3", "aac", "wav" ],
            preload: true,
            loop: false
        });
        mySound.play()

        //screen
        mainscreen = new CG.Screen('mainscreen')

        //layer
        mainlayer = new CG.Layer('mainlayer')

        //elements: buttons, animations, sprites, emitter
        //button
        button1 = new CG.Button(Game.asset.getImageByName('button'), 320, ybutton, 'Start', font, callBackFunction)
        button1.name = 'start'
        mainlayer.addElement(button1)

        //sprite
        sun = new CG.Sprite(Game.asset.getImageByName('sun'), 480, 100)
        sun.name = 'sun'
        sun.boundingradius = 150
        sun.xspeed = 1
        sun.boundsMode = 'slide'
        sun.xscale = 1
        sun.yscale = 1
        mainlayer.addElement(sun)

        //emitter
        mainlayer.addElement(new CG.Emitter()
            .setName('explodi')
            .activateFadeout()
            .setProtation(2)
            .setGravity(0)
            .initAsExplosion(Game.asset.getImageByName('powerstar75'), -2, 2)
            .setEmitterPosition(320, 240))




        //create needed stuff and add it to the director: screens => layers => elements
        Game.director
        .addScreen(mainscreen.addLayer(mainlayer))

        Game.touchinit()
        Game.loop()

    },
    loop: function(){
        Game.delta.update()
        requestAnimationFrame(Game.loop);
        if(Game.asset.ready==true){
            var last = new Date()
            //    delta = (now - then) / (1000 / Game.fps)
            Game.run();
            Game.touchhandler()
            delta = (new Date() - last) / 1000
        }
    },
    run: function() {
        Game.update()
        Game.draw()
    },
    update: function() {
        Game.director.update()
    },
    draw: function() {
        //clear ctx
        ctx.clearRect(0, 0, Game.bound.width, Game.bound.height)

        //place custom drawings here

        //draw all elements handled by the director or its screens/layers/elements
        Game.director.draw()

        //draw buffer to ctx
        ctx.drawImage(Game.b_canvas, 0, 0)
        //clear buffer
        Game.b_ctx.clearRect(0, 0, Game.bound.width, Game.bound.height)
    },
    touchinit: function() {
        hammer = new Hammer(canvas);
        hammer.ontap = function(ev) {
            mousedown = true
            mousex = ev.position[0].x - canvas.offsetLeft //correct ontap value x
            mousey = ev.position[0].y - canvas.offsetTop  //correct ontap value y

        };
        hammer.ondragstart = function(ev) {

        };
        hammer.ondrag = function(ev) {
            mousex = ev.position.x
            mousey = ev.position.y
        };
        hammer.ondragend = function(ev) {

        };
        hammer.onswipe = function(ev) {

        };

        hammer.ondoubletap = function(ev) {

        };
        hammer.onhold = function(ev) {

        };

        hammer.ontransformstart = function(ev) {

        };
        hammer.ontransform = function(ev) {

        };
        hammer.ontransformend = function(ev) {

        };

        hammer.onrelease = function(ev) {

        };
    },
    touchhandler: function(){
        mousedown = false
    }
}
