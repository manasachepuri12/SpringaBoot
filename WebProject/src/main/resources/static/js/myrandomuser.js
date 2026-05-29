function displayUser(user) {
    document.getElementById("userImage").src = user.image || "";
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userGender").textContent = user.gender;
}

function getAndDisplayNextRandomUser() {
    fetch("http://localhost:8080/api/users")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {

            var randomIndex = Math.floor(Math.random() * data.length);
var userData = data[randomIndex];

            var myUserObject = {};
            myUserObject.name = userData.name;
            myUserObject.gender = userData.gender;
            myUserObject.image = "http://localhost:8080/" + userData.img;
            displayUser(myUserObject);
        })
        .catch(function(err) {
            console.log("ERROR " + err);
        });
}

getAndDisplayNextRandomUser();
window.getAndDisplayNextRandomUser = getAndDisplayNextRandomUser;
