
// Function to generate random color
function randomColor() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
        // console.log(color);
    }
    
    return color;
  }

  // initialize intervalId in global scope
  let intervalId;
  
  // function for start changing color
  const startChangingColor = function () {
  

    // funcion to change background color
    let changec = function(){
      document.body.style.backgroundColor = randomColor();
    }

    //update intervalId
    intervalId = setInterval(changec,500);
    
  };
  // function to stop the color change using clearInterval()
  const stopChangingColor = function () {
    clearInterval(intervalId);
    // Reset the value of intervalId for good code practise/habbit
    intervalId = null;
  };
  
  // capture click and element
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
