const like = document.querySelectorAll('.like');
const save = document.querySelectorAll('.save');
const share = document.querySelectorAll('.share');

like.forEach(like => {
    like.addEventListener("click", function(e) {
        if (like.style.color === "red") {
            like.style.color = "";
        } else {
            like.style.color = "red";
        }
    });
});

save.forEach(save => {
    save.addEventListener("click", function(e) {
        if (save.style.color === "green") {
            save.style.color = "";
        } else {
            save.style.color = "green";
        }
    });
});


share.forEach(share => {
    share.addEventListener("click", function(e) {
        if (share.style.color === "blue") {
            share.style.color = "";
        } else {
            share.style.color = "blue";
        }
    });
}); 