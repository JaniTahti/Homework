function sum(){
    var x = document.getElementById("Num1").value;
    var y = document.getElementById("Num2").value;

    var vastaus = Number(x) + Number(y);
    document.write(vastaus);
    
    
    if(vastaus < 100)
    {
      console.log("Lukujen summa on alle 100");
    }
    else if(vastaus > 100)
    {
      console.log("Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!");
    }
  
}