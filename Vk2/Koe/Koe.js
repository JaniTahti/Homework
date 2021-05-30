function Tuomio()
{
 var Nimi = document.getElementById("Nimi").value;
 var Pts = document.getElementById("Pisteet").value;
document.getElementById("HtmlTulos").innerHTML = arvosana(Nimi, Pts);
}
function arvosana(Nimi, Pts)
{
    var tulos;
    
    if (Pts < 50) tulos = "hylätty"
    
    else if (Pts < 60) tulos = "T1"

    else if (Pts < 70) tulos = "T2"
    
    else if (Pts < 80) tulos = "h3"

    else if (Pts < 90) tulos = "h4"
    
    else if (Pts < 101) tulos = "k5"

    else tulos = "error";
    
    return Nimi + " " + tulos;

}
