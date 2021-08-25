function Point()
{
  var Kirjain = document.getElementById("Texti").value;
  var Points = 0;
  for(var vup = 0; vup < Kirjain.length; vup+=1)
  {
    switch (Kirjain[vup]) {
      case "s":
      case "S":
      case "T":
      case "ä":
      case "ö":
      case "F":
        Points+=1;
        break;
      case "o":
      case "k":
      case "l":
      case "O":
      case "K":
      case "L":
        Points+=2;
        break;
      case "m":
      case "M":
      case "J":
      case "P":
      case "R":
      case "V":
      case "t":
      case "A":
      case "E":
      case "I":
      case "N":
        Points+=2.5;
        break;
      case "y":
      case "h":
      case "j":
      case "p":
      case "r":
      case "v":
      case "Y":
      case "H":
      case "d":
      case "D":
      case "U":
      case "u":
        Points+=3.5;
        break;
      case "Ö":
      case "b":
      case "f":
      case "g":
      case "B":
      case "G":
      case "Ä":
      case "a":
      case "e":
      case "i":
      case "n":
        Points+=4;
      break;
      default:
        Points+=5;
    }
    document.getElementById("Paikka").innerHTML = "<p> Pisteesi ovat " + Points + "</p>";
  }
}