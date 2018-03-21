'use strict';

console.log('hello world');

// get variables for the buttons on Listen Landing Page
var whiteNoise = document.getElementById('whiteNoise');
var pinkNoise = document.getElementById('pinkNoise');
var brownNoise = document.getElementById('brownNoise');
var blueNoise = document.getElementById('blueNoise');
var violetNoise = document.getElementById('violetNoise');
var greyNoise = document.getElementById('greyNoise');

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

// get variables for the buttons in white Overlay
var pinkNoiseWhiteOver = document.getElementById('pinkNoiseWhiteOver');
var brownNoiseWhiteOver = document.getElementById('brownNoiseWhite');
var blueNoiseWhiteOver = document.getElementById('blueNoiseWhiteOver');
var violetNoiseWhiteOver = document.getElementById('violetNoiseWhiteOver');
var greyNoiseWhiteOver = document.getElementById('greyNoiseWhiteOver');

// get variables for the buttons in Pink Overlay
var whiteNoisePinkOver = document.getElementById('whiteNoisePinkOver');
var brownNoisePinkOver = document.getElementById('brownNoisePinkOver');
var blueNoisePinkOver = document.getElementById('blueNoisePinkOver');
var violetNoisePinkOver = document.getElementById('violetNoisePinkOver');
var greyNoisePinkOver = document.getElementById('greyNoisePinkOver');

// get variables for the buttons in Brown Overlay
var whiteNoiseBrownOver = document.getElementById('whiteNoiseBrownOver');
var pinkNoiseBrownOver = document.getElementById('pinkNoiseWhiteOver');
var blueNoiseBrownOver = document.getElementById('blueNoiseBrownOver');
var violetNoiseBrownOver = document.getElementById('violetNoiseBrownOver');
var greyNoiseBrownOver = document.getElementById('greyNoiseBrownOver');

// get variables for the buttons in Blue Overlay
var whiteNoiseBlueOver = document.getElementById('whiteNoiseBlueOver');
var pinkNoiseBlueOver = document.getElementById('pinkNoiseBlueOver');
var brownNoiseBlueOver = document.getElementById('brownNoiseBlueOver');
var violetNoiseBlueOver = document.getElementById('violetNoiseBlueOver');
var greyNoiseBlueOver = document.getElementById('greyNoiseBlueOver');

// get variables for the buttons in Violet Overlay
var whiteNoiseVioletOver = document.getElementById('whiteNoiseVioletOver');
var pinkNoiseVioletOver = document.getElementById('pinkNoiseVioletOver');
var brownNoiseVioletOver = document.getElementById('brownNoiseVioletOver');
var blueNoiseVioletOver = document.getElementById('blueNoiseVioletOver');
var greyNoiseVioletOver = document.getElementById('greyNoiseVioletOver');

// get variables for the buttons in Grey Overlay
var whiteNoiseGreyOver = document.getElementById('whiteNoiseGreyOver');
var pinkNoiseGreyOver = document.getElementById('pinkNoiseGreyOver');
var brownNoiseGreyOver = document.getElementById('brownNoiseGreyOver');
var blueNoiseGreyOver = document.getElementById('blueNoiseGreyOver');
var violetNoiseGreyOver = document.getElementById('violetNoiseGreyOver');

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

greyNoiseWhiteOver.addEventListener('click', function() {
    whiteOverlay.style.display = 'none';
    greyOverlay.style.display = 'block';
    closeGrey.style.display = 'block';
});

// event listeners for Pink overlay
whiteNoisePinkOver.addEventListener('click', function() {
    pinkOverlay.style.display = 'none';
    whiteOverlay.style.display = 'block';
    closeWhite.style.display = 'block';
});

brownNoisePinkOver.addEventListener('click', function() {
    pinkOverlay.style.display = 'none';
    brownOverlay.style.display = 'block';
    closeBrown.style.display = 'block';
});

blueNoisePinkOver.addEventListener('click', function() {
    pinkOverlay.style.display = 'none';
    blueOverlay.style.display = 'block';
    closeBlue.style.display = 'block';
});

violetNoisePinkOver.addEventListener('click', function() {
    pinkOverlay.style.display = 'none';
    violetOverlay.style.display = 'block';
    closeViolet.style.display = 'block';
});


