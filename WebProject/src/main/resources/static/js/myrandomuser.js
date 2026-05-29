function displayUser(user) {
    document.getElementById("userImage").src = user.image || "";
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userGender").textContent = user.gender;
}

let currentIndex = 0;

function getAndDisplayNextRandomUser() {
    fetch("http://localhost:8080/api/users")
        .then(response => response.json())
        .then(data => {

            currentIndex = (currentIndex + 1) % data.length;

            var userData = data[currentIndex];

            displayUser({
                name: userData.name,
                gender: userData.gender,
                image: "http://localhost:8080/" + userData.image
            });
        });
}

getAndDisplayNextRandomUser();
window.getAndDisplayNextRandomUser = getAndDisplayNextRandomUser;
