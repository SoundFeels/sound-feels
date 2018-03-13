var gamesPopover = document.getElementById('games-popover');
var letsPlay = document.getElementById('lets-play');
var closeBtn = document.getElementById('close-btn');

function setup() { //once
    var gamesCanvas = createCanvas(800, 400); //capture the createCanvas to a variable so you can infuence it with CSS
    gamesCanvas.parent('games-canvas'); //parent the myCanvas var to the mySketch id for CSS
    background('#FDB4B5'); //color

}

letsPlay.addEventListener('click', function() {
    gamesPopover.style.display = 'block';

})

closeBtn.addEventListener('click', function() {
    gamesPopover.style.display = 'none';
})
