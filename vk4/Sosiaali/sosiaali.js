function Boxi()
{
    var tulos = "Ei ole sotu";
    var str = document.getElementById("Boxi").value;
    if (str.length == 12);
    {
        var väli = str.substring(6, 7);
        var loppu = str.substring(10, 11);
        if (väli == "-" || väli ==  "A")
        {
           if (isLetter(loppu) || !isNaN(loppu)) tulos = "on sotu";
        }
    }
    document.write(tulos);
}
function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}