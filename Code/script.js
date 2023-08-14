var titles = [ "Title" ];
var titleColorArr = [ "#000000" ]
var descriptions = [ "Description" ];
var descColorArr = [ "#000000" ]
var images = [ "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png" ];
var saveImage = false;
if (localStorage.titleList != undefined) {
    loadSavedTable();
} else {
    addTemplates();
}

function addTemplates() {
    table = "";
    // Add table to website based on template
    for (let i = 0; i < titles.length; i++) {
        if (images[i] == undefined) {
            table += "<button id =" + i + " onclick=\"remove(id)\">" + "-" + "</button>" + "<table>" + "<tr><th style=\"color:" + titleColorArr[i] + "\" >" + titles[i] + "<tr><td style=\"color:" + descColorArr[i] + "\" >" + descriptions[i] + "</td></tr>" + "</table>";
        } else {
            table += "<button id =" + i + " onclick=\"remove(id)\">" + "-" + "</button>" + "<table>" + "<tr><th style=\"color:" + titleColorArr[i] + "\" >" + titles[i] + "<tr><td style=\"color:" + descColorArr[i] + "\" >" + descriptions[i] + "</td></tr>" + "<tr><td> <img src=\"" + images[i] +
            "\" /></td></tr>" + "</table>";
        }
    }
    document.getElementById("list").innerHTML = table;
    // Save arrays to storage
    localStorage.titleList = titles.join();
    localStorage.titleColorList = titleColorArr.join();
    localStorage.descList = descriptions.join();
    localStorage.descColorList = descColorArr.join();
    localStorage.imgList = images.join();
}

    // Show "Add List Item" page
function enable() {
    document.getElementById("div").style.display = "block";
}

// Save title, description, and when clicking "submit"
function submit(newTitle, newDesc, newImage, newTitleColor, newDescColor) {
    document.getElementById("div").style.display = "none";
    titles.push(newTitle);
    titleColorArr.push(newTitleColor);
    descriptions.push(newDesc);
    descColorArr.push(newDescColor);
    if (saveImage) {
        images.push(newImage);
    }
    saveImage = false;
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputDesc").value = "";
    document.getElementById("addImgDisplay").src = "https://cdn-icons-png.flaticon.com/512/4211/4211763.png";
    document.getElementById("titleColor").value = "#000000"
    document.getElementById("descColor").value = "#000000"
    addTemplates();
}

// Remove template upon clicking "minus"
function remove(id) {
    titles.splice(id, 1);
    descriptions.splice(id, 1);
    images.splice(id, 1);
    addTemplates();
}

// Change "add image" button
var loadFile = function(event) {
    var image = document.getElementById('output');
	image = URL.createObjectURL(event.target.files[0]);
    document.getElementById("addImgDisplay").src = image;
    saveImage = true;
};

// Load list upon reload from storage
function loadSavedTable() {
    var ttl = localStorage.titleList;
    titles = ttl.split(",");
    var ttlcol = localStorage.titleColorList;
    titleColorArr = ttlcol.split(",");
    var dsc = localStorage.descList;
    descriptions = dsc.split(",");
    var dsccol = localStorage.descColorList;
    descColorArr = dsccol.split(",");
    images = localStorage.imgList.split(",");
    addTemplates();
}