callXml();
var testName = "yessir";

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
    var table = "<tr><th>Text</th></tr>";
    var x = xmlDoc.getElementsByTagName("TEMPLATE");
    xmlDoc.getElementsByTagName("TITLE")[0].childNodes[0].nodeValue = "new";
    table += "<tr><td>" + x[0].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
    document.getElementById("list").innerHTML = table;
}