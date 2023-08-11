var titles = [ "Title", "2", "3", "4" ];
var descriptions = [ "Description", "2", "3", "4" ];
var images = [ "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png", "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png", "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png", "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png" ];
addTemplates();

function addTemplates() {
    table = "";
    for (let i = 0; i < images.length; i++) {
        table += "<table>" + "<tr><th>" + titles[i] + "<tr><td>" + descriptions[i] + "<tr><td> <img src=\"" + images[i] +
        "\" /></td></tr>" + "</table>" + "<button id =" + i + " onclick=\"remove(id)\">" + "-" + "</button>";
    }
    document.getElementById("list").innerHTML = table;
}

function enable() {
    document.getElementById("div").style.display = "block";
}
function submit(newTitle, newDesc, newImg) {
    console.log(newImg);
    document.getElementById("div").style.display = "none";
    titles.push(newTitle);
    descriptions.push(newDesc);
    addTemplates();
}
function remove(id) {
    titles.splice(id, 1);
    descriptions.splice(id, 1);
    images.splice(id, 1);
    addTemplates();
}
var loadFile = function(event) {
	console.log("hi");
    var image = document.getElementById('output');
	image = URL.createObjectURL(event.target.files[0]);
    document.getElementById("addImgDisplay").src = image;
    images.push(image);
};