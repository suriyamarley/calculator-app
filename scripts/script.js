(function() {



let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clearEl = document.getElementById('clear');
let equalEl = document.getElementById('equal');
let cancelEl = document.getElementById('cancel');

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    let value =e.target.dataset.num;
    screen.value += value;
  })
});

  
equalEl.addEventListener('click', function() {
  if(screen.value === ''){
    screen.value = "";
  }
  else{
    let answer = eval(screen.value);
    screen.value = answer;
  }

  
});

clearEl.addEventListener('click', function(){
  screen.value = ''});


 cancelEl.addEventListener('click', function(){
  screen.value = screen.value.slice(0,-1);
 })


})();