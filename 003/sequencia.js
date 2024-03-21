function calcular() {
    let resultado = "";
    let calc = "";
    let qtd = Number(document.getElementById('qtd').value);

    for (i = 1; i <= qtd; i++) {
        calc += "" + i;
        resultado += calc + "<br>";
    }

    document.getElementById('resultado').innerHTML = resultado;
}