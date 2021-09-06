function sala() {
    var Ösana = document.getElementById("ÖNum1").value;
    var salasana = "<p>";
  
    for (var Ö = 0; Ö < Ösana.length; Ö++) {
      salasana += Ösana[Ö] + "Ö";
    }
  
    salasana += "</p>";
    document.getElementById("Paikka").innerHTML = salasana;
  }
