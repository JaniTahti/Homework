let nappi = document.getElementById('addToDo');
let Tht = document.getElementById('Tht');
let alue = document.getElementById('alue');

nappi.addEventListener('click', function(){
    var paragraph = document.createElement('p');

    paragraph.classList.add('paragraph-styling');
        paragraph.innerText = alue.value;

        Tht.appendChild(paragraph);
        alue.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        Tht.removeChild(paragraph);
    })
})

