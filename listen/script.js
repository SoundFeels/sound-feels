'use strict'

console.log('hello world')

// get variables for the buttons
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

//open overlays
whiteNoise.addEventListener('click', function(){
 whiteOverlay.style.display='block';
 closeWhite.style.display='block';
});

pinkNoise.addEventListener('click', function(){
 pinkOverlay.style.display='block';
 closePink.style.display='block';
});

brownNoise.addEventListener('click', function(){
 brownOverlay.style.display='block';
 closeBrown.style.display='block';
});

blueNoise.addEventListener('click', function(){
 blueOverlay.style.display='block';
 closeBlue.style.display='block';
});

violetNoise.addEventListener('click', function(){
 violetOverlay.style.display='block';
 closeViolet.style.display='block';
});

greyNoise.addEventListener('click', function(){
 greyOverlay.style.display='block';
 closeGrey.style.display='block';
});

//close overlays
closeWhite.addEventListener('click', function(){
  whiteOverlay.style.display='none';
});

closePink.addEventListener('click', function(){
  pinkOverlay.style.display='none';
});

closeBrown.addEventListener('click', function(){
  brownOverlay.style.display='none';
});

closeBlue.addEventListener('click', function(){
  blueOverlay.style.display='none';
});

closeViolet.addEventListener('click', function(){
  violetOverlay.style.display='none';
});

closeGrey.addEventListener('click', function(){
  greyOverlay.style.display='none';
});
