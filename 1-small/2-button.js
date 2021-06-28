const button = document.getElementById("button2");
button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event)
    alert(`MouseX: ${event.screenX} MouseY: ${event.screenY}`);
    
});
