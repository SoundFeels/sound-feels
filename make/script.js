// This is the script for SoundFeels "make some noise" games page

var gamesPopover = document.getElementById('games-popover');
var letsPlay = document.getElementById('lets-play');
var closeBtn = document.getElementById('close-btn');

// show popover
letsPlay.addEventListener('click', function() {
    gamesPopover.style.display = 'block';
})

// hide popover
closeBtn.addEventListener('click', function() {
    gamesPopover.style.display = 'none';
})

// bring buttons into js
var gmbtn1 = document.getElementById('game-button-1');
var gmbtn2 = document.getElementById('game-button-2');
var gmbtn3 = document.getElementById('game-button-3');

// event listen for clicks on game buttons
var game1;
var game2;
var game3;
gmbtn1.addEventListener('click', function() {
    game1 = true;
    game2 = false;
    game3 = false;
})
gmbtn2.addEventListener('click', function() {
    game1 = false;
    game2 = true;
    game3 = false;
})
gmbtn3.addEventListener('click', function() {
    game1 = false;
    game2 = false;
    game3 = true;
})

function setup() { //once
    var gamesCanvas = createCanvas(800, 400); //capture the createCanvas to a variable so you can infuence it with CSS
    gamesCanvas.parent('games-canvas'); //parent the myCanvas var to the mySketch id for CSS
    background('#FDB4B5'); //color
    //Experimental
    capture = createCapture(VIDEO);
    capture.size(800, 400);
    capture.hide();
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {

    if (game1 == true) {
        background('#FDB4B5');
        // get volume of mic
        var micLevel = mic.getLevel();
        // draw the ellipse based on mic level
        ellipse(width / 2, height / 2, constrain(micLevel * height * 30, 0, height), constrain(micLevel * height * 30, 0, height));
        fill(255, 89, 0);
    }

    if (game2 == true) {
        background('#FDB4B5');
        var micLevel = mic.getLevel();
        capture.loadPixels();
        //draw the matrix of pixels and distorbe them with the mic.
        var stepSize = round(constrain(micLevel * height * 0.6, 5, 400));
        for (var y = 0; y < height; y += stepSize) { //y axis
            for (var x = 0; x < width; x += stepSize) { //x axis
                var i = y * width + x;
                var darkness = (0 + capture.pixels[i * 4]) / 255;
                var radius = stepSize * darkness;
                ellipse(x, y, radius, radius); //edit each pixel
            }
        }
    }

    if (game3 == true) {
        console.log('Game 3 is running.');
        loadImage('construction.png', function(img) {
                image(img, 20, height/10);
            });
        //sound stuff
        var micLevel = mic.getLevel();
        capture.loadPixels();
        var dim =  (0 + capture.pixels[random * 4]) / 255;
        //a random point
        var x = random(width);
        var y = random(height);
        var loc = x + y * width;
        //look up the RGB color @ that povar in image/video
        loadPixels();
        var r = red(9);
        var g = green(9);
        var b = blue(9);
        //draw an ellipse at that location with that color
        noStroke();
        fill(r, g, b, 100);
        ellipse(x, y, dim, dim);

    }
}
