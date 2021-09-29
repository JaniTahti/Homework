"use strict";

function Point() {
  var Kirjain = document.getElementById("Texti").value; // Kirjain Ottaa "Texti" tagin ideen

  var Points = 0;

  for (var vup = 0; vup < Kirjain.length; vup += 1) // Laskee annetun sanan pituuden 
  {
    switch (Kirjain[vup]) {
      case "s":
      case "S":
      case "T":
      case "ä":
      case "F":
      case "B":
      case "G":
      case "Ä":
      case "a":
      case "e":
      case "i":
      case "n":
        // Ylempi koodi antaa annetuille kirjaimille arvon 1 
        Points += 1;
        break;

      case "o":
      case "k":
      case "l":
      case "O":
      case "K":
      case "L":
      case "R":
      case "v":
      case "Y":
      case "H":
      case "d":
      case "D":
      case "U":
      case "u":
        // Ylempi koodi antaa annetuille kirjaimille arvon 2 
        Points += 2;
        break;

      case "m":
      case "M":
      case "J":
      case "P":
      case "V":
      case "t":
      case "A":
      case "E":
      case "I":
      case "N":
        // Ylempi koodi antaa annetuille kirjaimille arvon 2.5 
        Points += 2.5;
        break;

      case "y":
      case "h":
      case "j":
      case "p":
      case "r":
        // Ylempi koodi antaa annetuille Kirjaimille arvon 3.5 
        Points += 3.5;
        break;

      case "b":
      case "f":
      case "g":
        // Ylempi koodi antaa annetuille kirjaimille arovn 3.5
        Points += 4;
        break;

      case "ö":
      case "Ö":
      default:
        // Yeempi koodi antaa enetuille kirjaimille arvon 4
        Points += 5;
    }

    document.getElementById("Paikka").innerHTML = "<p> Pisteetsi ovat " + Points + "</p>"; // Ottaa Paikka ideen elementin ja kirjoitaa sanan pisteet
  }
}