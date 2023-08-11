var titles = [ "Title" ];
var descriptions = [ "Description" ];
var images = [ "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png" ];
addTemplates();

function addTemplates() {
    table = "";
    for (let i = 0; i < titles.length; i++) {
        if (images[i] == undefined) {
            table += "<button id =" + i + " onclick=\"remove(id)\">" + "-" + "</button>" + "<table>" + "<tr><th>" + titles[i] + "<tr><td>" + descriptions[i] + "</td></tr>" + "</table>";
        } else {
            table += "<button id =" + i + " onclick=\"remove(id)\">" + "-" + "</button>" + "<table>" + "<tr><th>" + titles[i] + "<tr><td>" + descriptions[i] + "<tr><td> <img src=\"" + images[i] +
            "\" /></td></tr>" + "</table>";
        }
    }
    document.getElementById("list").innerHTML = table;
    console.log(table);
}

function enable() {
    document.getElementById("div").style.display = "block";
}

function submit(newTitle, newDesc) {
    document.getElementById("div").style.display = "none";
    titles.push(newTitle);
    descriptions.push(newDesc);
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputDesc").value = "";
    document.getElementById("addImgDisplay").src = "https://cdn-icons-png.flaticon.com/512/4211/4211763.png";
    addTemplates();
}

function remove(id) {
    titles.splice(id, 1);
    descriptions.splice(id, 1);
    images.splice(id, 1);
    addTemplates();
}

var loadFile = function(event) {
    var image = document.getElementById('output');
	image = URL.createObjectURL(event.target.files[0]);
    document.getElementById("addImgDisplay").src = image;
    images.push(image);
};