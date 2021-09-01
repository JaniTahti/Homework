function Lotto() {
    var lotto = [];
    var temp;
  
    for (var Num = 0; Num < 7; Num++) {
      temp = Math.floor(Math.random() * 40) + 1;
      lotto[Num] = temp;
    }
  
    lotto.sort();
    document.getElementById("Nappula").innerHTML = "<p>" + lotto + "</p>";
  }