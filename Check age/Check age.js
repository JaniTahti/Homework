function CheckAge()
{
  var Ikä = parseInt(document.getElementById("ika").value);
  if(Ikä < 16)
  {
    document.write("Voit ajaa pyörää");
  }
  else if(Ikä < 18)
  {
    document.write("Voit ajaa mopoa");
  }
  else {
    document.write("Voit ajaa autoa");
  }
}