const usernameInput = document.getElementById("username");

function checkUsernameLength() {
const myRegex = "^[A-Z, a-z]{1,15}$";
if (!myRegex.test(usernameInput.value)) {
usernameInput.setCustomValidity("Please use only 15 characters");
    } else {usernameInput.setCustomValidity("");
}
}

usernameInput.addEventListener("change",) 
