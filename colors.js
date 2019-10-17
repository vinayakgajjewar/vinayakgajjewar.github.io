var darkMode = true;
var toggleColors = function() {
    if (darkMode) {
        document.getElementsByTagName("body")[0].style.background = "#fdf6e3";
        document.getElementsByClassName("jumbotron")[0].style.background = "#eee8d5";
        document.getElementsByClassName("btn")[0].style.background = "#eee8d5";
        document.getElementsByTagName("body")[0].style.color = "#657b83";
        darkMode = false;
    } else {
        document.getElementsByTagName("body")[0].style.background = "#002b36";
        document.getElementsByClassName("jumbotron")[0].style.background = "#073642";
        document.getElementsByClassName("btn")[0].style.background = "#073642";
        document.getElementsByTagName("body")[0].style.color = "#93a1a1";
        darkMode = true;
    }
}
document.getElementById("colorsToggleBtn").onclick = toggleColors;