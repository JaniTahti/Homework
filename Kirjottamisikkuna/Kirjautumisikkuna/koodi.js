function tarkistus(form) {

var etunimi = document.getElementById("enimi").value;
var sähköposti = document.getElementById("sposti").value;
var salainensana = document.getElementById("salasana").value;
var palauteruutu = document.getElementById("palaute").value;
var pallukat = document.getElementById("kysymys1").value;
var checkboksit = document.getElementById("kysymys2").value;

if(etunimi.length < 3) {
  alert("Nimen pitää ainakin olla 3 merkinen");
    form.etunimi.focus();
    return false;
  }

var ehdot = /\S+@\S+/;
  if(!ehdot.test(sähköposti))
  {
    alert("Anna kunnon sähköposti");
    form.sähköposti.focus();
    return false;
  }
 
if(salainensana.length < 5) {
  alert ("Salasana pitää ainakin olla 5 kirjaiminen");
  form.salainensana.focus();
  return false;
}

var tollanen = false;
for(var i = 0; i < kysymys1.length; i++) {
  if(kysymys1[i].checked == true) {
    tollanen = true;
  }
}
if(tollanen == false) {
  alert("Et ole valinnut yhtäkään pallukkaa!");
  return false;
}

var checkbox = false;
for(var j = 0; j < kysymys2.length; j++) {
  if(kysymys2[j].checked == true) {
    checkbox = true;
  }
}
if(checkbox == false) {
  alert("Et ole valinnut yhtäkään checkboxia")
  return false;
}

if(palauteruutu.length < 15) {
  alert("Sinun pitää kirjoittaa tähän palautekenttään vähintään 15 kirjainta");
  form.palauteruutu.focus();
  return false;
  }

}
