const insert = document.querySelector('#insert');

// Cature the whole window and applying event listener 
window.document.addEventListener('keydown',(e)=>{
  insert.innerHTML = `<div class="c1">
  <table class="neon-pink">
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space": e.key }</td>
    <td>${e.which}</td> 
    <td>${e.code}</td>
  </tr>
</table>
  </div>`


})