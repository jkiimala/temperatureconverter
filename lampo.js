function muunnos() {
    const lampotila = document.getElementById("lammot").value;
    const syote = document.getElementById("celsius");
    const muunnettulampo = document.getElementById("tulos");

    
    if (syote.value === "" || isNaN(parseFloat(syote.value))) {
        alert("HOX! Syötä lämpötila lukuarvona.");
        return;
    }

    if (lampotila === "celsius") {
        const celsius = parseFloat(syote.value);

        if (celsius < -273.15) {
            alert("HOX! Lämpötila on pienempi kuin absoluuttinen nollapiste (-273.15 °C) Syötä uusi lämpötila.");
        } else {
            const fahrenheit = (celsius * 1.8) + 32;
            muunnettulampo.value = fahrenheit.toFixed(
                parseInt(document.querySelector('input[name="desimaali"]:checked').value)
            ) + " °F";
        }
    } else if (lampotila === "fahrenheit") {
        const fahrenheit = parseFloat(syote.value);
        const celsius = (fahrenheit - 32) / 1.8;

        if (celsius < -273.15) {
            alert("HOX! Lämpötila on pienempi kuin absoluuttinen nollapiste (-273.15 °C) Syötä uusi lämpötila.");
        } else {
            muunnettulampo.value = celsius.toFixed(
                parseInt(document.querySelector('input[name="desimaali"]:checked').value)
            ) + " °C";
        }
    }
}





