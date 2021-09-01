function Potenssi() {
  var Koro = document.getElementById("Num1").value;
  var Poto = document.getElementById("Num2").value;
  yht = Koro;

  for (var r = 1; r < Poto; r++) {
    yht *= Koro;
  }

  document.getElementById("Paikka").innerHTML = yht;
}