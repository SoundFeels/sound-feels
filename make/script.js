var gamesPopover = document.getElementById('games-popover');
var letsPlay =  document.getElementById('lets-play');
var closeBtn = document.getElementById('close-btn');

letsPlay.addEventListener('click', function(){
    gamesPopover.style.display='block';
})

closeBtn.addEventListener('click', function(){
    gamesPopover.style.display='none';})

// // var gamesCanvas = document.getElementById('games-canvas');
// var gamesCanvas = createCanvas(800, 250); //capture the createCanvas to a variable so you can infuence it with CSS
// gamesCanvas.parent('games-canvas'); //parent the myCanvas var to the mySketch id for CSS
//
// gameBtn1.addEventListener('click', function(){
//     gamesCanvas.style.background='none';})
//
//
//
//
//
// //Using loadPixels to edit the image with the microphone levels.
// 'use strict'
//
// var capture;
// var button;
// var playing = false;
// var mic;
//
// function setup() {
//   createCanvas(600, 400);
//   capture = createCapture(VIDEO);
//   capture.size(600, 400);
//   capture.hide();
//   mic = new p5.AudioIn();
//   mic.start();
//
// }
//
// function draw() {
//   background(0);
//   var micLevel = mic.getLevel();
//   capture.loadPixels();
//
//   //draw the matrix of pixels and distorbe them with the mic.
//   var stepSize = round(constrain(micLevel*height*0.6, 5, 400));
//   for (var y=0; y<height; y+=stepSize) {//y axis
//     for (var x=0; x<width; x+=stepSize) {//x axis
//       var i = y * width + x;
//       var darkness = (255 - capture.pixels[i*4]) / 255;
//       var radius = stepSize * darkness;
//       ellipse(x, y, radius, radius); //edit each pixel
//     }
//   }
// }
