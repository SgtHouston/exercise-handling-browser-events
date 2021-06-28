const button1 = document.getElementById("button1");
function clickOnce() {
  alert("Button Pressed!");
  button1.removeEventListener("click", clickOnce);
}
button1.addEventListener("click", clickOnce);



