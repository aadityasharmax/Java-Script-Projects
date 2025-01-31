
const quote = document.querySelector('.quote');
const button = document.querySelector('.quote-generate-btn');

button.addEventListener("click" , function(e) {
    fetch("https://api.quotable.io/random")
  .then(response => response.json())
  .then(data => {
      
      quote.innerHTML = `${data.content} — ${data.author}`;
  })
  .catch(error => console.error("Error fetching quote:", error));

})