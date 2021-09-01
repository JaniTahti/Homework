function kertoma(){
    var vup = document.getElementById("Paikka").value;
    /* var vup ottaa id Paikkan valuen */
    var laske = 1;
    /* var laske value on 1 */
    for(var vuub = 1; vuub <= vup; vuub++)
    {
      laske*=vuub;
    }
    document.getElementById("Vastaus").innerHTML = "<p>Luvun " + vup + " kertoma on "+ laske + "</p>";
}