greyNoisePinkOver.addEventListener('click', function() {
    pinkOverlay.style.display = 'none';
    greyOverlay.style.display = 'block';
    closeGrey.style.display = 'block';
});

// event listeners for Brown overlay
whiteNoiseBrownOver.addEventListener('click', function() {
    brownOverlay.style.display = 'none';
    whiteOverlay.style.display = 'block';
    closeWhite.style.display = 'block';
});

pinkNoiseBrownOver.addEventListener('click', function() {
    brownOverlay.style.display = 'none';
    pinkOverlay.style.display = 'block';
    closePink.style.display = 'block';
});

blueNoiseBrownOver.addEventListener('click', function() {
    brownOverlay.style.display = 'none';
    blueOverlay.style.display = 'block';
    closeBlue.style.display = 'block';
});

violetNoiseBrownOver.addEventListener('click', function() {
    brownOverlay.style.display = 'none';
    violetOverlay.style.display = 'block';
    closeViolet.style.display = 'block';
});


greyNoiseBrownOver.addEventListener('click', function() {
    brownOverlay.style.display = 'none';
    greyOverlay.style.display = 'block';
    closeGrey.style.display = 'block';
});

// event listeners for Blue overlay
whiteNoiseBlueOver.addEventListener('click', function() {
    blueOverlay.style.display = 'none';
    whiteOverlay.style.display = 'block';
    closeWhite.style.display = 'block';
});

pinkNoiseBlueOver.addEventListener('click', function() {
    blueOverlay.style.display = 'none';
    pinkOverlay.style.display = 'block';
    closePink.style.display = 'block';
});

brownNoiseBlueOver.addEventListener('click', function() {
    blueOverlay.style.display = 'none';
    brownOverlay.style.display = 'block';
    closeBrown.style.display = 'block';
});

violetNoiseBlueOver.addEventListener('click', function() {
    blueOverlay.style.display = 'none';
    violetOverlay.style.display = 'block';
    closeViolet.style.display = 'block';
});

greyNoiseBlueOver.addEventListener('click', function() {
    blueOverlay.style.display = 'none';
    greyOverlay.style.display = 'block';
    closeGrey.style.display = 'block';
});

// event listeners for Violet overlay
whiteNoiseVioletOver.addEventListener('click', function() {
    violetOverlay.style.display = 'none';
    whiteOverlay.style.display = 'block';
    closeWhite.style.display = 'block';
});

pinkNoiseVioletOver.addEventListener('click', function() {
    violetOverlay.style.display = 'none';
    pinkOverlay.style.display = 'block';
    closePink.style.display = 'block';
});

brownNoiseVioletOver.addEventListener('click', function() {
    violetOverlay.style.display = 'none';
    brownOverlay.style.display = 'block';
    closeBrown.style.display = 'block';
});

blueNoiseVioletOver.addEventListener('click', function() {
    violetOverlay.style.display = 'none';
    blueOverlay.style.display = 'block';
    closeViolet.style.display = 'block';
});

greyNoiseVioletOver.addEventListener('click', function() {
    violetOverlay.style.display = 'none';
    greyOverlay.style.display = 'block';
    closeGrey.style.display = 'block';
});

// event listeners for Grey overlay
whiteNoiseGreyOver.addEventListener('click', function() {
    greyOverlay.style.display = 'none';
    whiteOverlay.style.display = 'block';
    closeWhite.style.display = 'block';
});

pinkNoiseGreyOver.addEventListener('click', function() {
    greyOverlay.style.display = 'none';
    pinkOverlay.style.display = 'block';
    closePink.style.display = 'block';
});

brownNoiseGreyOver.addEventListener('click', function() {
    greyOverlay.style.display = 'none';
    brownOverlay.style.display = 'block';
    closeBrown.style.display = 'block';
});

blueNoiseGreyOver.addEventListener('click', function() {
    greyOverlay.style.display = 'none';
    blueOverlay.style.display = 'block';
    closeViolet.style.display = 'block';
});

violetNoiseGreyOver.addEventListener('click', function() {
    greyOverlay.style.display = 'none';
    violetOverlay.style.display = 'block';
    closeGrey.style.display = 'block';
});
