'use strict'

console.log('hello world')

// get variables for the buttons
var whiteNoise = document.getElementById('whiteNoise');
var pinkNoise = document.getElementById('pinkNoise');
var brownNoise = document.getElementById('brownNoise');
var blueNoise = document.getElementById('blueNoise');
var violetNoise = document.getElementById('violetNoise');
var greyNoise = document.getElementById('greyNoise');

// get variables for the buttons in white Overlay
var pinkNoiseWhiteOver = document.getElementById('pinkNoiseWhiteOver');
var brownNoiseWhiteOver = document.getElementById('brownNoise');
var blueNoiseWhiteOver = document.getElementById('blueNoise');
var violetNoiseWhiteOver = document.getElementById('violetNoise');
var greyNoiseWhiteOver = document.getElementById('greyNoise');

// get variables for the buttons in Pink Overlay
 var whiteNoisePinkOver = document.getElementById('whiteNoisePinkOver');
 var brownNoisePinkOver = document.getElementById('brownNoisePinkOver');
var blueNoisePinkOver = document.getElementById('blueNoisePinkOver');
var violetNoisePinkOver = document.getElementById('violetNoisePinkOver');
var greyNoisePinkOver = document.getElementById('greyNoisePinkOver');

// // get variables for the buttons in Brown Overlay
// var pinkNoiseWhiteOver = document.getElementById('pinkNoiseWhiteOver');
// var brownNoiseWhiteOver = document.getElementById('brownNoise');
// var blueNoiseWhiteOver = document.getElementById('blueNoise');
// var violetNoiseWhiteOver = document.getElementById('violetNoise');
// var greyNoiseWhiteOver = document.getElementById('greyNoise');

// get variables for the buttons in Blue Overlay
// var pinkNoiseWhiteOver = document.getElementById('pinkNoiseWhiteOver');
// var brownNoiseWhiteOver = document.getElementById('brownNoise');
// var blueNoiseWhiteOver = document.getElementById('blueNoise');
// var violetNoiseWhiteOver = document.getElementById('violetNoise');
// var greyNoiseWhiteOver = document.getElementById('greyNoise');

// get variables for the buttons in Violet Overlay
// var pinkNoiseWhiteOver = document.getElementById('pinkNoiseWhiteOver');
// var brownNoiseWhiteOver = document.getElementById('brownNoise');
// var blueNoiseWhiteOver = document.getElementById('blueNoise');
// var violetNoiseWhiteOver = document.getElementById('violetNoise');
// var greyNoiseWhiteOver = document.getElementById('greyNoise');

// get variables for the buttons in Grey Overlay
// var pinkNoiseWhiteOver = document.getElementById('pinkNoiseWhiteOver');
// var brownNoiseWhiteOver = document.getElementById('brownNoise');
// var blueNoiseWhiteOver = document.getElementById('blueNoise');
// var violetNoiseWhiteOver = document.getElementById('violetNoise');
// var greyNoiseWhiteOver = document.getElementById('greyNoise');

// get variables for ovelays
var whiteOverlay = document.getElementById('whiteOverlay');
var pinkOverlay = document.getElementById('pinkOverlay');
var brownOverlay = document.getElementById('brownOverlay');
var blueOverlay = document.getElementById('blueOverlay');
var violetOverlay = document.getElementById('violetOverlay');
var greyOverlay = document.getElementById('greyOverlay');

// get variables for close buttons
var closeWhite = document.getElementById('closeWhite');
var closePink = document.getElementById('closePink');
var closeBrown = document.getElementById('closeBrown');
var closeBlue = document.getElementById('closeBlue');
var closeViolet = document.getElementById('closeViolet');
var closeGrey = document.getElementById('closeGrey');

//open overlays
whiteNoise.addEventListener('click', function() {
    whiteOverlay.style.display = 'block';
    closeWhite.style.display = 'block';
});

pinkNoise.addEventListener('click', function() {
    pinkOverlay.style.display = 'block';
    closePink.style.display = 'block';
});

brownNoise.addEventListener('click', function() {
    brownOverlay.style.display = 'block';
    closeBrown.style.display = 'block';
});

blueNoise.addEventListener('click', function() {
    blueOverlay.style.display = 'block';
    closeBlue.style.display = 'block';
});

violetNoise.addEventListener('click', function() {
    violetOverlay.style.display = 'block';
    closeViolet.style.display = 'block';
});

greyNoise.addEventListener('click', function() {
    greyOverlay.style.display = 'block';
    closeGrey.style.display = 'block';
});

//close overlays
closeWhite.addEventListener('click', function() {
    whiteOverlay.style.display = 'none';
});

closePink.addEventListener('click', function() {
    pinkOverlay.style.display = 'none';
});

closeBrown.addEventListener('click', function() {
    brownOverlay.style.display = 'none';
});

closeBlue.addEventListener('click', function() {
    blueOverlay.style.display = 'none';
});

closeViolet.addEventListener('click', function() {
    violetOverlay.style.display = 'none';
});

closeGrey.addEventListener('click', function() {
    greyOverlay.style.display = 'none';
});

// event listeners for white overlay
pinkNoiseWhiteOver.addEventListener('click', function() {
    whiteOverlay.style.display = 'none';
    pinkOverlay.style.display = 'block';
    closePink.style.display = 'block';
});

brownNoiseWhiteOver.addEventListener('click', function() {
    whiteOverlay.style.display = 'none';
    brownOverlay.style.display = 'block';
    closeBrown.style.display = 'block';
});

blueNoiseWhiteOver.addEventListener('click', function() {
    whiteOverlay.style.display = 'none';
    blueOverlay.style.display = 'block';
    closeBlue.style.display = 'block';
});

violetNoiseWhiteOver.addEventListener('click', function() {
    whiteOverlay.style.display = 'none';
    violetOverlay.style.display = 'block';
    closeViolet.style.display = 'block';
});

// // event listeners for Pink overlay
// whiteNoisePinkOver.addEventListener('click', function() {
//     pinkOverlay.style.display = 'none';
//     whiteOverlay.style.display = 'block';
//     closeWhite.style.display = 'block';
// });
//
// brownNoiseWhiteOver.addEventListener('click', function() {
//     whiteOverlay.style.display = 'none';
//     brownOverlay.style.display = 'block';
//     closeBrown.style.display = 'block';
// });
//
// blueNoiseWhiteOver.addEventListener('click', function() {
//     whiteOverlay.style.display = 'none';
//     blueOverlay.style.display = 'block';
//     closeBlue.style.display = 'block';
// });
//
// violetNoiseWhiteOver.addEventListener('click', function() {
//     whiteOverlay.style.display = 'none';
//     violetOverlay.style.display = 'block';
//     closeViolet.style.display = 'block';
// });
