fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
}).then((data) =>{
    data.forEach(user => {
        console.log(user.username);
    });
}).catch((error) => console.log(error));
        
        
    