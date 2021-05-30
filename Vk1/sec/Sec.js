function sum()
{
  var H = document.getElementById("H").value;
  var Min = document.getElementById("Min").value;
  var Sec = document.getElementById("Sec").value;
  var sekunnit = sekunneiksi(H, Min, Sec);
  document.write(sekunnit);
} 
function sekunneiksi(H, Min, Sec)
{
    var vastaus = Number(Sec) + Number(Min) * 60 + Number(H) * 3600;
    return vastaus;
}
