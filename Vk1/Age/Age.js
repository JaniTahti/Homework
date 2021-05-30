function Vuos()
{
    var vuosi  = document.getElementById("Vuosi").value;
    var kk  = document.getElementById("kk").value;
    var pv  = document.getElementById("pv").value;

    
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(vuosi, kk, pv);
    const secondDate = new Date();
    

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    document.write(diffDays);
}
