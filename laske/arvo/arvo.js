function arvo() {
  var dim = " ";

  for (var vup = 1; vup <= 100; vup++) {
    if (vup % 3 == 0 & vup % 5 == 0) {
      dim += "Heel yeah";
    } else if (vup % 5 == 0) {
      dim += "yeah";
    } else if (vup % 3 == 0) {
      dim += "eh";
    } else {
      dim += vup + " ";
    }

    document.getElementById("Paikka").innerHTML = dim;
  }
}