function Form() {
    if (document.getElementById("nimi").value.trim() == "") {
        alert("Lisää nimi");
        return false;
    }

    if (document.getElementById("comment").value.trim() == "") {
        alert("Lisää jonkin lainen kommenntti");
        return false;
    }

    if (document.getElementById("email").value.trim() == "") {
        alert("Lisää gmail osoitteesi");
        return false;
    }

    if (document.getElementById("number").value.trim() == "") {
        alert("Lisää ikäsi");
        return false;
    }
   
};