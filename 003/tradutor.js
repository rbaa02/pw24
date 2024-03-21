function traduzir() {
    let opc = document.getElementById('opc');
    let lingua = opc.options[opc.selectedIndex].value;
    let resultado = document.getElementById("resultado");
    
    switch (lingua){
        case 'fr':
            resultado.textContent = "Bonjour tout le monde!";
            break;

        case "es":
            resultado.textContent = "Hola, Mundo!";
            break;
        default:
            resultado.textContent = "Hello, world!";
            break
    }
}