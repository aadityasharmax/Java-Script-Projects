function getUrl(username) {
  return `https://api.github.com/users/${username}`;
}

document.querySelector("#sbt").addEventListener("click", function (e) {
  const username = document.querySelector("#inputtxt").value;

  fetch(getUrl(username))
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      const pic = data.avatar_url;
      const followers = data.followers;
      const name = data.name;
      const companyd = data.company;
      const publicrepod = data.public_repos;
      const locationd = data.location;
      console.log(followers);
      console.log(pic);
      const picture = document.querySelector("#pic");
      const follower = document.querySelector("#followers");
      const namee = document.querySelector("#name");
      const company = document.querySelector("#company");
      const publicrepo = document.querySelector("#publicrepo");
      const location = document.querySelector("#location");
      picture.src = pic;
      follower.innerHTML = `Followers: ${followers}`;
      namee.innerHTML = `Name: ${name}`;
      company.innerHTML = `Company: ${companyd}`;
      publicrepo.innerHTML = `Public repository: ${publicrepod}`;
      location.innerHTML = `Location: ${locationd}`;

      // Show the wrapper element and download button
      document.querySelector(".wrapper").style.display = "flex";
      document.querySelector("#downloadBtn").style.display = "block";

      // Update the download button event listener
      document.querySelector("#downloadBtn").onclick = function () {
        const wrapper = document.querySelector(".wrapper");
        html2canvas(wrapper, {
          useCORS: true, // Enable CORS
          allowTaint: false, // Do not allow cross-origin images to taint the canvas
        }).then(function (canvas) {
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = `${username}-github-card.png`;
          link.click();
        });
      };
    })
    .catch(error => console.log('Fetch error: ', error));
});