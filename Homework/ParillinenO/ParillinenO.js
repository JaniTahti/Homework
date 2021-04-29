function Parillinen()
{
  var fArvo = parseInt(document.getElementById("first").value);
  var sArvo = " ";
  for(var tArvo = 2; tArvo <= fArvo; tArvo= tArvo+2)
  {
    sArvo+=tArvo;
    sArvo+=" ";
  }
    document.write(sArvo);
}