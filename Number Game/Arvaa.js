var vst1 = document.getElementById("viesti1");
var vst2 = document.getElementById("viesti2");
var vst3 = document.getElementById("viesti3");

var vastaus = Math.floor(Math.random()*10) + 1;
var arvaukset = 0;
var arvaa_num = [];

function play(){
    var ktjKysymys = document.getElementById("guess").value;
    if(ktjKysymys < 1 || ktjKysymys > 100){
        alert("Arvaa luvun 1-100 välillä.");
    }
    else{
        arvaa_num.push(ktjKysymys);
        arvaukset+= 1;

        if(ktjKysymys < vastaus){
            vst1.textContent = "Liian pieni.";
            vst2.textContent = "Olet arvannut: " + arvaukset;
            vst3.textContent = "Arvatut numerot: " +
            arvaa_num;
        }
        else if(ktjKysymys > vastaus){
            vst1.textContent = "Liian korkea.";
            vst2.textContent = "Olet arvannut: " + arvaukset;
            vst3.textContent = "Arvatut numerot ovat: " +
            arvaa_num;
        }
        else if(ktjKysymys == vastaus){
            vst1.textContent = "Oikein :)";
            vst2.textContent = "Numero oli: " + vastaus;
            vst3.textContent = "arvasit sen "+ arvaukset + " yritykselläsi";
            document.getElementById("my_btn").disabled = true;
        }
    }
}