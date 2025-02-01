
const quote = document.querySelector('.quote');
const button = document.querySelector('.quote-generate-btn');

button.addEventListener("click" , function(e) {
    fetch("https://dummyjson.com/quotes/random")
  .then(response => response.json())
  .then(data => {
      
      quote.innerHTML = `${data.quote} — ${data.author}`;
  })
  .catch(error => console.error("Error fetching quote:", error));

})