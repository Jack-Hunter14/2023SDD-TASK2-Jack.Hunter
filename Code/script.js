callXml();

var titles = [ "Title", "2", "3", "4" ];
var descriptions = [ "Description" ];
var images = [ "https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_1280.png" ];

function callXml() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    var newFileName = "content.xml?" + new Date().getTime();
    xhttp.open("GET", newFileName, true);
    xhttp.send();
}

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("TEMPLATE");
    xmlDoc.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue = "Wow";
    table = "";
    for (let i = 0; i < titles.length; i++) {
        table += "<table>" + "<tr><th>" + x[0].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "<tr><td>" + x[0].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue + "<tr><td> <img src=\"" + x[0].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue +
        "\" /></td></tr>" + "</table>" + "<button>" + x[0].getElementsByTagName("REMOVE")[0].childNodes[0].nodeValue + "</button>";
    }
    document.getElementById("list").innerHTML = table;
}