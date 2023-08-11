var titles = [ "Title", "2", "3", "4" ];
var descriptions = [ "Description", "2", "3", "4" ];
var images = [ "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png", "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png", "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png", "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png" ];
addTemplates();

function addTemplates() {
    table = "";
    for (let i = 0; i < images.length; i++) {
        table += "<table>" + "<tr><th>" + titles[i] + "<tr><td>" + descriptions[i] + "<tr><td> <img src=\"" + images[i] +
        "\" /></td></tr>" + "</table>" + "<button>" + "-" + "</button>";
    }
    document.getElementById("list").innerHTML = table;
}

function enable() {
    document.getElementById("div").style.display = "block";
}
function submit() {
    document.getElementById("div").style.display = "none";
}