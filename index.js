var cMode = "Light";
function changeBg(){
    if(cMode == "Dark") {
    body.style.backgroundColor= "white";
    body.style.color ="black";
    mode.src = "Images/dark.png";
    success.style.opacity = 1;
    success.innerHTML = "Light Mode Applied";
    cMode = "Light"
    setTimeout(timeout, 2000);
    function timeout()
    {
        success.style.opacity ="0";
    };
    }
    else {
    cMode = "Dark";
    success.style.opacity = 1;
    success.innerHTML = "Dark Mode Applied";
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "white";
    document.getElementById("mode").src = "Images/light.png";
    setTimeout(timeout, 2000);
    function timeout()
    {
        success.style.opacity ="0";
    }
}
}
