function rounding() {
    var number = document.getElementById("number_get").value;
    
    if (parseFloat(number) === parseInt(number)) {
        document.getElementById("wynik1").innerHTML = "CAŁKOWITA CHŁOPIE";
        document.getElementById("wynik2").innerHTML = "CAŁKOWITA CHŁOPIE";
        document.getElementById("wynik3").innerHTML = "CAŁKOWITA CHŁOPIE";
        document.getElementById("wynik4").innerHTML = "CAŁKOWITA CHŁOPIE";
    }
    else {
        document.getElementById("wynik1").innerHTML = "<h2>Zaokrąglanie do góry: </h2>" + "<br>" + Math.ceil(number);
        document.getElementById("wynik2").innerHTML = "<h2>Zaokrąglanie do dołu: </h2>" + "<br>" + Math.floor(number);
        document.getElementById("wynik3").innerHTML = "<h2>Zaokrąglanie zwykle: </h2>" + "<br>" + Math.round(number);
        document.getElementById("wynik4").innerHTML = "<h2>Usunięcie części ulamkowej: </h2>" + "<br>" + Math.trunc(number);
    }
}
