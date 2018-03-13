var gamesPopover = document.getElementById('games-popover');
var letsPlay =  document.getElementById('lets-play');
var closeBtn = document.getElementById('close-btn');

letsPlay.addEventListener('click', function(){
    gamesPopover.style.display='block';
})

closeBtn.addEventListener('click', function(){
    gamesPopover.style.display='none';})

var gamesCanvas = document.getElementById('games-canvas');

gameBtn1.addEventListener('click', function(){
    gamesCanvas.style.background='none';})
