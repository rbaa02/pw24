function f_circunferencia(raio) {
    return 2 * Math.PI * raio;
}

function f_area(raio) {
    return Math.PI * raio ** 2;
}

function calcular() {
    let raio = Number(document.getElementById('raio').value);

    let circunferencia = f_circunferencia(raio).toFixed(2);
    let area = f_area(raio).toFixed(2);

    document.getElementById('resultado1').textContent = `Circuferência: ${circunferencia}`;
    document.getElementById('resultado2').textContent = `Área: ${area}`;
}
