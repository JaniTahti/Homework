function myFunction()
{
var a, b, c, d, e, suurin;
a = parseInt(document.getElementById("first").value);
b = parseInt(document.getElementById("second").value);
c = parseInt(document.getElementById("third").value);
d = parseInt(document.getElementById("fourd").value);
e = parseInt(document.getElementById("fift").value);
if(a < b && c < b && d < b && e < b)
{
  suurin = b;
}
else if(a < c && d < c && le < c)
{
  suurin = c;
}
else if(a < d && e < d)
{
  suurin = d;
}
else if(a < e)
{
  suurin = e;
}
else {
  suurin = a;

    }
    document.write("Annoit luvut: " + a + " " + b + " " + c + " " + d + " " + e);
    document.write("<br>Suurin niistä on: " + suurin);
  }
 
  