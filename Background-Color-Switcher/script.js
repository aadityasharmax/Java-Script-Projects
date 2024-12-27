const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
function change(color){
  const head1 = document.querySelector('h1');
  const head2 = document.querySelector('h2');
  const head3 = document.querySelector('h3');
  head1.style.color = color;
  head2.style.color = color;
  head3.style.color = color;
}

function wow(){
  body.innerHTML = "<center><h1>Told You</h1></center>"
  body.style.backgroundColor = "black";
  body.style.color = "white";
}


buttons.forEach(function(button){
  button.addEventListener('click',function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
      change("white");
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
      change("black");
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
      change("orange");
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
      change("red");
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id;
      change("white");
    }
    if(e.target.id === 'black'){
      
      wow()
      
      
    }
  })

})