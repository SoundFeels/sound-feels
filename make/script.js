var gamesPopover = document.getElementById('games-popover');
var letsPlay =  document.getElementById('lets-play');
var closeBtn = document.getElementById('close-btn');

letsPlay.addEventListener('click', function(){
    gamesPopover.style.display='block';
})

closeBtn.addEventListener('click', function(){
    gamesPopover.style.display='none';})
