function Ei()
{
    var Sana = document.getElementById("Boxi").value;
    var Tulos = "ei ole ö kirjainta"
    for(var s = 0; s < Sana.length; s++)
    {
      if(Sana[s] == "ö")
      {
        Tulos = "on";
      }
    }
    document.write(Tulos);
}