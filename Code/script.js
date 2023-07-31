var xhttp = new XMLHttpRequest();
callXml();

function callXml() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("test");
            myFunction(this);
        }
    };
    var newFileName = "content.xml?" + new Date().getTime();
    xhttp.open("GET", newFileName);
    if (xhttp.open("GET", newFileName) == null) {
        console.log("null0");
    }
    xhttp.send();
}

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    if (xmlDoc == null) {
        console.log("null");
    }
    var table = "<tr><th>Text</th></tr>";
    var x = xmlDoc.getElementsByTagName("TEST");
    table += "<tr><td>" + x[0].getElementsByTagName("TEXT")[0].childNodes[0].nodeValue
    document.getElementById("lefttable").innerHTML = table;
}