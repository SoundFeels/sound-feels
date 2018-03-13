var emoji = document.getElementById('emoji');

emoji.addEventListener('click', function(){
    console.log('Buzz buzz buzzzz!');
    window.navigator.vibrate([100,30,100,30,200]);
})
