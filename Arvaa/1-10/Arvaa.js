let btn = document.getElementById('btn');
let output = document.getElementById('output');

let number = [Math.floor(Math.random() * 10)]

btn.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    if (input == number){
        output.innerHTML = `OIKEIN!, numero oli ${number}`
    }   else if (input < number){
        output.innerHTML = "Liian matala"
    };
    if ( input > number){
        output.innerHTML = "Liian korkea"
    }
});