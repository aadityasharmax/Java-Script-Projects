let requestUrl = "";

document.querySelector("#sbt").addEventListener("click", function (e) {

  requestUrl = document.querySelector("#inputtxt").value;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestUrl);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      const pic = data.avatar_url;
      const followers = data.followers;
      const name = data.name;
      console.log(followers);
      console.log(pic);
      const picture = document.querySelector("#pic");
      const follower = document.querySelector("#followers");
      const namee = document.querySelector("#name");
      picture.src = pic;
      follower.innerHTML = `Followers : ${followers}`;
      namee.innerHTML = `Name : ${name}`;

      // only show card when submit is pressed 

      document.querySelector(".wrapper").style.display = "flex";
    }
  };
  xhr.send();
});
