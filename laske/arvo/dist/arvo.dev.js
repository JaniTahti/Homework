"use strict";

function arvo() {
  var dim = " ";

  for (var vup = 1; vup <= 100; vup++) {
    if (vup % 3 == 0 & vup % 5 == 0) {
      dim += "Heel yeah"; // 8 Kirjaimen välein koodi kirjoittaa Heel yeah
    } else if (vup % 5 == 0) {
      dim += "yeah"; // 5 Kirjaimen välein koodi kirjoitaa yeah
    } else if (vup % 3 == 0) {
      dim += "eh"; // Kolmen kirjaimen välien koodi kirjoitaa eh
    } else {
      dim += vup + " ";
    }

    document.getElementById("Paikka").innerHTML = dim;
  }
}