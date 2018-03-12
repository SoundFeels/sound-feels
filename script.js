var emoji = document.getElementById('emoji')

emoji.addEventListener('click', function(){
  window.navigator.vibrate([100,30,100,30,200]);
})
