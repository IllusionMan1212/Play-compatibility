function ChangeTheme() {
    if (document.getElementById("styles").getAttribute("href") == "css/creative.css") {
        document.getElementById("btn").innerHTML = "White Theme";
        document.getElementById("styles").setAttribute("href", "css/dark.css");
    }
    else {
        document.getElementById("btn").innerHTML = "Dark Theme";
        document.getElementById("styles").setAttribute("href", "css/creative.css");
    }
}