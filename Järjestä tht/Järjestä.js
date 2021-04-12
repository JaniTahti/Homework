function myFunction()
{
    var a, b, c;
    a = parseInt(document.getElementById('first').value);
    b = parseInt(document.getElementById('second').value);
    c = parseInt(document.getElementById('third').value);
    var luvut = new Array(a, b, c);
    luvut.sort();
    var x = luvut.toString();
document.write(x);
}